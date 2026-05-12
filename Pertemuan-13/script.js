// AND — jika salah satu false, hasilnya false
let apple = true;
let orange = false;

console.log(apple && apple);
console.log(orange && apple);

let age = 18;
let hassertificate = true;
let nilailulus = 91;
let hasilujian = 90;

console.log(age > 18 && hassertificate); // false

if (age <= 18 && nilailulus >= 90 && hassertificate) {
  console.log("Bisa Daftar UIM");
} else {
  console.log("Tidak bisa UIM");
}

// OR — jika salah satu true, hasilnya true
let abdurrahman = 86;
let abdul = 93;
let fadil = 85;
let nilaikelulusansantri = 90;

if (
  abdurrahman >= 90 ||
  abdul >= 90 ||
  fadil >= 90 ||
  nilaikelulusansantri >= 90
) {
  console.log("lulus");
} else {
  console.log("Belum lulus");
}

// NOT — membalik nilai boolean
let menikah = false; //  diganti dari '0' ke false

if (!menikah) {
  console.log("nggak masuk");
} else {
  console.log("masuk");
}
