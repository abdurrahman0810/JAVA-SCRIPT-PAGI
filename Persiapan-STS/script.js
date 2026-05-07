let one = document.getElementById("kotak-one");
let two = document.getElementById("kotak-two");
let Three = document.getElementById("kotak-three");
let teks = document.getElementById("lorem");
let button = document.getElementById("tombol");

one.addEventListener("click", () => {
  one.classList.toggle("sukses_one");
});
two.addEventListener("click", () => {
  two.classList.toggle("sukses_two");
});
Three.addEventListener("click", () => {
  Three.classList.toggle("sukses_tree");
});

button.addEventListener("click", () => {
  document.body.classList.toggle("full");
  teks.classList.add("teks");
});
