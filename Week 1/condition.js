/* 
pengecekan kondisi
== membandingkan sama nilainya
=== membandingkan nilai dan type data
> lebih besar dari 
< lebih kecil dari 
<= lebih kecil dari sama dengan 
>= lebih besar dari sama dengan 
*/

//contoh kasus lampu lalu lintas
const lampColor = "kuning";

//if itu mencek jika kondisi terpenuhi

function lampuLaluLintas(color) {
  let condition;
  if (color === "merah") {
    condition = "Kendaraan Berhenti";
  } else if (color === "kuning") {
    condition = "Kendaraan Hati-hati";
  } else {
    condition = "Kendaraan Berjalan";
  }

  document.getElementById("output").innerHTML = condition;
}

const nilai = 78;

/* 
A = 90
B = 70 - 89
C = 60 - 69
D = 40 - 59
E = < 40 
*/

//jika nilai lebih besar sama dengan dari 90 dan nilai lebih kecil sama dengan dari 100
if (nilai >= 90 && nilai <= 100) {
  console.log("Nilai anda adalah A");
} else if (nilai >= 70 && nilai <= 89) {
  console.log("Nilai anda adalah B");
} else if (nilai >= 60 && nilai <= 69) {
  console.log("Nilai anda adalah C");
} else if (nilai >= 40 && nilai <= 59) {
  console.log("Nilai anda adalah D");
} else if (nilai < 40) {
  console.log("Nilai anda adalah E");
}

/* 
gaji pokok pns = 3.000.000
gaji pokok honorer = 1.000.000
tunjangan = 
1. Golongan IV = 400.000
2. Golongan III = 300.000
3. Golongan Lain = 100.000 
*/

const biodataKaryawanSundus = {
  name: "Sundus",
  golongan: "IV",
  status: "PNS",
};

const biodataKaryawanArtha = {
  name: "Artha",
  golongan: "III",
  status: "PNS",
};

const biodataKaryawanSukma = {
  name: "Sukma",
  status: "Honorer",
};

function hitungGaji(data) {
  let total = 0;
  let gajiPokok = 0;
  let tunjangan = 0;

  if (data.status === "PNS") {
    console.log(`${data.name} berstatus PNS`);
    gajiPokok = 3000000;
    if (data.golongan === "IV") {
      tunjangan = 400000;
    } else if (data.golongan === "III") {
      tunjangan = 300000;
    } else {
      tunjangan = 100000;
    }
  } else {
    console.log(`${data.name} berstatus Honorer`);
    gajiPokok = 1000000;
  }

  total = gajiPokok + tunjangan;
  console.log("Total Gaji " + total);
}

hitungGaji(biodataKaryawanSundus);
hitungGaji(biodataKaryawanArtha);
hitungGaji(biodataKaryawanSukma);

const color = "merah";

switch (color) {
  case "merah": //if
    console.log("berhenti");
    break;

  case "kuning": //else if
    console.log("hati-hati");
    break;

  case "hijau": //else if
    console.log("berjalan");
    break;

  default:
    // else
    console.log("pilih lampumu");
    break;
}

//gunakan tenary kalau cuma ada 2 kondisi
//pakelah untuk ngereturn 1 line code saja
const status = color === "merah" ? "Berhenti" : "Berjalan";

const status2 =
  color === "merah"
    ? "Berhenti"
    : color === "kuning"
    ? "hati-hati"
    : color === "hijau"
    ? "berjalan"
    : "pilih warna";

/* 
tenary operator
condtion 
  ? true
  : false 
*/

/* 
tenary operator
condition1
  ? true
  condition 2
  ? true : 
  condition 3
  ? true :
  false 
*/

console.log(status);

function ganjilGenap(numb) {
  if (numb % 2 == 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

console.log(ganjilGenap(2));
console.log(ganjilGenap(1));

const bilangan = [1, 2, 3, 4, 5, 6];

let temp = [];
for (i = 0; i < bilangan.length; i++) {
  if (ganjilGenap(bilangan[i]) === "genap") {
    temp.push("Bilangan Genap");
  } else {
    temp.push("Bilangan Ganjil");
  }
}

console.log(temp);
