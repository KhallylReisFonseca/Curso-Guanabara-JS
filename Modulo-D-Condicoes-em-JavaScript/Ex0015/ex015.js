const msg = document.getElementById('div1');
const img = document.getElementById('imagem');
function carregar(){
    const data = new Date();
    const hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 8 && hora <= 12){
        img.src = "/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0015/Imagens/manhacortada.jpg"
        document.body.style.background = '#ccb24c'
    } else if(hora >= 13 && hora <= 18){
        img.src = "/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0015/Imagens/tardecoratada.jpg"
        document.body.style.background = '#457d97'
    } else {
        img.src = "/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0015/Imagens/noitecortada.jpg"
        document.body.style.background = '#4a403d'
    }
}

carregar();

