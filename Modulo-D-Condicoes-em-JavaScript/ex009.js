let let vel = 85
let velLimite = 80


if(vel > velLimite){
    console.log(`Você foi multado por ultrapassar a velocidade limite de: ${velLimite}km/h. Sua velocidade atual é ${vel}km/h.`)
} else if(vel < velLimite){
    console.log(`A velocidade do seu carro é ${vel}km/h.`)
}
else{
    console.log('Dirija sempre usando cinto de segurança!')
}
console.log(`A velocidade do seu carro é ${vel}km/h.`)
console.log(`Você foi multado por ultrapassar a velocidade limite de: ${velLimite}km/h. Sua velocidade atual é ${vel}km/h.`)
console.log('Dirija sempre usando cinto de segurança!')


let pais = 'Brasil'
console.log(`Vivendo em ${pais}.`)
if (pais == 'Brasil'){
    console.log('Voce é Brasileiro')
}
else{
    console.log('Voce é Estrangeiro')
}