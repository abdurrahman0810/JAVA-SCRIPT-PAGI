// rodna bagaima jka  kam  dn asu aba me 8a Perulangan while
let number = 1;

while (number < 5) {
  console.log(number);
  number++;
}
while (number <= 7) {
  console.log(number);
  number++;
}

let age = 2;

while (age <= 10) {
  console.log(age);
  age += 3;
}
// Perulangan DO WHile

let numberdo = 1;

do {
  console.log(numberdo);
  numberdo++;
} while (numberdo <= 5);

let numberdo2 = 7

do {

    console.log(numberdo2);
    numberdo2;

}while(numberdo2 <= 5)




    //  perulangan 'for'


    for(let k = 2; k <= 10; k++  ){
        console.log(k);
        
    }


    for(let w = 1; w <= 10; w += 2) {
        console.log(w);
        
    }

    for (let b = 12; b <=10; b+=2 ) {
        console.log(b);
        
    }



    // continue
   for( let x = 1; x <= 5; x++) {
    if(x === 4) continue;
    console.log(x);
    
   }
    for (let  m = 9 ; m >= 5; m--) {

        if (m === 7) continue
        console.log(m);
        
    }

// break
// kalo kayak gini ngecek dulu
  for(let xx = 4 ; xx <= 8; xx++){
    if(xx === 6) break;
    console.log(xx);
    
  }
  
  
  // kalo kayak gini di console lgo dulu baru negcek
  
  for(let xx = 4 ; xx <= 8; xx++){
    console.log(xx);
    if(xx === 6) break;
    
  }



  // penggabungan continue dan break

  for(let mn = 1; mn<= 7; mn++ ) {
    if(mn === 6) break;
    if(mn === 5) continue;
    console.log(mn);
    
  }


  for(let vd = 3; vd <= 10 ; vd ++){
    console.log(vd);
    if(vd === 10)break;


    console.log(vd);
    if(vd === 7) continue;
    
  }


  