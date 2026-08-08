/*==================================================
        DESIDERIO - MAIN.TS PARTE 1
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{


/*=====================================
        NAVBAR INTELIGENTE
=====================================*/

const navbar = document.querySelector(".navbar") as HTMLElement;

let lastScroll = 0;


window.addEventListener("scroll",()=>{


    const currentScroll = window.scrollY;


    if(currentScroll > 80){

        navbar.classList.add("navbar-scroll");

    }else{

        navbar.classList.remove("navbar-scroll");

    }


    // Ocultar navbar al bajar

    if(currentScroll > lastScroll && currentScroll > 150){

        navbar.style.transform="translateY(-100%)";

    }else{

        navbar.style.transform="translateY(0)";

    }


    lastScroll=currentScroll;


});



/*=====================================
        CURSOR GLOW
=====================================*/

const cursor = document.querySelector(".cursor-glow") as HTMLElement;


if(cursor){


document.addEventListener("mousemove",(e)=>{


    cursor.style.left =
    e.clientX + "px";


    cursor.style.top =
    e.clientY + "px";


});


document.querySelectorAll("a,button,.service-card,.gallery-item")
.forEach(element=>{


element.addEventListener("mouseenter",()=>{

    cursor.style.transform="scale(3)";

    cursor.style.opacity=".8";

});


element.addEventListener("mouseleave",()=>{

    cursor.style.transform="scale(1)";

    cursor.style.opacity=".5";

});


});


}



/*=====================================
        PARALLAX HERO
=====================================*/


const heroImages =
document.querySelectorAll(".hero-img");


window.addEventListener("scroll",()=>{


heroImages.forEach(image=>{


const img =
image as HTMLElement;


img.style.transform =
`translateY(${window.scrollY * .18}px) scale(1.08)`;


});


});



/*=====================================
        SCROLL REVEAL
=====================================*/


const revealElements =
document.querySelectorAll(
".service-card, .process-card, .stat-box, .about-image, .section-title"
);



const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


(entry.target as HTMLElement)
.classList.add("reveal-active");


}


});


},{

threshold:.15

});



revealElements.forEach(element=>{


element.classList.add("reveal");


revealObserver.observe(element);


});



/*=====================================
        ANIMACIÓN DE SECCIONES
=====================================*/


const sections =
document.querySelectorAll("section");



const sectionObserver =
new IntersectionObserver((entries)=>{


entries.forEach(section=>{


if(section.isIntersecting){


(section.target as HTMLElement)
.style.opacity="1";


(section.target as HTMLElement)
.style.transform="translateY(0)";


}


});


},{

threshold:.1

});



sections.forEach(section=>{


const sec =
section as HTMLElement;


sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s ease";


sectionObserver.observe(section);


});



}); 

/*==================================================
        DESIDERIO - MAIN.TS PARTE 2
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*=====================================
        CONTADORES ANIMADOS
=====================================*/


const counters =
document.querySelectorAll(".counter");


const counterObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


const counter =
entry.target as HTMLElement;


const target =
Number(counter.dataset.target);


let value=0;


const speed =
target / 80;


const update=()=>{


value += speed;


if(value < target){


counter.innerText =
Math.floor(value).toString();


requestAnimationFrame(update);


}else{


counter.innerText =
target.toString()+"+";


}


};


update();


counterObserver.unobserve(counter);


}


});


},{


threshold:.6


});



counters.forEach(counter=>{


counterObserver.observe(counter);


});





/*=====================================
        TARJETAS 3D
=====================================*/


const cards =
document.querySelectorAll(
".service-card,.process-card,.hero-card"
);



cards.forEach(card=>{


card.addEventListener("mousemove",(event)=>{


const element =
card as HTMLElement;


const rect =
element.getBoundingClientRect();



const x =
event.clientX - rect.left;


const y =
event.clientY - rect.top;



const centerX =
rect.width / 2;


const centerY =
rect.height / 2;



const rotateX =
(y-centerY)/15;


const rotateY =
(centerX-x)/15;



element.style.transform =
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});



card.addEventListener("mouseleave",()=>{


(card as HTMLElement).style.transform =
`
perspective(900px)
rotateX(0)
rotateY(0)
`;



});


});





/*=====================================
        TEXTO ESCRIBIENDO
=====================================*/


const typingTexts =
document.querySelectorAll(
".hero-title"
);



typingTexts.forEach(title=>{


const element =
title as HTMLElement;


const text =
element.innerText;



element.innerText="";



let index=0;



const typing =
()=>{


if(index < text.length){


element.innerText +=
text.charAt(index);


index++;


setTimeout(typing,45);


}


};



setTimeout(typing,800);



});





/*=====================================
        BOTONES GLOW
=====================================*/


const buttons =
document.querySelectorAll(
".button,.btn-premium"
);



buttons.forEach(button=>{


button.addEventListener("mousemove",(e)=>{


const btn =
button as HTMLElement;


const rect =
btn.getBoundingClientRect();



const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;



btn.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
#00eaff,
#006eff
)
`;



});



button.addEventListener("mouseleave",()=>{


(button as HTMLElement)
.style.background="";


});



});





/*=====================================
        PARTÍCULAS DINÁMICAS
=====================================*/


const particles =
document.querySelector("#particles");



if(particles){


for(let i=0;i<45;i++){


const particle =
document.createElement("span");



particle.className =
"particle";



particle.style.left =
Math.random()*100+"%";



particle.style.top =
Math.random()*100+"%";



particle.style.animationDelay =
Math.random()*5+"s";



particles.appendChild(particle);


}



}



});

let lastScroll = 0;

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

const current = window.pageYOffset;

if(current > lastScroll && current > 120){

navbar?.classList.add("hide");

}else{

navbar?.classList.remove("hide");

}

lastScroll = current;

});