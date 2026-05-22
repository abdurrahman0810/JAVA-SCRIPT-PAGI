// !!!! ARROW FUNCTION

const namaFungsi = () => {
  console.log("ini arrow function jika parameternya cuma satu");
};

namaFungsi();

// ! refactor

const namaFungsii = () => console.log("ini adalah tentang refactor");
namaFungsii();

const tambah = (a, b) => {
  return a + b;
};
console.log(tambah(7, 9));

// ?? refactor

const pengurangan = (b , c) => b - c ;
console.log(pengurangan(7,6));




// !!!!! perbedaan dengan fungsi biasa  


function fungsiBiasa() {
    console.log(this);
    
}

const arrowFunction = () => {
    console.log(this);
    
}




// contoh


// Function yang biasa
const mobil = {
    merk: 'toyota',
    tampilkan: function () {
        console.log(this.merk);
        
    }
}


mobil.tampilkan()


// ?? arrow function
  const motor = {
    merk: 'Suzuki' ,
    tampilkan: () => {
        console.log(motor.merk);
        
    }
  }

  motor.tampilkan()
// ! ! fungsi arrow multi baris

const Perkalian =   (x , c ) => {
 let hasil = x * c;
 return hasil
}

console.log(Perkalian(3 , 9));



// !! fungsi arrow tanpa parameter

const nama = () =>  console.log('Sugab');
nama()


// !! fungsi Arrow dengan satu Parameter
 const userName = (suatu) => {
    console.log(suatu);
    
 };

 console.log('HAIIIII');
 


