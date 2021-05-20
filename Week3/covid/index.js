const getProvinces = async () => {
  try {
    const response = await fetch(
      "https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi"
    );
    const provinces = await response.json();

    const provinceName = provinces.map((province) => ({
      name: province.provinsi,
    }));

    const renderOptions = provinceName.map(
      (province) => `
                  <option value="${province.name}">${province.name}</option>
              `
    );

    document.getElementById("province-selector").innerHTML =
      renderOptions.join("");

    document
      .getElementById("province-selector")
      .addEventListener("change", (e) => {
        const selectedProvince = e.target.value;

        const findProvince = provinces.find(
          (province, index) => province.provinsi === selectedProvince
        );

        const renderProvince = `
                                  <div class="custom-card">
                                      <h3>Nama: ${findProvince.provinsi}</h3>
                                      <h3>Kasus: ${findProvince.kasus}</h3>
                                      <h3>Dirawat: ${findProvince.dirawat}</h3>
                                  </div>
                                  `;

        document.getElementById("provinces-data").innerHTML = renderProvince;
      });
  } catch (error) {
    console.log(error);
  }
};

getProvinces();
