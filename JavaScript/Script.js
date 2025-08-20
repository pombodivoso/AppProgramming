let Variavel = 5 //Escopo local -> escopo de função
var Variavel2 = 5 //Escopo global
const Variavel3 = 5 //Escopo 

const nome = "Joy";

console.log(nome);

let meninas = ["thay", "joy", "kess", "feh"]

console.log(meninas[0]);

const obj = {
    nome: "joy",
    idade: 17,
    job: "bosch"
}

console.log(obj)

function somar(a, b){
    return a + b
}

const soma = function (a, b){ //função anonima 
    return a + b
}

const arrow = (a, b) => a + b

let title = document.getElementById("el1").innerHTML
console.log(title)


const ReceiveColor = () => {
    let inputColor = document.getElementById("el2").value
    console.log(inputColor)
}

