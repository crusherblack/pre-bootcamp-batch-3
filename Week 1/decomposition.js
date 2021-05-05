//array destructuring
let title = "Belajar pre class";

let a, b, rest;
[a, b, ...rest] = [
  "ini adalah a",
  "ini adalah b",
  "ini adalah c",
  "ini adalah d",
  "ini adalah e",
  "ini adalah f",
];

console.log(a);
console.log(b);
console.log(rest);

//melakukan skip sesuai index element
let nama1, nama2, nama3;
[nama1, , nama2, nama3] = ["sundus", "rama", "artha", "anggie", "rizki"];

console.log(nama1, nama2, nama3);

function helloWorld(text) {
  return text;
}

console.log(helloWorld("hello dunia"));

function zodiak(number) {
  let name, description;

  if (number === 1) {
    (name = "Cancer"), (description = "Ini adalah kepiting");
  } else {
    name = "Capricorn";
    description = "Ini adalah Kambing";
  }

  return [name, description];
}

const [zoadiakName, desc] = zodiak(2);

//swap value
let value1 = "satu";
let value2 = "dua";

console.log("awal", value1 + value2);

[value1, value2] = [value2, value1];

console.log("balikan", value1 + value2);

//object destructuring

const profile = {
  firstName: "andi",
  job: "jungler",
  address: "bandung",
  companies: {
    name: "PT. Karya Bersama",
  },
};

const {
  firstName: fullName,
  companies: { name },
  ...sisa
} = profile;

console.log(fullName);
console.log(sisa.job);
console.log(name);

let judulFilm = "godzilla vs ";

judulFilm += "kong";

console.log(judulFilm);

let test = 1;

console.log(--test);

const lampuHidup = true;

console.log(lampuHidup);
