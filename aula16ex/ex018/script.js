let numeros = []
let fnum = document.getElementById('fnum')
let flista = document.getElementById('flista')
let res = document.getElementById('res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        false
    }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    let num = Number(fnum.value)
    res.innerHTML = ''

    if (isNumero(num) && !inlista(num, numeros) && fnum.value.length != 0) {
        numeros.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        flista.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    fnum.value = ''
    fnum.focus()
}

function calcular() {
    if (numeros.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let total = numeros.length
        let soma = 0
        let maior = numeros[0]
        let menor = numeros[0]
        for (let pos in numeros) {
            soma += numeros[pos]
            if (numeros[pos] > maior) {
                maior = numeros[pos]
            }
            if (numeros[pos] < menor) {
                menor = numeros[pos]
            }
        }
        let media = soma / total
        
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todo os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}