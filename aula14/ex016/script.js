function contar() {
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')

    if (ini.value == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando: `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            p = 1
        } 

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        } else if (i > f) {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        }
        res.innerHTML += `\u{1F3C1}`






    }
}