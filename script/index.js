


 const carrossel = document.querySelector(".carrossel");

  
function abrirNavegacao() {

  carrossel.classList.toggle("translate-y-[20rem]");
  carrossel.classList.remove("lg:translate-y-[20rem]")

}

function abrirNavegacaoCompras(){
  carrossel.classList.toggle("translate-y-[-15rem]");
  carrossel.classList.remove("lg:translate-y-[20rem]")
}

const slides = document.getElementById('slides');
const totalSlides = slides.children.length; // Corrigido nome
let index = 0; // Precisa ser let

function mostrarSlide(n) {
  // Atualiza o índice conforme o slide desejado
  if (n < 0) index = totalSlides - 1;
  else if (n >= totalSlides) index = 0;
  else index = n;

  // Move os slides usando o índice correto
  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Botão anterior
document.getElementById("btnAnterior").addEventListener("click", () => mostrarSlide(index - 1));
// Botão próximo
document.getElementById("btnProximo").addEventListener("click", () => mostrarSlide(index + 1));

// Auto-play
setInterval(() => {
  mostrarSlide(index + 1);
}, 6000);





