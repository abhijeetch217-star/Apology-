// ===== PAGE NAVIGATION =====
let currentPage = 1;

function showPage(page){
  document.querySelectorAll(".page").forEach(p=>{
    p.classList.remove("active");
  });
  document.getElementById("page"+page).classList.add("active");
}

function nextPage(){
  if(currentPage < 6){
    currentPage++;
    showPage(currentPage);
  }
}

function prevPage(){
  if(currentPage > 1){
    currentPage--;
    showPage(currentPage);
  }
}

// ===== TYPING EFFECT (PAGE 1) =====
const text = "Eva 💛\nKabhi kabhi life thodi heavy lagti hai na...\nPar tum usse bhi zyada strong ho ✨\nAur sach bolu...\nTum sab theek kar dogi 💫";

let i = 0;
function typeWriter(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// ===== LOADER FIX =====
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    showPage(1);
    typeWriter();
    startHearts();
  }, 1200);
};

// ===== FLOATING HEARTS BACKGROUND =====
function startHearts(){
  setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random()*20) + "px";
    heart.style.animationDuration = (3 + Math.random()*3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);

  },300);
}

// ===== HEART BURST (LAST PAGE) =====
function heartBurst(){
  for(let i=0;i<40;i++){
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.fontSize = "20px";

    const x = (Math.random()-0.5)*300;
    const y = (Math.random()-0.5)*300;

    heart.style.transition = "1s";

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
      heart.style.opacity = 0;
    },10);

    setTimeout(()=>{
      heart.remove();
    },1000);
  }
}
