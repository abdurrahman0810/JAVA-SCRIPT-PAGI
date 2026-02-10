// Latihan

// let layanganfuad = 5;
// let one = 'red';
// let two = 'blue';
// let tree = 'green'
// let four = 'yellow'
// let five = 'purple'

// let masukGot = tree

// let dicuri = five
// let yangrusak = 2
// let updateLayangan = layanganfuad - yangrusak;

// console.log(layanganfuad)
// console.log('dan yang masuk got' masukGot+ 'dan yang dicuri' + dicuri);
// console.log('dan setelah rusak' updateLayangan);

// let eskrimraffa = 3;
// let eskrimone = 'matcha'
// let eskrimtwo = 'coklat';
// let eskrimtree = 'vanilla';
// let eskrimanhar = 'coklat';
// let yangdikasihkeanhar = 1
// let updateeskrim = eskrimraffa - yangdikasihkeanhar;

// console.log('awal eskrim raffa' eskrimraffa);
// console.log('eskrim ke dua' eskrimtwo);
// console.log('eskrim yang ke tiga' eskrimtree);
// console.log('eskrim yang di kasih raffa ke anhar' eskrimanhar);
// console.log('update eskrim raffa setelah di kasih ke anhar' updateeskrim );

// ** Soal One

let permenAna = 30;
let yangDikasihkebudi = 10;
let permenBaru = 20 **  2;
let updatePermen = permenBaru - yangDikasihkebudi;

// let jumlahpermenanasekarang = 80
// let permenkuadrat = 4 ** 2;

console.log(permenAna - yangDikasihkebudi + permenBaru);
console.log(updatePermen + permenBaru );

// ** Soal two

let kucingOne = "ali";
let kucingTwo = "hasan";
let KucingAna = kucingOne + kucingTwo;

console.log(kucingOne + kucingTwo);
console.log(KucingAna);

// ** Soal Three

let belalang = "12";
let nyamuk = "11";
let angsa = 10;

let hasilBellangNyamuk = +belalang + nyamuk;
let hasilNyamukAngsa = +nyamuk + angsa;

console.log(hasilBellangNyamuk);
console.log(hasilNyamukAngsa);

//  Penjelasan Yang Pertama Karena belalang awalnya bernilai string kemudian bertemu dengan string juga maka yang terjadi adalah penambahan dari variable tersebut bukan menjadi penjumlahan
// Penjelasan Yang kedua angsa benilai numerik karena tidak di beri tanda petik seperti variable nyamuk dan belalang maka yang terjadi adalah penjumlahan bukan pertambahan dari variable

// ** soal Four

let Bukufiksiaisha = 25.0;
let BukuNonFiksi = 21.0;
let PenaAisha = 4.0;

let TotalBelanjaAisha = BukuNonFiksi + Bukufiksiaisha + PenaAisha;

console.log(TotalBelanjaAisha);

// ** Soal Five

let Penjumlahanone = 5 + 3 * 2;
let PenjumlahanTwo = (5 + 3) * 2;

console.log(Penjumlahanone);
console.log(PenjumlahanTwo);

// !! Penjelasan Pertama karena terdapat perkalian pada penjumlahan yang pertama maka yang di kerjakan terlebih dahulu adalah perkalian Baru penjumlahan jadi caranay 3*2 kemudian abru di tambah dengan 5
// !! Penjelasan Kedua karena terdapat taanda kurung maka yang di selseaikan terlebih dahulu adalah penjumlahan di dalam kurung kemudian baru di kalikan dengan 2 jadi penyelesainnya  5+3 kemudian baru di kali dengan 2

// ** Soal Six

let kresek = 4;
let kotak = 6;
let ember = 5 + (kresek = kotak);

console.log(kresek);
console.log(kotak);
console.log(ember);

// !! Penjelasan tentanng nilai ember karena di ember awalnya bernilai 5 kemudian ada nilai di dalam kresek yaitu kresek=kotak berarti nilai kresek pada variable ember sama saja dengan nilai variable kotak. kemudian   nilai 5 di tambah nilai yang di dalam kurung menghasilkan nilai 11 karena nilai kresek bernilai 6 dan di tambahkan dengan dengan nilai 5

// **Soal Seven

let x, y, z;
z = 5 + 10 + 15;
y = z;
x = y;

console.log(z);
console.log(x);
console.log(y);

//  Soal Eight

let Money = 4;
Money *= 2;
Money *= 2;

console.log(Money);

// **  Soal Nine

let J = 5;
J++;

let K = 8;
K--;

console.log(J);

// !!Penjelasan kenapa variable J  hasilnya 6 karena + yang pertama menandakan tambah kemudian + yang kedua adalah 1 maka sama saja seperti 5+1 = 6
console.log(K);

// !! Penjelasan kenapa Variable K hasilnya 7 karena - yang pertama menandakan pengurangan dan - yang kedua Menandakan 1 maka sama saja syntaxnya seperti ini 8-1

// ** Soal Ten

let Room = "Hafs";
let age = 18;
let shoesNumber = "42";
let Married = false;

console.log(typeof +Room);
console.log(typeof +age);
console.log(typeof +shoesNumber);
console.log(typeof +Married);
