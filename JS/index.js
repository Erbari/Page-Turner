const shkolla = "Kuvendi i Arbërit";
let emri = "Erbar";
let mosha = 16;
let qyteti = "Ferizaj";

console.log("Emri:", emri);
console.log("Mosha:", mosha);
console.log("Shkolla:", shkolla);
console.log("Qyteti:", qyteti);


function mbitekst() {
  document.getElementById('mousi').innerHTML = "Këtu do t’i gjeni disa komente të klientëve tanë:";
}
function ktheTekstin() {
  document.getElementById('mousi').innerHTML = "Disa nga Klientët tanë";
}


function pershendetjePërdorues() {
  let emer = prompt("Shkruaj emrin tënd:");
  if (emer) {
    alert("Përshëndetje " + emer + ", mirë se erdhe në PageTurner!");
  }
}


function kontrolloMoshën() {
  let mosha = prompt("Sa vjeç je?");
  if (mosha >= 18) {
    alert("Mund të blejsh libra të të rriturve.");
  } else {
    alert("Kemi shumë libra për moshën tënde!");
  }
}


function ofertaRastit() {
  let ulja = Math.floor(Math.random() * 5) + 1;
  alert("Urime! Ke fituar " + ulja + "€ zbritje në librin tënd!");
}


