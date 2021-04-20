//------------- Aula 05 -----------------------

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!")
}

function redirecionar(){
    window.open("https://diegorosas19.github.io/Recriando-a-pagina-inicial-do-instagram/");
// window.location.href = "https://diegorosas19.github.io/Recriando-a-pagina-inicial-do-instagram/";
}

function trocar(elemento){
   // document.getElementById("mouseMove").innerHTML = "<b>Obrigado por passar o mouse!</b>";
    //alert("Trocar texto");
    elemento.innerHTML = "<b>Obrigado por passar o mouse!</b>";
}

function voltar(elemento){
   // document.getElementById("mouseMove").innerHTML = "<b>Passe o mouse aqui</b>";
   elemento.innerHTML = "<b>Passe o mouse aqui</b>";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value);    
}


//------------- Aula 04 -----------------------
/*
var validar = 0; //variavel global
function validaIdade(idade){
   // var validar; //variavel local da função
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar); //usar o return diretamente assim só funciona com uma variavel global
*/
/*
var frase = "vai Japão"
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
console.log(frase);
console.log(setReplace(frase, "Japão", "Brasil"));
*/
/*
function soma(n1,n2){
    return n1 + n2;
} 
alert(soma(5,10));
*/

//---------- Aula 03 --------------------------
//---------- Date ----------------------
/*
var d = new Date();
console.log(d);
//console.log(d.getMonth()+1);
//console.log(d.getDate());
//console.log(d.getHours());
//console.log(d.getMinutes());
*/
//---------- Laços de Repetição ----------------------
/*
var count;
for(count = 0; count <= 5; count++){
    console.log(count);
}
*/
/*
var count = 0;
while (count <= 5){
    console.log(count);
 // alert(count);
 //count = count + 1; ou
    count++;
}
*/

//---------- Condicionais ----------------------
/*
var idade = prompt("Qual a sua idade?");
//var idade = 18
if(idade >= 18){
    alert("Maior de idade");
} else {
    alert("Menor de idade");
}16
*/

//---------- Aula 02 ----------------------
//-------- Discionario --------------------
/*var frutas = [{nome:"maça", cor:"veremelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
console.log(frutas[1].nome);
//console.log(fruta.cor);

var fruta = {nome:"maça", cor:"veremelha"}
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

//----------Arrays------------------------
//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva"); // add uva a lista
//lista.pop();
//alert(lista[1]);
//console.log(lista);
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.toString()[1]);
//console.log(lista.join(" - "));


//--------------Aula 01 --------------------
//var nome = "Diego Rosas";
//var idade = 28;
//var idade2 = 20;
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo!"
//alert("Meu primeiro js");
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos!");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão","Brasil"));
//alert(frase.replace("Japão","Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//console.log(n1 * n2);