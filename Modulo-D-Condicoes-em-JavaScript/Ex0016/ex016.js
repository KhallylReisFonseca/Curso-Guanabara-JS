function verificar(){
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano');
    const res = document.querySelector('div#res');
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados e tente novamente!')
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        let genero = ' ';
        const img = document.createElement('img');
        img.style.width = '50%'
        img.style.padding = '15px'
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/bebehomem.jpg')
            } else if(idade >= 13 && idade <= 18){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/adolescentehomem.jpg')
            }else if(idade >= 19 && idade <= 60){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/homem.jpg')
            }else if(idade >= 61 && idade <= 120){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/idoso.jpg')
            } else{
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/morreu.jpg')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <= 12){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/bebemulher.jpg')
            } else if(idade >= 13 && idade <= 18){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/criançamenina.jpg')
            }else if(idade >= 19 && idade <= 60){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/mulher.jpg')
            }else if(idade >= 61 && idade <= 120){
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/idosa.jpg')
            } else{
                img.setAttribute('src', '/Curso-Guanabara-JS/Modulo-D-Condicoes-em-JavaScript/Ex0016/Imagens/morreu.jpg')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Você é ${genero}, sua idade calculada é de: ${idade} anos.`;
        res.appendChild(img);
    }
}