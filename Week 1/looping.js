console.log("ini adalah file looping");

let temp = [];

for (i = 0; i < 10; i++) {
  temp.push(i + 1);
}

console.log(temp);

document.getElementById("perulanganContent").innerHTML = temp;

function renderCard(count) {
  let cards = [];
  for (i = 1; i <= count; i++) {
    cards.push(
      `<div class="card">
      <img src="https://storage.dumbways.microgen.id/microgen-lms1586588410220/course/640ag5ra2k5HTML%20&%20CSS.webp"
          alt="gambar">
      <div class="card-body">
          <h3>Judul</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s</p>
          </div>
      </div>`
    );
  }

  document.getElementById("contentContainer").innerHTML = cards.join(" ");
}

renderCard(10);
