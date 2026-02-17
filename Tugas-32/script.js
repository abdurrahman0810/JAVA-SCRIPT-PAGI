// !! Soal Satu Bagian 1
let welcomeBox = document.getElementById("welcomeBox"); // Variabel jadi huruf kecil
welcomeBox.textContent = "Belajar DOM itu menyenangkan";
console.log(welcomeBox.textContent);

// !! Soal Satu Bagian 2
let namaSantri = document.getElementById("studentName");
namaSantri.textContent = "Abdurrahman";
console.log(namaSantri.textContent);

// !! Soal Dua Bagian 1
let paragraf = document.createElement("p"); // Variabel jadi huruf kecil

// !! Soal Dua Bagian 2
paragraf.innerText = "Saya Sedang Belajar Create element";

// !! Soal Dua Bagian 3
document.getElementById("noteArea").appendChild(paragraf);

// !! Soal empat Bagian 1
let nomor = document.getElementById("contactNumber"); // Variabel jadi huruf kecil
console.log(nomor);

nomor.value = 123456789;



    