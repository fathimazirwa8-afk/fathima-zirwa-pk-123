// =============================
// Typing Animation
// =============================

const words = [
  "BCA Student",
  "UI/UX Designer",
  "Web Developer",
  "Creative Thinker"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const current = words[wordIndex];

    if(!isDeleting){
        typing.textContent = current.substring(0,charIndex++);
    }else{
        typing.textContent = current.substring(0,charIndex--);
    }

    let speed = 120;

    if(!isDeleting && charIndex === current.length + 1){
        isDeleting = true;
        speed = 1200;
    }

    if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect,speed);
}

typeEffect();


// =============================
// Dark Mode
// =============================

const theme = document.querySelector(".theme");

theme.onclick = () => {

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

theme.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

theme.innerHTML='<i class="fa-solid fa-moon"></i>';

}

};


// =============================
// Scroll Animation
// =============================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".project-card,.achievement-card,.timeline-item,.about-box,.contact-box").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});


// =============================
// Smooth Navigation
// =============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",e=>{

e.preventDefault();

const target=document.querySelector(link.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});


// =============================
// Scroll To Top Button
// =============================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
