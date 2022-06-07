var cont = 0;
function mudar(){
    if(cont==0){
        document.getElementById('img').src = "img/ligada.png";
        document.getElementById("img").innerHTML = "Turn ON";
        document.body.style.backgroundColor = 'rgb(250, 247, 229)';
        cont=1;
        }
    else if(cont==1){
        document.getElementById("img").src = "img/desligada.png";
        document.getElementById("img").innerHTML = "Turn OFF";
        document.body.style.backgroundColor = '#222';
        cont=0;
      }
    }