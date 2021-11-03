let res = document.getElementById('res')

let n1 = 0
let n2 = 0
let r = 0
let operador = 0;

let t1 = document.getElementById('t1')
let t2 = document.getElementById('t2')
let t3 = document.getElementById('t3')

function montardsp(x) {
    let digito = x
    res.innerText = res.innerText + digito
}
function apagar() {
    res.innerText = res.innerText.substring(0, res.innerText.length - 1)
    
}
//#region operadores
function reset() {
    n1 = 0
    n2 = 0
    res.innerText = ''
}
function adicao() {
    n1 = parseFloat(res.innerText)
    res.innerText = ''
    operador = 1
    console.log()
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
    n2 = parseFloat(res.innerText)
    if (operador == 1) {
        r = n1 + n2
    } else if (operador == 2) {
        r = n1 - n2
    } else if (operador == 3) {
        r = n1 * n2
    } else if (operador == 4) {
        if (n2 == 0) {
            alert('Impossivel dividir por zero')
            reset()
        } else {
            r = n1 / n2  
        }
        
    } else {
        alert('Selecione um operador para o calculo')
    }
    res.innerText = r
}
//#endregion


function theme(x) {
    if (x == 1) {
        t1.checked = true
        t2.checked = false
        t3.checked = false

        document.body.style.backgroundColor = 'var(--bgcolor)'
    } else if (x == 2) {
        t1.checked = false
        t2.checked = true
        t3.checked = false

        document.body.style.backgroundColor = 'var(--bgcolor3)'
    } else if (x == 3) {
        t1.checked = false
        t2.checked = false
        t3.checked = true
        document.body.style.backgroundColor = 'var(--bgcolor2)'
    }
}
