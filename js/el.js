

window.addEventListener("scroll", function() {showFunction();});
window.addEventListener("touchmove", function() {showFunctionTouch();});
window.onload = mutePage();

let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let audiofondo = document.getElementById("audiofondo");
let audiomaq = document.getElementById("audiomaq");
let iconaudio = document.getElementById("au");
let fotoDia = document.getElementById("dia");
let fotoNoche = document.getElementById("noche");
let dyn = document.getElementById("dyn");
let logo = document.getElementById("logo");
let logo100 = document.getElementById("logo100");
let head = document.getElementById("head");
let trolley = document.getElementById("trolley");
let botonNav = document.getElementById("boton-nav");
let menuNav = document.getElementById("menuNav");
let doTrolley = document.getElementById("doTrolley");
let noPlayed_dos = true;
let dia = true;
let logocolor = true;

function cambioLogo(){
    if(logocolor && dia){
        logo.src ="img/logo-blanco.png";
        logocolor = false;
    }
    else if (!logocolor && dia){
        setTimeout(()=> {
            logo.src ="img/logo-color.png";
            logocolor = true;
            
        }, 400);
    }
}

function mutePage() {
    document.querySelectorAll("audio").forEach( elem => elem.muted = true );
}

function unMutePage() {
    document.querySelectorAll("audio").forEach( elem => elem.muted = false );
}



function fondoplay(){
    if(audiofondo.paused){
        audiofondo.play();
        iconaudio.src = "svg/altavoz.svg";
        unMutePage();
    }else{
        audiofondo.pause();
        iconaudio.src = "svg/mudo.svg";  
        mutePage();
    }
}

function diaNoche(){
    if(dia){
        fotoDia.style.animation = "fadeOut 2s";
        fotoNoche.style.opacity="1";
        fotoNoche.style.animation = "fadeEffect 2s";
        setTimeout(() => { 
            dyn.src = "svg/moon.svg";
            logo.src ="img/logo-blanco.png";
            head.style = "background-color:black;";
            logo100.src ="svg/logo100-noche.svg"; 
            botonNav.style.filter =  "invert(90%)";
        }, 600);
        
        dyn.style.animation = "fadeToInvertSVG 2s";
        iconaudio.style.animation = "fadeToInvertSVG 2s";
        setTimeout(()=> {
            dyn.style = "filter: invert(90%)";
            iconaudio.style = "filter: invert(90%)";
            fotoDia.style.opacity = "0";
            
        }, 2000);
        
        dia = false;
    }else{
        fotoDia.style.opacity="1";
        fotoDia.style.animation = "fadeEffect 2s";
        fotoNoche.style.animation = "fadeOut 2s";
        setTimeout(() => { 
            dyn.src = "svg/sun.svg";
            logo.src ="img/logo-color.png";
            head.style = "";
            logo100.src ="svg/logo-100.svg"; 
            botonNav.style.filter =  "";
        }, 700);
        
        dyn.style.animation = "fadeToNormalSVG 2s";
        iconaudio.style.animation = "fadeToNormalSVG 2s";
        setTimeout(()=> {
            dyn.style = "filter: invert(0%)";
            iconaudio.style = "filter: invert(0%)";
            fotoNoche.style.opacity = "0";
            

        }, 2000);

        dia = true;
    }
}


