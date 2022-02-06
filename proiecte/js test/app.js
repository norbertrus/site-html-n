// variabile
var variabilaMea;

// definiri noi de variabile
let variabilaMea2 = 1;
const variabilaConstanta = 1;

// definirea unor variabile goale
let unu, doi, trei;

// nedefinit si null
let nedefinit = undefined
let nul = null

 let number = 123; //numar
let text = 'text'; // text
let boolean = true // boolean

// array
let lists = [1, 2, 'trei'];
 
// Accesarea elementelor dintr-o lista
console.log(lists)
console.log(lists.length)
console.log(lists[0]); //Acceseaza primul element din lista

//obiecte
let obect = {
    nume: 'Ion',
    varsta: 49
}


// lipire text
let textDoi = 'inca un text';

let textlipit = text + textDoi;
console.log(textlipit);


// operatii matematice
let adunare = 2 + 2
let scadere = 2 - 2
let inmultire = 2 * 2
let impartire = 2 / 2


// increment
adunare++;
// decrement
adunare--;


// coditionale
if (1 < 2) {
    // daca e adevarat
} else{
    //daca nu e adevarat
}

//operatori logici
// si (&&)
if (1 < 3 && 3 > 5) {

}

// sau (||)
if (1 < 3 || 3> 5) {

}

//not
if (1 != 3) {
   
}

//functii
function AdunaDoi(a, b) {
    console.log(a + b);
}

AdunaDoi(2, 6);

// Secunde in ora
function secundeInOra(ora) {
    const mininOra = 60;
    const secInMin = 60;
    const totalMin = ora * mininOra;
    return totalMin * secInMin;
}

console.log(secundeInOra(24))

// selectoare DOM (Document object Model)
const fereastraBrowser = window
const documentPagina = window.document;

console.log(documentPagina.body);

// Selectare element dupa ID
const SelectareID = document.getElementById('titlu')

//selectare element dupa clasa
const selectareClasa = document.getElementsByClassName('.paragraf');

//selector tip css
const paragraf = document.querySelector('p')

//varsta in secunde
function varstaInSecunde(varsta) {
    const zileInAn = 365
    const secInAn = secundeInOra(24) * zileInAn
    return varsta * secInAn;
}

//selecteaza butonul cu ID calculeaza
const buton = document.querySelector('#calculeaza')

// adaugam butonului selectat un eveniment de click
buton.addEventListener('click', function(){
    const input = document.querySelector('#varsta').value;

    let raspuns = varstaInSecunde(input);
    window.alert(raspuns);
}) 

function adaugaParagraf() {
    //   am creat un nou element tip p
    const newP = document.createElement('p');
    newP.textContent = 'Un nou paragraf';

    // selectam div-ul cu id add-paragraf
    const addP = document.querySelector('#add-paragraf')
    addP.append(newP);
}