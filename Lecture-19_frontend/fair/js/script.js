const spanDetector=document.getElementById("span-detector");

//page load
window.addEventListener("load",function(){
    const clients=["EVERYONE","VEGANS","DEVELOPERS","FITNESS FREAKS"];
    typewriter(spanDetector,clients);
})
function typewriter(spanDetector,clients){
    let wordIndex=0;
    let isDeleting=false;
    let txt="";

    function typer(){
        let wait=40;

        wordIndex = wordIndex % clients.length;

        const word=clients[wordIndex];

        if(isDeleting==true){
            txt=word.substring(0,txt.length-1);
        }
        else{
            txt=word.substring(0,txt.length+1);
        }
        spanDetector.textContent = txt;

        let longpause=2000;

        if(isDeleting==true && txt==""){
            wordIndex++;
            isDeleting=false;
        }  
        
        else if(isDeleting==false && txt.length==word.length){
            isDeleting=true;
            wait=longpause;
            
        }
        setTimeout(function(){
            typer();
        },wait);

        }
    typer();
}
