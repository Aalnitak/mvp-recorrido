const almacen = window.localStorage;
let vidToggleTxt = document.getElementById('vidToggleTxt');
let videoTxtShown = document.getElementById('videoTxtShown');
let video1txt = document.getElementById('video1txt');
let cine1 = document.getElementById("cine1");
let zoom1 = document.getElementById("zoom1");
let video1 = document.getElementById("video1");
let ºvideo1shown = false;


// window.onload = $('#videoModal').modal('toggle');
window.onload = initDivMouseOver();


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}  

docReady(()=>{
	setTimeout(()=>{
		modalInicio();
	}, 5000
	);
});


function toggleCine1(e){
    
    if(e=='none'){
    
       video1.pause(); 
       cine1.style.animation = "scalevideoIN 1s";
       
       setTimeout(() =>{
        cine1.style.scale = "0";
        cine1.style.display = e;
       },1000);
        
    } else {
        cine1.style.scale = "0";
        cine1.style.display = e;
        cine1.style.animation = "scalevideoOUT 1s";
        setTimeout(() =>{
            cine1.style.scale = "1";
           },1000);
        
        video1.currentTime = 0;
        video1.play();
    }
    
}
function toggleZoom1(e){
    
    if(e=='none'){
    
       zoom1.style.animation = "fadeOut 1s";
       
       setTimeout(() =>{
        zoom1.style.opacity = "0";
        zoom1.style.display = e;
       },1000);
        
    } else {
        zoom1.style.opacity = "0";
        zoom1.style.display = e;
        zoom1.style.animation = "fadeEffect 1s";
        setTimeout(() =>{
            zoom1.style.opacity = "1";
           },1000);
    }
    
}

function initDivMouseOver()   {
   
   video1txt.mouseIsOver = false;
   video1txt.onmouseover = function()   {
	  this.mouseIsOver = true;
	  console.log(this.mouseIsOver);
   };
   video1txt.onmouseout = function()   {
	  this.mouseIsOver = false;
	  console.log(this.mouseIsOver);
   };
   if (ºvideo1shown && !this.mouseIsOver){
	
	
   }
   
}

video1txt.onmouseleave = ()=>{
	if (ºvideo1shown){
	// TOGGLW ANIMA A DESAPARECER Y DESAPARECE
	vidToggleTxt.style.animation = "fadeEffect 1s";
	setTimeout(
		()=>{
			vidToggleTxt.style.display = "inline-flex";
		}, 1000
	);

	//shown al revez
	videoTxtShown.style.animation = "fadeOut 0.5s";
	setTimeout(
		()=>{
			videoTxtShown.style.display = "none";
		}, 500
	);
	// cuadro se agranda con animacion
	video1txt.style.animation = "videoTxtShrink 1s";
	setTimeout(
		()=>{
			video1txt.style.height = "100px";
			video1txt.style.width = "140px";
			video1txt.style.padding = "0";

		}, 1000
	);

	ºvideo1shown = false;
	}
}


function toggleTranvia(){
	$('#tranviaModal').modal('toggle');
}
function toggleFarol0(){
	$('#farolModal').modal('toggle');
}

function modalInicio(){
	if (almacen.getItem('Modal0shown') !== 'true' ){
		$('#videoModal').modal('toggle');
		setTimeout(
			()=>{
				$('#videoModal').modal('toggle');
			},15000
		);
		almacen.setItem('Modal0shown' , 'true');
	}
}

function toggleVidTxt(){
 if (!ºvideo1shown){
	 		// TOGGLW ANIMA A DESAPARECER Y DESAPARECE
	vidToggleTxt.style.animation = "fadeOut 1s";
	setTimeout(
		()=>{
			vidToggleTxt.style.display = "none";
		}, 1000
	);
	
//shown al revez
	videoTxtShown.style.animation = "fadeEffect 1s";
	setTimeout(
		()=>{
			videoTxtShown.style.display = "block";
		}, 1000
	);
// cuadro se agranda con animacion
	video1txt.style.animation = "videoTxtExpand 1s";
	setTimeout(
		()=>{
			video1txt.style.height = "250px";
			video1txt.style.width = "390px";
			video1txt.style.padding = "55px 40px 5px 40px";

		}, 1000
	);
	ºvideo1shown= true;
		
 }else{
	 // TOGGLW ANIMA A DESAPARECER Y DESAPARECE
// 	 vidToggleTxt.style.animation = "fadeEffect 1s";
// 	 setTimeout(
// 		 ()=>{
// 			 vidToggleTxt.style.display = "inline-flex";
// 		 }, 1000
// 	 );
	 
//  //shown al revez
// 	 videoTxtShown.style.animation = "fadeOut 0.5s";
// 	 setTimeout(
// 		 ()=>{
// 			 videoTxtShown.style.display = "none";
// 		 }, 500
// 	 );
//  // cuadro se agranda con animacion
// 	 video1txt.style.animation = "videoTxtShrink 1s";
// 	 setTimeout(
// 		 ()=>{
// 			 video1txt.style.height = "100px";
// 			 video1txt.style.width = "140px";
// 			 video1txt.style.padding = "0";
 
// 		 }, 1000
// 	 );
 
// 	 ºvideo1shown = false;
 }
}