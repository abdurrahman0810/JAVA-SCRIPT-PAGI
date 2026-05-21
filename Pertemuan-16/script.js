//  !! function di pangil lewat console log
function buatTeh() {
  console.log("rebus air");
  console.log("masukkan mie ke dalam air ");
  console.log("Mie siap di hidangkan");
}

//  !! deklarasi function

function createUser() {
  console.log("adrian");
  console.log(21);
}

createUser();
createUser();

// ! variable local

function createAdrian() {
  let name = "admin abu dzar";
  console.log(name);
}

// console.log(name);

createAdrian();

//   !!variable global

let wrong = "amimir";

function abdullah() {
  console.log(wrong);
}
console.log(wrong);

abdullah();

//  !! parameter

function createStudent(studenName) {
  console.log(studenName);
}
createStudent("bejo");



function userLogin(email, password) {
    console.log(email);
    console.log(password);
}

// userLogin('iman@abudzar', 'pasword 123456');

//     let emailInput = document.getElementById('inputEmail');
//     let passwordInput = document.getElementById('inputPassword');
//     let btnLogin = document.getElementById('btnLogin');

//     btnLogin.addEventListener('click', () => {
//         userLogin(emailInput.value, passwordInput.value);
//     });


//  !! nilai default

function register(adress = "no address") {
    console.log(adress);
    
}

register()
register('Bogor')


function passwordAdmin(password){
  console.log(password || 'nopassword');
  
}
passwordAdmin()
passwordAdmin('Hello')


// !! mengembalikan nilai / RETURN VALUE

function calculator (a , b) {
  let hasil = a + b;
  return hasil;
}

let result = calculator(1 , 2)
console.log(result);

