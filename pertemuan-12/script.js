// !! if statment

let ips = 8;
let MinimalRemed = 8;
console.log(ips < MinimalRemed);

if (ips <= MinimalRemed) {
  console.log("kondisi di jalankan");
}

if(ips == MinimalRemed){
    console.log('log 2');
    
}
if(true){
    console.log('tampilan');
    
}else{
    console.log('tampilan 2');
    
}

let spatubudi = 90;
let andi = 90
//  NIalai yang false  :0, "" (string kosong), null, undefined, NaN, false.

// !! KOnversi BOOLean 
if ("") {
    console.log('jawaban 1');
    
}
else{
    console.log('jawaban 2');
    
}


//  switc statment 

const binatang = 'jerapah'
switch(binatang) {
    case 'hiu' :
        console.log('ini adalah hiu');
        break;
        case 'kuda' :
            console.log('ini adalah kuda');
            break;

            default:
                console.log('ini adalah binatang');
                
            
}


let hewan = 'kucing'
switch (hewan) {
    case 'hiu' :
        console.log('ini hiu');
        break;
        case 'kucing' :
            console.log('ini kucing');
            break;
            default:
                console.log('ini manusia');
                
            
        
}
//  ! ternary Operator / Operator kondisional

let umur = 20
let status = umur > 18 ? 'Dewasa' : 'anak anak';
console.log(status);

// Versi lebih ribet atpi sama seprti nilai di atas
if (umur > 20 ){
    console.log('Bocil');
    
}else {
    console.log('ABG');
    
}


//  LAtihan 

let Binggris = 87;
let Bindonesia = 90;
let NilaiIps = 70;
let Sejarah = 82;


let MinimInggris = 90;
let MinimBindo = 91;
let Minimips = 69;
let MinimSejarah = 82;


// if (Binggris > MinimInggris){
//     console.log('lulus tanpa remedial');
    
// } else if(Binggris <= MinimInggris) {
//     console.log('lulus dengan remedial');
    
// } else {
//     console.log('dak lulus harus ujian sekarang');
    
// }

// let kelulusan = Bindonesia >= MinimBindo ? 'kancil' : 'kodok'
// console.log(kelulusan);


// ! pentingip
let lulus = Bindonesia >= MinimBindo ? "kodok" :
 Sejarah >= Minimips ? 'kucing' :
 NilaiIps <= Minimips ? 'kerang' : 'buaya'
 console.log(lulus);


//  Penggunaan ?

let isLogin = false
let HasilBox = isLogin ? 'lanjut' : 'berhenti'
 console.log(HasilBox);
 
    





