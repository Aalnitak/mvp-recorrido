
let pano0  = false;
let pano1  = false;
let mostrado0 = false;
let mostrado1 = false;
const containerPano0 = document.getElementById('pano-container0');
let infospot, infospot2, panorama, viewer;

function init0(){

infospot = new PANOLENS.Infospot();
infospot.position.set( 5000.00, -665.23, -3996.49 );
infospot.addHoverText( 'Prueba ENEL' );

infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
infospot2.position.set( -5000.00, -1825.25, 197.56 );
infospot2.addHoverElement( document.getElementById( 'desc-container' ), 200 );


panorama = new PANOLENS.ImagePanorama("./img/equirectangular/tent.jpg");
panorama.add( infospot );
panorama.add( infospot2 );

viewer = new PANOLENS.Viewer({container : containerPano0});
viewer.add( panorama );

}
function disposePanorama (panorama, viewer) {

    panorama.reset();
    viewer.destroy();
    panorama = "null";

  }

function togglePano0(){
    if (!pano0){
        containerPano0.classList.add('open');
        if (!mostrado0){
            init0();
            mostrado0 = !mostrado0;
        }
        pano0 = !pano0;
    }else if (pano0){
        containerPano0.classList.remove('open');
        
        pano0 = !pano0;
    }
}


// otra cosa

panoramaContainer = document.getElementById( 'panorama-container' );
mainContainer = document.getElementById( 'main-container' );
closeButton = panoramaContainer.querySelector( '.close' );
descCont = document.getElementById( 'desc-container' );
let panorama1, viewer1;
infospot = new PANOLENS.Infospot();
    infospot.position.set( 5000.00, -665.23, -3996.49 );
    infospot.addHoverText( 'Prueba ENEL' );
    
    infospot2 = new PANOLENS.Infospot( 300, PANOLENS.DataImage.Info );
    infospot2.position.set( -5000.00, -1825.25, 197.56 );
    infospot2.addHoverElement(descCont , 200 );
    infospot2.lockHoverElement();
    
function init1(){
    


    panorama1 = new PANOLENS.ImagePanorama("./img/equirectangular/train.jpg");
    panorama1.add(infospot);
    panorama1.add(infospot2);
    viewer1 = new PANOLENS.Viewer( { container: mainContainer , autoHideInfospot: false , controlBar: false } );
    viewer1.add(panorama1);
    // viewer1.disableControl();
    // console.log(infospot2.element); //es el eleento
    // infospot2.element.addEventListener("mouseenter",console.log("oveer"));
    // infospot2.element.addEventListener("mouseleave",console.log("leave"));
    panoramaContainer.classList.add('open');


    
    closeButton.addEventListener( 'click', function () {
        // disposePanorama(panorama1,viewer1);
        panoramaContainer.classList.remove( 'open' );
      }, false );
}
function togglePano1(){
    if (!pano1){
        if (!mostrado1){
            init1();
            mostrado1 = !mostrado1;
        }
        pano1 = !pano1;
    }else if (pano1){ 
        panoramaContainer.classList.add('open');
    }
}
window.onload = eventosli();

function eventosli(){    
    // console.log(infospot2.element);
    infospot2.element.onmouseenter = () => {
        viewer1.disableControl();
    };
    infospot2.element.onmouseleave = () => {
        viewer1.enableControl();
    };
}

