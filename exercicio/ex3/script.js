function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.cssText ="width: 250px; height: 250px; border-radius: 50%; padding-top:10px"
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'cmo.jpg')
            } else if (idade < 21)  {
                //jovem
                 img.setAttribute('src', 'jh.jpg')
            } else if (idade < 50) {
                    //adulto
                     img.setAttribute('src', 'adh.jpg')
                } else {
                    //idoso
                     img.setAttribute('src', 'ih.jpg')
                }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                 img.setAttribute('src', 'cma.jpg')
            } else if (idade < 21)  {
                //jovem
                 img.setAttribute('src', 'jm.jpg')
            } else if (idade < 50) {
                    //adulta
                     img.setAttribute('src', 'adm.jpg')
                } else {
                    //idosa
                     img.setAttribute('src', 'im.jpg')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}