function showFunction() {
    // if (document.documentElement.scrollLeft < 50) {
    // uno.style.display = "none";
    // }             
    // if (document.documentElement.scrollLeft > 200 && document.documentElement.scrollLeft < 1200) {
    //     uno.style.display = "block";
    //     uno.style.animation = "fadeEffect 3s";
    //     setTimeout(() => { uno.style.opacity = "1"; }, 3000);
        
    // } else {
    //     uno.style.animation = "fadeOut 3s";
    //     setTimeout(() => { uno.style.opacity = "0"; }, 3000);
    // }
    
    // if (document.documentElement.scrollLeft > 1200 && document.documentElement.scrollLeft < 2300) {
    //     // dos.style.display = "block";
        
    //     dos.style.animation = "fadeEffect 3s";
    //     setTimeout(() => { dos.style.opacity = "1"; }, 3000);
    //     if (noPlayed_dos){
    //         audiomaq.play();
    //         noPlayed_dos= false;
    //     } 
        

    // } else {
    //     dos.style.animation = "fadeOut 3s";
    //     setTimeout(() => { dos.style.opacity = "0"; }, 3000);
    //     noPlayed_dos = true;
        
    // }

    if (document.documentElement.scrollLeft > 800 && document.documentElement.scrollLeft < 820){
        doTrolley.style.display = "none";
        trolley.style.opacity = "1";
        trolley.style.animation = "movimientoIzq 3s";
        setTimeout(() => { 
            trolley.style.animation = "";
            trolley.style.opacity = "1";
            trolley.style.transform = "translateX(-800px)";
            doTrolley.style = "";
           
        }, 3000);
    } else{
        
    }

    // if (document.documentElement.scrollLeft > 2300 && document.documentElement.scrollLeft < 3400) {
    //     // tres.style.display = "block";
    //     tres.style.animation = "fadeEffect 3s";
        
    //     setTimeout(() => { 
    //         tres.style.opacity = "1";
    //     }, 3000);
        
    // } else {
    //     tres.style.animation = "fadeOut 3s";
    //     setTimeout(() => { tres.style.opacity = "0"; }, 3000);
    // }

    // if (document.documentElement.scrollLeft > 3400) {
    //     // cuatro.style.display = "block";
    //     cuatro.style.animation = "fadeEffect 3s";
    //     setTimeout(() => { cuatro.style.opacity = "1"; }, 3000);
    // } else {
    //     cuatro.style.animation = "fadeOut 3s";
    //     setTimeout(() => { cuatro.style.opacity = "0"; }, 3000);

    // }
   
}

function showFunctionTouch() {
     
     if (document.body.scrollLeft < 50) {
     uno.style.display = "none";
     dos.style.display = "none";
     tres.style.display = "none";
     cuatro.style.display = "none";
     }             
 
    
     if (document.body.scrollLeft > 200 && document.body.scrollLeft < 1200) {
         uno.style.display = "block";
         uno.style.animation = "fadeEffect 3s";
         setTimeout(() => { uno.style.opacity = "1"; }, 3000);
         
     } else {
         uno.style.animation = "fadeOut 3s";
         setTimeout(() => { uno.style.opacity = "0"; }, 3000);
     }

     if (document.body.scrollLeft > 1200 && document.body.scrollLeft < 2300) {
         dos.style.display = "block";
         dos.style.animation = "fadeEffect 3s";
         setTimeout(() => { dos.style.opacity = "1"; }, 3000);
         if (noPlayed_dos){
            audiomaq.play();
            noPlayed_dos= false;
        } 
     } else {
         dos.style.animation = "fadeOut 3s";
         setTimeout(() => { dos.style.opacity = "0"; }, 3000);
         noPlayed_dos=true;
     }

     if (document.body.scrollLeft > 2300 && document.body.scrollLeft < 3400) {
         tres.style.display = "block";
         tres.style.animation = "fadeEffect 3s";
         setTimeout(() => { tres.style.opacity = "1"; }, 3000);
     } else {
         tres.style.animation = "fadeOut 3s";
         setTimeout(() => { tres.style.opacity = "0"; }, 3000);
     }

     if (document.body.scrollLeft > 3400) {
         cuatro.style.display = "block";
         cuatro.style.animation = "fadeEffect 3s";
         setTimeout(() => { cuatro.style.opacity = "1"; }, 3000);
     } else {
         cuatro.style.animation = "fadeOut 3s";
         setTimeout(() => { cuatro.style.opacity = "0"; }, 3000);

     }
    
 }




(
    
    
    function() {
    

    function sideScroll(element,direction,speed,distance,step){
        scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }



    function scrollHorizontally(e) {
        e = window.event || e;
        var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        let step = delta*20;
        // sideScroll(document.documentElement,'left',100,10,step);

        // document.documentElement.scrollLeft -= step; 
        // document.body.scrollLeft -= step; 
 
        e.preventDefault();
        // para posicionar
        const log = document.getElementById('log');
        log.textContent = document.documentElement.scrollLeft;
    }
    if (window.addEventListener) {
        // IE9, Chrome, Safari, Opera
        window.addEventListener("mousewheel", scrollHorizontally, false);
        window.addEventListener("touchmove", scrollHorizontally, false);
        // Firefox
        window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
        // IE 6/7/8
        window.attachEvent("onmousewheel", scrollHorizontally);
    }
})();
