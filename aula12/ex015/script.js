function verificar (){
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.querySelector('input#txtano')
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value)>ano){
       window.alert('[Erro] Verifique o ano e tente novamente!')
   } else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var gênero = ''
      //Criando elemento imagem
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked){
          gênero = 'Homem'
          if(idade>=0&&idade<10){
              //Criança
              img.setAttribute('src', 'bebe-h.png')
          } else if (idade<25){
             //Jovem
              img.setAttribute('src', 'jovem-h.png')
          } else if(idade <50){
              //Adulto
              img.setAttribute('src', 'adulto-h.png')
          } else {
              //Idoso
              img.setAttribute('src', 'idoso.png')
          }
      } else if (fsex[1].checked){
          gênero = 'Mulher'
          if(idade>=0&&idade<10){
            //Criança
            img.setAttribute('src', 'bebe-m.png')
        } else if (idade<25){
           //Jovem
           img.setAttribute('src', 'jovem-m.png')
        } else if(idade <50){
            //Adulto
            img.setAttribute('src', 'adulto-m.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosa.png')
        }
      }
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.append(img)
   }
}