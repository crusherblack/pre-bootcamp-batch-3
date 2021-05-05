const CONFIG = "ini adalah config";

/* first name 

last name 

hello my name is Andi

helloMyNameIsAndi

firstName */

function print() {
  console.log("hello world");

  function oke() {
    console.log("test");
  }
}

function helloWorld() {
  console.log("hello world");
}

const profile = {
  firstName: "ucok",
  lastname: "baba",
  text: "hello world",
  desc: "world",
};

const HELLO = "dari global";

printText();
printText2();

function printText() {
  console.log(HELLO);
  const hello = "hello world 1";
  console.log(CONFIG);
}

function printText2() {
  console.log(HELLO);
  const hello = "hello world 2";
  console.log(CONFIG);
}

const data = {
  fullname: "indah",
  job: "writters",
};

const myFunction = {
  getInfo: function () {
    return this.fullname + this.job;
  },
};

console.log(myFunction.getInfo.call(data));

for (i = 0; i < 10; i++) {
  console.log("perulangan ke:" + (i + 1));

  for (j = 0; j < 2; j++) {
    console.log("perulangan nested ke:" + (j + 1));
  }
}

/* const patternCount = 5;

for (i = 1; i <= patternCount; i++) {
  for (j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br>");
} */

document.write("nurlela");
