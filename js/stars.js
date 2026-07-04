const canvas=document.getElementById("stars");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
resize();
addEventListener("resize",resize);

const stars=Array.from({length:80},()=>({
  x:Math.random()*innerWidth,
  y:Math.random()*innerHeight,
  r:Math.random()*1.2
}));

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  for(let s of stars){
    ctx.beginPath();
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle="rgba(220,230,255,.35)";
    ctx.fill();
  }

  requestAnimationFrame(draw);
}
draw();