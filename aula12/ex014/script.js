function carregar (){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours() 
    
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>0&&hora<12){
        //Bom dia
        img.src = 'manha250.png'
        document.body.style.background ='#d3b78d'
    } else if(hora>=12&&hora<=18){
        //Boa tarde
        img.src = 'tarde250.png'
        document.body.style.background = '#937122'
    } else {
        //Boa noite
        img.src = 'noite250.png'
        document.body.style.background = '#00394e'
    }
}