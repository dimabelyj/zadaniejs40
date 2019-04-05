//let nazwa = document.getElementById("na");
//console.log(nazwa);
/*document.querySelector('name').onclick = function() {
    nazwa.textContent = '';
}

let te = document.getElementById("tekst");
document.querySelector('#usun').onclick = function(usun) {
    tex.textContent = '';*/
document.querySelector('button').onclick = function poi() {
    let keyBox = dokument.getElementById('#na');
    let val = keyBox.value;
    let container = document.getElementById('#container');
    let pElement = document.createElement('p');
    pElement.textContent = val;
    container.appendChild(pElement);
}