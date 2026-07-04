let texts = JSON.parse(localStorage.getItem("poetry")||"[]");

if(texts.length===0){
  texts=["云深不知处","月落星沉","人生若只如初见"];
}

const container=document.getElementById("poetry-container");

function spawn(text){
  const el=document.createElement("div");
  el.className="poem";
  el.innerText=text||texts[Math.floor(Math.random()*texts.length)];

  el.style.left=Math.random()*innerWidth+"px";
  el.style.top="100vh";

  container.appendChild(el);
  setTimeout(()=>el.remove(),12000);
}

setInterval(()=>spawn(),1200);

function addPoetry(val){
  texts.push(val);
  localStorage.setItem("poetry",JSON.stringify(texts));
  updateCount();
}

function clearPoetry(){
  texts=[];
  localStorage.setItem("poetry",JSON.stringify(texts));
  updateCount();
}

function updateCount(){
  document.getElementById("count").innerText=texts.length+" 首诗";
}

updateCount();