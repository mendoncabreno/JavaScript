function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
   //  var hora = data.getHours()
   var hora = 9
    msg.innerHTML = `Agora são ${hora}:00 horas.`
    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.scr = 'manha.jpg'
        document.body.style.background = '#ECD295'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#AC6F66'
    } else {
        //Boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#12171F'
    }

}