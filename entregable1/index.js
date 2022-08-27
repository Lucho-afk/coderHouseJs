let a = 1;
let array = ["me", "repito", a];
const p = document.querySelector("#parrafo");
for (let index = 0; index < 6; index++) {
  array.forEach((i) => (p.innerHTML += " " + i));
  p.innerHTML += "<br>";
  array[2] = ++a;
}
