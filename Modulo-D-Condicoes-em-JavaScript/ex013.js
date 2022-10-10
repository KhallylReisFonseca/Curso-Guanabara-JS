let agora = new Date()
let horario = agora.getHours()
console.log(`Agora são exatamente ${horario} horas.`)
if(horario >= 6 && horario <= 12){
    console.log('Bom dia!')
}
else if(horario >= 13 && horario <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa noite!')
}