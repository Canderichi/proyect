let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamiento_Actual){
        document.getElementById('rt-header').style.top ='0';
    }
    else{
        document.getElementById('rt-header').style.top = '-170px';
    }
    ubicacionPrincipal = desplazamiento_Actual;
}