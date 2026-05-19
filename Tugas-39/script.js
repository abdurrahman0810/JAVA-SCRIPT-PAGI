// 1
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}
// 2
let k = 10;
do {
  console.log(k);
  k--;
} while (k >= 1);
// 3
for(let b = 2; b<=20; b+=2){
    console.log(b);
    
}
// 4
for(let v = 1; v<= 10; v++ ){
    if(v === 5) continue;
    console.log(v);
    
}
// 5
for(let q = 1; q<=10; q++){
    if(q === 6) break;
    console.log(q);
    
}