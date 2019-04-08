//let nazwa = document.getElementById("na");
//console.log(nazwa);
/*document.querySelector('name').onclick = function() {
    nazwa.textContent = '';
}

let te = document.getElementById("tekst");
document.querySelector('#usun').onclick = function(usun) {
    tex.textContent = '';*/
document.querySelector('button').onclick = function poi() {
    let keyBox = document.getElementById('na');
    let keyBox1 = document.getElementById('na1');
    let keyBox2 = document.getElementById('na2');
    //console.log(keyBox.value);
    let val = keyBox.value;
    let val1 = keyBox1.value;
    let val2 = keyBox2.value;
    /*let container = document.getElementById('container');
    let pElement = document.createElement('p');
    pElement.textContent = val;
    container.appendChild(pElement);*/
    document.getElementById("name").innerHTML = val;
    document.getElementById("surname").innerHTML = val1;
    document.getElementById("phone").innerHTML = val2;

}