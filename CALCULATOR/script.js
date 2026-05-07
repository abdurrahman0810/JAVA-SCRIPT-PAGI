function one() {
  let numb = document.getElementById("resultNew").textContent;
  console.log(numb);

  let total = numb + 1;

  document.getElementById("resultNew").textContent = total;
}

function two() {
  let result = document.getElementById("resultNew").textContent;
  console.log(result);

  let total = result + 2;

  document.getElementById("resultNew").textContent = total;
}
function zid() {
  let zid = document.getElementById("resultNew").textContent;
  console.log(zid);

  let pertambahan = result + "+";
  console.log(pertambahan);

  document.getElementById("resultNew").textContent = pertambahan;
}
function substraction() {
  let result = document.getElementById("resultNew").textContent;
  console.log(result);

  let pengurangan = result + " - ";
  console.log(pengurangan);

  document.getElementById("resultNew").textContent = penambahan;
}

function Equals() {
  let num1 = document.getElementById("resultNew").textContent;
  console.log(num1);

  let operatorMatch = num1.trim().match(/[-+*/]/);
  let operator = operatorMatch[0];
  console.log(operatorMatch);

  let parts = num1.split(operator);
  console.log(parts);

  let n1 = Number(parts[0]);
  let n2 = Number(parts[1]);
  console.log(n1, n2);

  let hasil = 0;

  console.log(hasil);
  // ! menggunakan if

  if (operator == "-") {
    hasil = n1 - n2;
  } else if (operator == "+") {
    hasil = n1 + n2;
  }
}
