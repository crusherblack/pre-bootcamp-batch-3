const articels = [
  {
    id: 1,
    name: "Belajar Vue.js",
    status: true,
    price: 5000,
  },
  {
    id: 2,
    name: "Belajar Laravel",
    status: true,
    price: 6000,
  },
  {
    id: 3,
    name: "Belajar React.js",
    status: false,
    price: 7000,
  },
  {
    id: 4,
    name: "Belajar Next.js",
    status: false,
    price: 25000,
  },
  {
    id: 5,
    name: "Belajar Angular.js",
    status: false,
    price: 15000,
  },
  {
    id: 6,
    name: "Belajar Git",
    status: true,
    price: 25000,
  },
  {
    id: 7,
    name: "Belajar Golang",
    status: true,
    price: 45000,
  },
];

document.getElementById("search-input").addEventListener("input", (e) => {
  const searchText = e.target.value;

  const filteredArticles = articels
    .filter((article, index) => {
      return article.name.toLowerCase().includes(searchText.toLowerCase());
    })
    .map((article, index) => {
      return `<li>${article.name} || ${index}</li>`;
    });

  document.getElementById("list").innerHTML = filteredArticles.join("");
});

const articlesList = articels.map(
  (article, index) => `<li>${article.name} || ${index}</li>`
);

document.getElementById("list").innerHTML = articlesList.join("");

// method map, filter, reduce hanya bisa digunakan pada type data array
// map => melakukan perulangan sesuai panjang dari array dan mereturn array baru
// filter => mereturn array baru tetapi yang sesuai dengan kondisi yang diterapakan

/* Array.map((item, index) => {
    return item
}) */

/* Array.filter((item, index) => {
    return condition
}) */

/* const filteredArticles = articels.filter((article, index) => {
  return article.name.includes("js");
});

console.log("filteredArticles", filteredArticles);

const articlesList = articels.map((article, index) => {
  return `<li>${article.name} || ${index}</li>`;
});

document.getElementById("list").innerHTML = articlesList.join("");

const copyArticles = articels.map((articel, index) => {
  return {
    identifikasi: articel.id,
    namaLengkap: articel.name,
    nameId: articel.id + articel.name,
  };
});

console.log("articels", articels);

console.log("copyArticles", copyArticles); */

const newArticleFor = [];
for (let i = 0; i < articels.length; i++) {
  newArticleFor.push({
    newName: articels[i].name,
    newId: articels[i].id,
  });
}

console.log(newArticleFor);

const newArticleMap = articels.map((article, index) => {
  let adaHurufAPadaName;

  if (article.name.toLowerCase().includes("o")) {
    adaHurufAPadaName = "Ada";
  } else {
    adaHurufAPadaName = "Tidak Ada";
  }

  return {
    newName: article.name,
    newId: article.id,
    adaHurufAPadaName,
  };
});

console.log(newArticleMap);

const a = 5000;
const b = 6000;

console.log(a + b);

const prices = [5000, 3000, 7000, 8000, 1000];

let total = 0;
for (let i = 0; i < prices.length; i++) {
  total = prices[i] + total;
}

console.log("harga", total);

const cars = [
  {
    name: "bmw",
    price: 1000,
  },
  {
    name: "ferrary",
    price: 2000,
  },
  {
    name: "ferrary",
    price: 6000,
  },
];

let hargaMobil = 0;
for (let i = 0; i < cars.length; i++) {
  hargaMobil = cars[i].price + hargaMobil;
}

console.log("hargaMobil", hargaMobil);

const hargaArticels = articels.reduce(
  (accumulator, currentData) => accumulator + currentData.price,
  0
);

console.log("hargaArticels", hargaArticels);

const sayHello = (helloAll) => {
  alert("hello World");

  helloAll();
};

/* sayHello(() => {
  alert("hello All");
}); */
/* 
setTimeout(() => {
  console.log("ini adalah 1");
  setTimeout(() => {
    console.log("ini adalah 2");
    setTimeout(() => {
      console.log("ini adalah 2");
    }, 500);
  }, 500);
}, 1000); */

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((posts) => posts.json())
  .then((items) => {
    items.map((item, index) => {
      document.write(item.title);
    });
  })
  .catch((error) => console.error(error));

const status = true;

const getPostsFromServer = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    posts.map((item, index) => {
      document.write(item.title);
    });
  } catch (error) {
    console.log(error);
  }
};

getPostsFromServer();

//calback adalah funtion
//promise adalah object
const helloName = (name) => {
  const proses1 = new Promise((resolve, reject) => {
    if (true) {
      resolve("berhasl " + name);
    } else {
      reject("gagal");
    }
  });

  return proses1;
};

helloName("nurlela")
  .then((data) => {
    console.log(data);
    return helloName("Andi");
  })
  .then((data) => console.log(data));

//Promise all
//Promise all berfungsi untuk menjalakan promise secara paralel tapi dia menunggu seluruh proses selesai baru memberika output yang diinginkan

/* const doFetch = (url) => fetch(url).then((result) => result.json());
let urls = [
  "https://jsonplaceholder.typicode.com/posts/10",
  "https://jsonplaceholder.typicode.com/posts/8",
  "https://jsonplaceholder.typicode.com/posts/9",
  "https://jsonplaceholder.typicode.com/posts/7",
];

let promises = [];
urls.map((url) => {
  promises.push(doFetch(url));
});
Promise.all(promises).then((results) => console.log(results)); */

const getAllPosts = async () => {
  const fetchData = async (url) => {
    const response = await fetch(url);
    return await response.json();
  };

  const getPosts = [
    fetchData("https://jsonplaceholder.typicode.com/posts/10"),
    fetchData("https://jsonplaceholder.typicode.com/posts/8"),
    fetchData("https://jsonplaceholder.typicode.com/posts/9"),
    fetchData("https://jsonplaceholder.typicode.com/posts/7"),
  ];

  const result = await Promise.all(getPosts);

  console.log(result);
};

getAllPosts();

//Promise Race

/* let participant1 = new Promise((resolve) =>
  setTimeout(resolve, 50, "Participant 1")
);
let participant2 = new Promise((resolve) =>
  setTimeout(resolve, 20, "Participant 2")
);
let participant3 = new Promise((resolve) =>
  setTimeout(resolve, 40, "Participant 3")
);
let participant4 = new Promise((resolve) =>
  setTimeout(resolve, 10, "Participant 4")
);

Promise.race([participant1, participant2, participant3, participant4])
  .then((val) => console.log("Finis", val))
  .catch((err) => console.log("the race was stopped because of : ", eer));
 */
