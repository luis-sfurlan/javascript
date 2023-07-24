function tabuada() {
    var num = document.getElementById('num')
    var tab = document.getElementById('tabuada') 
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var r = n * c
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${r}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}