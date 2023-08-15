//criação de promessas

const myPromise = new Promise((resolve, reject) => {
  const nome = "Avner";
  if (nome === "Avner") {
    resolve("Usuário encontrado!");
  } else {
    reject("Usuário não encontrado!");
  }
});

//A promessa só poderá ser executada, ao encadear o método THEN nela :

myPromise.then((data) => {
  console.log(data);
});

// Encadeamento de then's

const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Avner";
  if (nome === "Avner") {
    resolve("Usuário encontrado!");
  } else {
    reject("Usuário não encontrado!");
  }
});

myPromise
  .then((data) => {
    return data.toLowerCase();
  })
  .then((newString) => {
    console.log(newString);
  });

// utilizando o método catch para tratar o reject

const myPromise3 = new Promise((resolve, reject) => {
  const nome = "Aver";
  if (nome === "Avner") {
    resolve("Usuário encontrado!");
  } else {
    reject("Usuário não encontrado!");
  }
});

myPromise3
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//resolver VÁRIAS promessas:

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 ok!, timeout");
  }, 2000); // utilizando o settimeout para as promessas;
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 ok!");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 ok!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

// várias promessas com o race, a primeira a ser retornada será a única
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 ok!");
  }, 2000); // utilizando o settimeout para as promessas;
});
const p5 = new Promise((resolve, reject) => {
  resolve("P5 ok!");
});
const p6 = new Promise((resolve, reject) => {
  resolve("P6 ok!");
});

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});

//Fetch request API do GitHub
// Fecth API

const userName = "henriqueAvner";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.login);
  })
  .catch((err) => {
    console.log(`Houve algum erro: ${err}`);
  });
