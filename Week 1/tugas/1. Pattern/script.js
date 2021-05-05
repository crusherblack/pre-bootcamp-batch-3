const MIDTRANS_SERVER_KEY = isMidtransProd
  ? "Mid-server-jYOABrCmnrQOlnawdwadtpB4efpWFD"
  : "SB-Mid-server-ivnSYpObPqk0GwwadwadwadQd0Tc4AYiM";
const MIDTRANS_CLIENT_KEY = isMidtransProd
  ? "Mid-client-9n_MFHawdawd2WyNc_Um34"
  : "SB-Mid-client-77sYM0jT2WDwadwadK2BMQ";

const core = new midtransClient.CoreApi();

core.apiConfig.set({
  isProduction: true,
  serverKey: MIDTRANS_SERVER_KEY,
  clientKey: MIDTRANS_CLIENT_KEY,
});

const snap = new midtransClient.Snap({
  isProduction: true,
  serverKey: MIDTRANS_SERVER_KEY,
});

app.post("/midtrans-notification", async (req, res) => {
  const { body } = req;

  const statusResponse = await core.transaction.notification(body);

  const orderId = statusResponse.order_id;
  const transactionStatus = statusResponse.transaction_status;
  const fraudStatus = statusResponse.fraud_status;

  const handleError = async (error) => {
    await app.getRequester("email").send({
      type: "sendToUser",
      body: {
        to: "fadhildarma13@gmail.com",
        from: "noreply@dumbways.id",
        fromName: "DumbWays Indonesia",
        subject: "Testing",
        title: "Midtrans Webhooks Error",
        html: `<pre>${error}</pre>`,
      },
    });

    res.status(500).json({
      message: "server error",
    });
  };

  const handleTransaction = (status) => {
    app
      .getRequester("preClassTransaction")
      .send({
        type: "find",
        where: {
          orderId,
        },
        isSystem: true,
      })
      .then((getPreClassTransactionResponse) => {
        if (
          Array.isArray(getPreClassTransactionResponse) &&
          !getPreClassTransactionResponse.length
        ) {
          return handleError("Transaction Not Found");
        }

        app
          .getRequester("preClassTransaction")
          .send({
            type: "patch",
            id: getPreClassTransactionResponse[0].id,
            body: {
              status,
            },
            isSystem: true,
          })
          .then((updatedPreClassTransactionResponse) => {
            app
              .getRequester("user")
              .send({
                type: "patch",
                id: getPreClassTransactionResponse[0].createdBy,
                body: {
                  preClassStatus:
                    status === "FINISH"
                      ? "PARTICIPATE"
                      : status === "PENDING"
                      ? "PENDING"
                      : "CANDIDATE",
                  currentStep: status === "FINISH" ? 4 : 3,
                },
                isSystem: true,
              })
              .then((patchUserResponse) => {
                app
                  .getRequester("email")
                  .send({
                    type: "sendToUser",
                    body: {
                      to: patchUserResponse.email,
                      from: "noreply@dumbways.id",
                      fromName: "DumbWays Indonesia",
                      subject: "Pembayaran Kelas Persiapan Bootcamp",
                      title: "Status Pembayaran",
                      html: emailTemplate(
                        patchUserResponse.firstName,
                        status,
                        updatedPreClassTransactionResponse.pdfLink
                      ),
                    },
                  })
                  .then((sendEmailResponse) => {
                    app
                      .getRequester("refferal")
                      .send({
                        type: "find",
                        where: {
                          userUsingRefCodeId: patchUserResponse.id,
                        },
                        isSystem: true,
                      })
                      .then((refferalResponse) => {
                        if (refferalResponse.length > 0) {
                          app.getRequester("refferal").send({
                            type: "patch",
                            id: refferalResponse[0].id,
                            body: {
                              status: "PRECLASSPAID",
                              preclasspaid: 100000,
                            },
                            isSystem: true,
                          });
                        }

                        return res.status(200).json({
                          message: "success",
                        });
                      })
                      .catch((error) => handleError(error));
                  })
                  .catch((error) => handleError(error));
              })
              .catch((error) => handleError(error));
          })
          .catch((error) => handleError(error));
      })
      .catch((error) => handleError(error));
  };

  if (transactionStatus == "capture") {
    if (fraudStatus == "challenge") {
      handleTransaction("PENDING");
    } else if (fraudStatus == "accept") {
      handleTransaction("FINISH");
    }
  } else if (transactionStatus == "settlement") {
    handleTransaction("FINISH");
  } else if (transactionStatus == "deny") {
    handleTransaction("DENY");
  } else if (transactionStatus == "cancel" || transactionStatus == "expire") {
    handleTransaction("EXPIRECANCEL");
  } else if (transactionStatus == "pending") {
    handleTransaction("PENDING");
  }
});
