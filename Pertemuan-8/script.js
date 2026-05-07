let alamat = document.getElementById("adresss");

// !! Cara memunculkan class tapi classnya cuma 1

let Testing = document.querySelector("Support");
console.log(Testing);

// !!! Cara mengambil elemen dengan class lebih dari 1

let Contoh = document.getElementsByClassName("Card");
console.log(Contoh);
console.log(Contoh[1].textContent);

// !! Tenynag window

console.log(window.innerWidth);
console.log(window.screenY);

// !! tentang add event listener

document.getElementById("tombol").addEventListener("click", () => {
  alert("tombol pacak di pencet");
  console.log("Tombol di pencet");
});

// ** latihanb
document.getElementById("buton").onclick = () => {
  let jenisKelamin = document.getElementById("Gender").value;
  
  document.getElementById("result-box").innerHTML = jenisKelamin;
};

//     alert('tombol bisa di klik');
