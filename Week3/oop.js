const profile = {
  name: "Adam",
  work: "Programmer",

  sayHello() {
    return console.log(`hello: ${this.name}`);
  },
};

const profile2 = {
  name: "Uciha",
  work: "Devops",
  sayHello() {
    return console.log(`hello: ${this.name}`);
  },
};

/* Penjelasan
1. Setiap kali jika ingin menggunakan mebuat Object baru dari class kita harus init instance baru menggunakan keyword new
2. Jika kita ingin value dari properties kita itu dynamic initlah pada constructor / Constructor selalu dijalankan diawal
3. Seluruh properties dan method yang kita define itu bersifat public
4. Untuk mangakses propertis yang sudah kita define, gunakanlah keyword this
5. Private Method hanya bisa diakses pada class itu sendiri dan menggunakan simbol # dan harus di define terlebih dahulu
6. Private method digunakan untuk mereturn hal2 private dan hanya bisa diakses oleh class itu sendiri
7. Jika ingin manggil method lain pada class itu gunakanlah keyword this.namaMethod()
7. Jika ingin manggil private method pada sebuah method pada class itu gunakanlah NamaClass.#privateMethod()
8. Get method digunakan untuk ngebikin propertes baru tapi kita bisa return valuenya sesuai dengan codingan kita
 */

class Profile {
  #secretName = "private";
  #job;

  constructor(name, address, job) {
    this.name = name;
    this.address = address;
    this.#job = job;
  }

  get myAdress() {
    return this.address + this.name;
  }

  static #generatePassword() {
    const PASSWORD = "aokdaowkdoaks23823ad";
    return PASSWORD;
  }

  sayMyName(greeting) {
    const helloDoang = () => {
      return "hello";
    };

    return `Your name is: ${this.name} ${greeting} ${this.#secretName} ${
      this.#job
    } ${Profile.#generatePassword()} ${this.testing()} ${helloDoang()}`;
  }

  testing() {
    return "testing" + this.myAdress;
  }
}

const myProfile = new Profile("Tomi", "Jakarta", "Coding"); //new Object
const yourProfile = new Profile("Andre"); //new Object

console.log(myProfile);

console.log(myProfile.sayMyName("Mantap"));
console.log(yourProfile.sayMyName("Keren"));
console.log(myProfile.myAdress);

/* 
Penjelasan Inheritance
1. Gunakan keyword extends untuk mendapatkan properties dan method dari parent class
2. Gunakanlah super pada constructor agar kita bisa mendapatkan properties dan method dari parent class
3. Jika ingin kirim parameter ke parent, turunkanlah pada paremter super 
*/

class User {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getBiodata() {
    return `nama: ${this.name}, Alamat: ${this.address}`;
  }
}

class Teacher extends User {
  constructor(name, address) {
    super(name, address);
  }
  mengajar() {
    return `${this.name} sedang mengajar di ${this.address}`;
  }
}

class Student extends User {
  constructor(name, address) {
    super(name, address);
  }
  belajar() {
    return `${this.name} sedang belajar di ${this.address}`;
  }
}

const teacher = new Teacher("Buk Tuti", "Banjarnegara");
const student = new Student("Ainur", "Jakarta");

console.log(teacher.mengajar());
console.log(teacher.getBiodata());
console.log(student.belajar());
console.log(student.getBiodata());
