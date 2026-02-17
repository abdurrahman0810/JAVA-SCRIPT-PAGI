let kresek = document.getElementById("myDiv");

// console.dir(kresek);
console.log(kresek);

let Ban = document.getElementById("MySpan");
console.log(Ban.textContent);

// !!! Cara update value
// ** Yang pertama dengna variable
// Ban.textContent = 'hafidz'
Ban.textContent = "Ban";

console.log(Ban.textContent);

// !! Cara update value html yang nilainya kosong
let isiText = document.getElementById("text");
isiText.textContent = 10;

// !! Create Element /Buat element

// ** cara buat elemen P di dalam paragraf

let nas = document.createElement("p");

document.getElementById("nas").appendChild(nas);
nas.textContent = "Ini Sapi";
// !! menyisipkan element paragraf di dalam div

isiText.textContent = 'ayam Goreng'
document.getElementById ('nas').appendChild
(nas)


//  ** Value

let number = document.getElementById('phone')
console.log(number.value);



// !! mengambil avlue input dari input user 
let gender = document.getElementById('gender');
console.log(gender.value);

