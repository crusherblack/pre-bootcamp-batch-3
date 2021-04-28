console.log("berhasil load javascript");

/* 
Variable adalah penampung data
ada 3 tipe variable
1. var 
2. let 
3. const 
*/

var number1 = 1;

var number1 = 2;

number1 = 3;

console.log(number1);

/*
sifat var:
1. hoisting // variable bisa dideclare lagi dan kalau dideclare value lama itu direplace
2. bisa assign value kembali
*/

let myFriendName = "Siska Kohl";

myFriendName = "Siska 2";

console.log(myFriendName);

/*
sifat let:
1. variable tidak bisa dideclare kembali
2. bisa assign value kembali
*/

const mentorName = "fadhil";

/*
sifat const:
1. variable tidak bisa dideclare kembali
2. value tidak bisa diassign kembali
*/

/* 
kapan menggunakan let, let dan cost?
1. var => jangan pernah pake lagi
2. let => gunakan ketika kita ingin nilainya dynamic
3. const => gunakan ketika nilainya tetap tidak mau berubah 
*/

//Primityve Data Types pada javascript

let myName = "Rama"; //string
let number = 10; //number
relationshipStatus = false; //boolean
nullType = null; //value ada tapi itu 0 atau empty string
let undefinedType = undefined;
let gender; //value tidak ada tapi variable ada

//mencek type dari variable => string, number, boolean, null, undefined
console.log(typeof relationshipStatus);

console.log(typeof gender);

/* 
Non Primityve Data Types pada javascript
1. Object 
2. Date 
3. Array 
*/

//object, dalam object kita bisa menyimpan banyak data pada spesifik properties
let profiles = {
  fullName: "Nurlela",
  gender: "Famale",
  age: 23,
};

console.log(profiles.age);

//array
let cars = ["Lamborgini", "Mitsubishi", "Honda", "Bugati"];
//              0               1          2         3
//index merupakan key untuk mengidentifikasi element berada pada urutan keberapa
//index itu dimulai dari 0

console.log(cars[0]);

//array bisa menampung semua primitive data types dan non primitive data types
let mixArray = [
  true,
  "Hallo",
  23,
  null,
  {
    name: "nama",
  },
  ["array lagi", "hello"],
];

console.log(mixArray[5][1]);

//array of object

let students = [
  {
    fullName: "Nurlela",
    gender: "Famale",
    age: 23,
  },
  {
    fullName: "Artha",
    gender: "Male",
    age: 20,
  },
  {
    fullName: "Adam",
    gender: "Male",
    age: 21,
  },
];

console.log(students[1]);

//date

let date = new Date();

console.log(date);

//object literal
const tahuCodingData = {
  chanelName: "Tahu Coding",
  pubishYear: 2015,
  description: "Chanel ini merupakan chanel pemograman dasar",
  videos: [
    {
      id: 1,
      title: "Tutorial Laravel 8",
      description: "Belajar Laravel terbaru",
      tags: ["Coding", "Laravel", "Tutorial"],
      meta: {
        publish: "12 Maret 2019",
        status: "Publish",
      },
    },
    {
      id: 2,
      title: "Tutorial Fundamental React",
      description: "Belajar React dengan mudah",
      tags: ["Coding", "React", "Terbaru"],
      meta: {
        publish: "13 Maret 2019",
        status: "Archieved",
      },
    },
  ],
};

console.log("title:", tahuCodingData.videos[0].title);
console.log("tag:", tahuCodingData.videos[0].tags[1]);
console.log("meta:", tahuCodingData.videos[0].meta.publish);

//object digunakan jika datanya spesifik
let school = {
  name: "SMK 2 Tanggerang",
  address: "Jl. Sutosomo no.5",
  type: "Negeri",
  priciples: "Andi",
};

console.log("nama sekolah", school.name);
console.log("alamat sekolah", school.address);
console.log("type sekolah", school.type);

let arraySchool = ["SMK 2 Tanggerang", "Jl. Sutosomo no.5", "Negeri", "Andi"];
//                         0                   1                2         3

//array digunakan ketika seluruh elemet datanya sama type
let color = ["red", "green", "blue"];

console.log(arraySchool[3]);
