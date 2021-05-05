const colors = ["red", "green", "yellow"];

colors.push("purple"); //nambah diakhir
colors.unshift("white"); //nambah element diawal

console.log(colors);

const cars = ["angkot", "taxy", "grab"];
cars.pop(); //remove element terakhir
cars.shift(); //remove element diawal

console.log(cars);

const animals = ["dog", "cat", "bird"];
animals.splice(0, 1); //menghapus element susuai index element

console.log(animals);

//slice itu merupakan sebuah method untuk mengcopy element pada array
//sesuai dengan index start (included) hingga index end(not included)
//jangan lupa hasil dari slice tampung pada sebuah variable baru karena
//slice tidak merubah array awal
const names = ["fadhil", "mesra", "budi", "tono", "nina"];
const newName = names.slice(2, 5);

console.log(newName);

const biodata = {
  firstname: "ucok",
  job: "frontend developer",
};

const gantiJob = true;

if (gantiJob) {
  biodata.job = "backend developer";
  biodata.firstname = "ucok baba";
}

delete biodata.job;

console.log(biodata);

const profile = {
  name: "sundus",
  gander: "male",
  printProfile: function () {
    console.log(this.name, this.gander);
  },
};

function testing() {
  console.log(this);
}

profile.printProfile();
testing();

//copy by value
let message = "hello world";

let copyMessage = message;

copyMessage = "hello world ubah";

console.log(message);
console.log(copyMessage);

//copy by reference
const data = {
  title: "new",
};

const newData = data;
newData.title = "baru";

const newData2 = { ...data };
newData2.title = "ubah";

console.log(data);

//multidimensional array
const students = [
  ["putri", "bima", "indra"],
  ["udin", "tirta", "jokowi"],
  ["prabowo", "ganjar", "rydwan"],
];

console.log(students[0][2]);

console.table(students);

for (i = 0; i < 5; i++) {
  console.log("perulangan yang ke" + (i + 1));
  for (j = 0; j < 5; j++) {
    console.log("perulangan nested yang ke" + (j + 1));
  }
}
