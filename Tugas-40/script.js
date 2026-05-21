// 1
function great() {
  console.log("hello world");
}

great();

// 2

function showMassage() {
  let massage = "ini adalah pesan lokal";
  console.log(massage);
}
showMassage();

// 3

let username = "Guest";

console.log(username);

function updateUsername() {
  username = "Admin";
}

updateUsername();

console.log(username);

// nomor 4 bonus
//  5

function greet(name = "user") {
  console.log(`hello, ${name}!`);
}

greet();
greet("Alya");

// 6

function User(userName = "Guest") {
  console.log(`Welcome ${userName}!`);
}

User();

User("Rafi");
// 7

function Pertambahan(a, b) {
  return a + b;
}
console.log(Pertambahan(10, 7));
