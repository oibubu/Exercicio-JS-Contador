function contar(){
    var comeco = document.getElementById('comeco')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (comeco.value.length == 0 || fim.value.length == 0){
        window.alert('[ERRO] Faltam dados a serem preenchidos')
        res.innerHTML = 'Impossivel contar'
    } else if (passo.value.length == 0 || passo.value == 0){
        window.alert('Valor do campo "Passo" foi considerado 1')
        passo.value = 1
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(comeco.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f) {
            for(var c = i;c <= f; c += p){
                res.innerHTML += `${c}, `
            }
        } else {
            for(var c = i;c >= f; c -= p){
                res.innerHTML += `${c}, `
            }
        }
    }
}