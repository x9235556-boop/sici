const bgm=document.getElementById("bgm");
let music=false;

function toggleMusic(){
  if(!music){
    bgm.volume=0.4;
    bgm.play();
    music=true;
  }else{
    bgm.pause();
    music=false;
  }
}