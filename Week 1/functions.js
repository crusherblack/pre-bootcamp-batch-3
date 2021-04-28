//regular function
function helloWorld() {
  console.log("hello world");
}

function sum(params1, params2) {
  console.log(params1 + params2);
}

function luasLingkaran(jariJari) {
  console.log(typeof jariJari);
  const pi = 22 / 7;
  const r = jariJari;

  console.log(typeof r);
  const luas = pi * r * r;

  console.log(typeof luas);

  return "Luas Lingkaran adalah:" + " " + luas;
}

console.log(luasLingkaran(5));

helloWorld();
sum(10, 10);

sum(5, 7);

//arrow function
const luasLingkaran2 = (jariJari) => {
  const pi = 22 / 7;
  const r = jariJari;
  const luas = pi * r * r;

  return "Luas Lingkaran adalah:" + " " + luas;
};

console.log(luasLingkaran2(7));

//anonymous function
const helloDunia = function () {
  return "hello dunia";
};

console.log(helloDunia());

//nested function
function volumeBalok(panjang, lebar, tinggi) {
  function luas() {
    const totalLuas = panjang * lebar;
    console.log("luas", totalLuas);
    return totalLuas;
  }

  const volume = luas() * tinggi;
  console.log("volume", volume);
  return volume;
}

console.log(volumeBalok(3, 4, 10));

function sayMyName() {
  const myName = prompt("Inputkan Nama anda");

  console.log(myName);
}

function luasKubus() {
  const sisi = prompt("Inputkan sisi kubus");
  const volume = sisi * sisi * sisi;

  console.log(volume);
}

luasKubus();
