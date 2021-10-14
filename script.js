let res = document.getElementById('res')

let n1 = 0
let n2 = 0
let r = 0
let operador = 0;

function montardsp(x) {
    let digito = x
    res.innerText = res.innerText + digito
}

function reset() {
    n1 = 0
    n2 = 0
    res.innerText = ''
}
function adicao() {
    n1 = parseInt(res.innerText)
    res.innerText = ''
    operador = 1
} 

function subtracao() {
    n1 = parseInt(res.innerText)
    res.innerText = ''
    operador = 2
}

function multiplicacao() {
    n1 = parseInt(res.innerText)
    res.innerText = ''
    operador = 3
}

function divisao() {
    n1 = parseInt(res.innerText)
    res.innerText = ''
    operador = 4
}

function igual() {
    n2 = parseInt(res.innerText)
    if (operador == 1) {
        r = n1 + n2
    } else if (operador == 2) {
        r = n1 - n2
    } else if (operador == 3) {
        r = n1 * n2
    } else if (operador == 4) {
        r = n1 / n2 
    } else {
        alert('Selecione um operador para o calculo')
    }
    res.innerText = r
}

