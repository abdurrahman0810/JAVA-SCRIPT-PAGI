function Pertamabahan(a ,b) {
    return a + b;
}
function Perkalian(c , d) {
    return c * d;
}



function Calculate(num1 , num2 , operation){
    let result =operation(num1 , num2)
    console.log("HASIL DARI PERHITUNGAN :" , result);
    
}


Calculate(5 ,3 , Pertamabahan);
Calculate(4, 2, Perkalian);