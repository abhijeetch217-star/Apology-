let current = 1;

/* Loader */
window.onload = () => {
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1500);
};

/* Navigation */
function nextPage(){
    document.getElementById("page"+current).classList.remove("active");
    current++;
    document.getElementById("page"+current).classList.add("active");
}

function prevPage(){
    document.getElementById("page"+current).classList.remove("active");
    current--;
    document.getElementById("page"+current).classList.add("active");
}

/* Typing Effect */
let text = "Eva… 💛\nAaj duniya thodi heavy lag rahi hogi na…\nPar tum strong ho ✨\nAur tumhari smile… dangerous hai 😌❤️";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,40);
    }
}
typing();

/* Floating Hearts */
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function createHeart(){
    hearts.push({
        x:Math.random()*canvas.width,
        y:canvas.height,
        size:Math.random()*6+2,
        speed:Math.random()*2+1
    });
}

function drawHearts(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="pink";

    hearts.forEach((h,i)=>{
        ctx.beginPath();
        ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
        ctx.fill();

        h.y -= h.speed;

        if(h.y<0) hearts.splice(i,1);
    });

    requestAnimationFrame(drawHearts);
}

setInterval(createHeart,300);
drawHearts();

/* Heart Burst */
function heartBurst(){
    for(let i=0;i<100;i++){
        hearts.push({
            x:canvas.width/2,
            y:canvas.height/2,
            size:Math.random()*8+3,
            speed:Math.random()*5+2
        });
    }
}
