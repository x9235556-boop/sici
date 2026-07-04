const panel=document.getElementById("panel");
const btn=document.getElementById("settingsBtn");

btn.onclick=()=>{
  panel.classList.toggle("hide");
}

document.getElementById("addBtn").onclick=()=>{
  const v=document.getElementById("input").value.trim();
  if(!v) return;
  addPoetry(v);
  document.getElementById("input").value="";
  spawn(v);
}

document.getElementById("musicBtn").onclick=()=>{
  toggleMusic();
}

document.getElementById("clearBtn").onclick=()=>{
  if(confirm("确定清空诗句？")){
    clearPoetry();
  }
}