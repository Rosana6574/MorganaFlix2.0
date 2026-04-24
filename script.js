// TELAPRINCIPAL - Para mover o carrossel

document.addEventListener("DOMContentLoaded", function(){

let slideIndex = 0;

const slides = document.querySelectorAll(".slide");
const carousel = document.querySelector(".carousel");

const btnRight = document.querySelector(".arrow.right");
const btnLeft = document.querySelector(".arrow.left");

btnRight.addEventListener("click", function(){

    slideIndex++;

    if(slideIndex >= slides.length){
        slideIndex = 0;
    }

    updateCarousel();

});

btnLeft.addEventListener("click", function(){

    slideIndex--;

    if(slideIndex < 0){
        slideIndex = slides.length - 1;
    }

    updateCarousel();

});

function updateCarousel(){
    carousel.style.transform = "translateX(-" + (slideIndex * 100) + "%)";
}

});



document.addEventListener("DOMContentLoaded", function(){

let slideIndex = 1;

const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");

const btnRight = document.querySelector(".arrow.right");
const btnLeft = document.querySelector(".arrow.left");
// 🔁 CLONAR PRIMEIRO E ÚLTIMO SLIDE
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, slides[0]);

const allSlides = document.querySelectorAll(".slide");
// POSIÇÃO INICIAL
carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
// 👉 ATUALIZA
function updateCarousel(){
    carousel.style.transition = "transform 0.6s ease-in-out";
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}
// 👉 PRÓXIMO
function nextSlide(){
    slideIndex++;
    updateCarousel();
}
// 👉 ANTERIOR
function prevSlide(){
    slideIndex--;
    updateCarousel();
}
// BOTÕES
btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
// 🔥 CORREÇÃO DO LOOP INFINITO
carousel.addEventListener("transitionend", () => {
    
    if(allSlides[slideIndex].isSameNode(firstClone)){
        carousel.style.transition = "none";
        slideIndex = 1;
        carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    if(allSlides[slideIndex].isSameNode(lastClone)){
        carousel.style.transition = "none";
        slideIndex = allSlides.length - 2;
        carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

});
// ✅ AUTOPLAY PROFISSIONAL
let autoPlay = setInterval(nextSlide, 4000);
// 🖱️ PAUSA NO HOVER
carousel.addEventListener("mouseenter", () => clearInterval(autoPlay));
carousel.addEventListener("mouseleave", () => {
    autoPlay = setInterval(nextSlide, 4000);
});

});




// PAGINA de homenagem - audio


const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const icon = document.getElementById("icon");
const progresso = document.getElementById("progresso");
const barra = document.getElementById("barra");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
// Play / Pause
playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.textContent = "pause_circle";
  } else {
    audio.pause();
    icon.textContent = "play_circle";
  }
});
// Atualizar barra
audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progresso.style.width = percent + "%";

  current.textContent = formatTime(audio.currentTime);
});
// Duração total
audio.addEventListener("loadedmetadata", () => {
  duration.textContent = formatTime(audio.duration);
});
// Clicar na barra
barra.addEventListener("click", (e) => {
  const width = barra.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
});
// Formatador de tempo
function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}



const imagens = document.querySelectorAll(".imagens img");

imagens.forEach(img => {
  img.addEventListener("click", () => {

    // remove efeito das outras
    imagens.forEach(i => i.classList.remove("ativo"));

    // adiciona na clicada
    img.classList.add("ativo");

    // efeito temporário (opcional)
    setTimeout(() => {
      img.classList.remove("ativo");
    }, 1200);

  });
});





// PAGINA de homenagem - MODAL PLAYER


const portais = document.querySelectorAll(".portal");
const modal = document.getElementById("modal");
const video = document.getElementById("videoPlayer");

portais.forEach(portal => {
  portal.addEventListener("click", () => {
    const src = portal.getAttribute("data-video");
    video.src = src;
    modal.style.display = "flex";
    video.play();
  });
});
// Fechar ao clicar fora
modal.addEventListener("click", () => {
  modal.style.display = "none";
  video.pause();
});

