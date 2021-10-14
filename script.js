let res = document.getElementById('res')

let key1 = document.getElementById('key1')
let key2 = document.getElementById('key2')
let key3 = document.getElementById('key3')
let key4 = document.getElementById('key4')
let key5 = document.getElementById('key5')
let key6 = document.getElementById('key6')
let key7 = document.getElementById('key7')
let key8 = document.getElementById('key8')
let key9 = document.getElementById('key9')


let resultado = document.getElementById('resultado')
let n1 = 0
let digito = ''
let click = 0
let operador = ''


function montardsp(x) {
    digito = x.value
    resultado.innerText = resultado + digito
}

function reset() {
    res.innerText = ''
    click = 0
    resultado.innerHTML = click
}

function adicao() {
    n1 = parseInt(res.textContent) 
    res.innerText = ''
    click = 0
    operador = ('soma')
}

function subtracao() {
    n1 = parseInt(res.textContent) 
    res.innerText = ''
    click = 0
    operador = ('sub')
}

function divisao() {
    n1 = parseInt(res.textContent) 
    res.innerText = ''
    click = 0
    operador = ('div')
}

function multiplicacao() {
    n1 = parseInt(res.textContent) 
    res.innerText = ''
    click = 0
    operador = ('mul')
}

function igual() {
    n2 = parseInt(res.textContent)
    if (operador == 'soma') {
        r = n1 + n2
        res.innerText = r
    } else if (operador == 'sub'){
        r = n1 - n2
        res.innerText = r
    } else if (operador == 'div'){
        r = n1 / n2
        res.innerText = r
    } else if (operador == 'mul'){
        r = n1 * n2
        res.innerText = r
    } else {
        alert(' ERRO - Escolha um operador para fazer a conta')
    }
}

