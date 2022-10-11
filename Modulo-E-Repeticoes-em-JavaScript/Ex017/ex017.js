function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res');
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //alert('ERRO! Insira os dados corretamente!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if( i < f){
            for (let index = i; index <= f; index+= p) {
                res.innerHTML += ` ${index} \u{1F449}`
            }
        } else {
            for (let index = i; index >= f; index-= p) {
                res.innerHTML += ` ${index} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }

}

contar();