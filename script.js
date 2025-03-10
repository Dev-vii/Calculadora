// BOTÕES
function insert(num){
    let numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
}

// APAGAR TUDO
function clean(){
    document.getElementById('res').innerHTML = ""
}

// CALCULAR
function calcular(){
    let res = document.getElementById('res').innerHTML
    if(res) {
        document.getElementById('res').innerHTML = eval(res);
    }
}