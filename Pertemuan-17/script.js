function group() {
  console.log("Hello Alya !!");
}

group();
// !! expresi function di buat variable dulu baru di panggil di bawah kemudian value nya di ganti menjadi function

let fungsi = function () {
  console.log("hello alya");
};

fungsi();

// !! function call back

function ask(question, yes, no) {
  if (confirm(question)) {
    yes();
  } else {
    no();
  }
}

function showOk() {
  alert("OKAAY");
}

function ShowCancel() {
  alert("NOOOOO");
}

ask("apakah kamu setuju ?", showOk, ShowCancel);

function umur(age, muda, tuabangka) {
  if (age < 60) {
    muda();
  } else {
    tuabangka();
  }
}

function muda() {
  alert("masih muda");
}

function tuabangka() {
  alert("sudah sangat tua");
}

umur(70, muda, tuabangka);

sayHi("BAON");

function sayHi(name) {
  alert(`hi ${name}!`);
}

let SayHello = function (name) {
  alert(`hello ${name}`);
};
SayHello("comel");
