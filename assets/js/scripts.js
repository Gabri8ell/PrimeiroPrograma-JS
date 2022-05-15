var currentNumber = document.getElementById('currentNumber');
var btn = document.querySelector('#counter');
var btnAdd = document.getElementById("btnAdd");
var btnSub = document.querySelector('#btnSub');

var aux = 0;

function increment(){
    aux = aux + 1
    currentNumber.innerText = aux;
}

function decrement(){
    aux -=1;
    currentNumber.innerText = aux;
}

btn.addEventListener('click', changeColor, false);
btn.addEventListener('click', desativarBtn, false)

function changeColor(){

    if(aux > 0){
        currentNumber.style.color = 'blue'
    } else{
        currentNumber.style.color = 'red'
    }
}

function desativarBtn(){

    if(aux == 10){
        btnAdd.disabled = true;
    }
    else if(aux == -10){
        btnSub.disabled = true;
    }
    else if(btnAdd.disabled == true){
        btnAdd.disabled = false;
    }
    else if(btnSub.disabled == true){
        btnSub.disabled = false;
    }
}

