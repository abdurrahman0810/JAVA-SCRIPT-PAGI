//  1
let Andi = 78;

if (Andi >= 90) {
  console.log("Nilai A");
} else if (Andi >= 75) {
  console.log("Nilai B");
} else {
  console.log("Nilai c");
}
// 2
let pasword = "admin123";
if (pasword === "admin123") {
  console.log("Login berhasil");
} else {
  console.log("Password salah");
}
//  3
let day = 2;

switch ("day") {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak valid");
    break;
}

// 4
let admin = "hak penuh";

switch (admin) {
  case "hak penuh":
    console.log("Akses Penuh");
    break;
  case "user":
    console.log("Terbatas");
    break;
  default:
    console.log("tidak di kenali");
}

// 5
let umur = 20;
let status = umur >= 18 ? "dewasa" : "anak anak";
console.log(status);

// 6
let isLogin = true;
let login = isLogin ? "selamat datang" : "Silahkan Login";
console.log(login);

// 7
let nilai = 90;
let grade = nilai >= 90 ? "A" : nilai >= 75 ? "B" : nilai >= 60 ? "C" : "D";

console.log(grade);

// 8
let TotalBelanja = 120000;
let Diskon =
  TotalBelanja >= 100000
    ? "diskon 20%"
    : TotalBelanja >= 50000
      ? "diskon 10%"
      : "tidak ada diskon";
console.log(Diskon);

// 9

let Ganjil = 7;

if (Ganjil % 2 === 0) {
  console.log("Angkanya Genap ");
} else {
  console.log("Angkanya Ganjil");
}
