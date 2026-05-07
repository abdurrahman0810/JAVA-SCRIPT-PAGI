function clickbutton() {
  alert("function di klick");
  document.getElementById("box").style.backgroundColor = "red";
}

function btnalert() {
  alert("clicked");
  document.getElementById("Nohp").style.backgroundColor = "green";
}

// let age = document.getElementById("age");
function getdata() {
  console.log(age.value);
}


// !! Tentang trim

// cara pertama dengan pertambahan variable kemudian di console log
let shoes = ' astec '
let hasil = shoes.trim()
console.log(hasil);

// cara kedua 
let shoesTwo = ' reebook '
console.log(shoesTwo.trim());



// !! tentang Parse Float


let price = '20.5'
let noShoes = '43'

console.log(Number(noShoes));
console.log(parseFloat(price));



