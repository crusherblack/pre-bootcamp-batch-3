/* console.log("ini adalah file looping");

let temp = [];

for (i = 0; i < 10; i++) {
  temp.push(i + 1);
}

document.getElementById("perulanganContent").innerHTML = temp; */

const posts = [
  {
    id: 1,
    title: "Belajar Javascript",
  },
  {
    id: 2,
    title: "Belajar React",
  },
  {
    id: 3,
    title: "Belajar HTML",
  },
  {
    id: 4,
    title: "Belajar React.js",
  },
  {
    id: 5,
    title: "Belajar CSS",
  },
  {
    id: 6,
    title: "Belajar Mencintaimu",
  },
];

function renderCard() {
  let cards = [];
  for (i = 0; i < posts.length; i++) {
    cards.push(
      `<div class="card">
      <img src="https://storage.dumbways.microgen.id/microgen-lms1586588410220/course/640ag5ra2k5HTML%20&%20CSS.webp"
          alt="gambar">
      <div class="card-body">
          <h3>${posts[i].title}</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s</p>
          </div>
      </div>`
    );
  }

  document.getElementById("contentContainer").innerHTML = cards.join(" ");
}

renderCard();

/* 
pengecekan kondisi
== apakah sama dengan
> lebih besar dari 
< lebih kecil dari 
<= lebih kecil dari sama dengan 
>= lebih besar dari sama dengan 
*/

const number1 = 10;
const number2 = 10;

const nama1 = "fadhil";
const nama2 = "fadhil darma";

console.log(nama1 == nama2);

/* 
while akan melakukan perulangan jika kondisi terpenuhi / true dan akan berhenti 
jika kondisi menjadi false 
evaluasi kondisi diawal
*/

let increament = 0;

while (increament < 10) {
  console.log("aku adalah kamu " + (increament + 1));
  increament++;
}

/* 
do while akan melakukan perulangan minimal 1 kali dan akan menstop perulangan jika kondisi false
evaluasi kondisi diakhir 
*/

let inc = 0;

do {
  console.log("ini adalah do while");
  inc++;
} while (inc < 5);

for (j = 0; j < 5; j++) {
  console.log("ini dari for");
}

const students = [
  {
    name: "Artha",
    gender: "male",
  }, // index ke 0
  {
    name: "Riski",
    gender: "male",
  }, // index ke 1
  {
    name: "Sundus",
    gender: "male",
  }, // index ke 2
  {
    name: "Nurlela",
    gender: "famale",
  }, // index ke 3
  {
    name: "Anggie",
    gender: "male",
  }, // index ke 4
  {
    name: "Wahyu",
    gender: "male",
  }, // index ke 5
];

for (z = 0; z < students.length; z++) {
  document.write(`
    <h1>nama: ${students[z].name}</h1>
    <h3>Gender: ${students[z].gender}</h3>
  `);
}

//for of hanya menerima array
//langsung akses object properties pada element
//digunakan hanya untuk array of object
for (student of students) {
  document.write(`
    <h1>nama: ${student.name}</h1>
    <h3>Gender: ${student.gender}</h3>
  `);
}

//for in hanya menerima array
//bisa akses index dari array setiap perulangan
for (var index in students) {
  document.write(`
    <h1>nama: ${students[index].name}</h1>
    <h3>Gender: ${students[index].gender}</h3>
  `);
}
