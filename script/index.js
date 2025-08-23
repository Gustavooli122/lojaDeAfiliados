document.getElementById("btnAnterior").addEventListener("click", () => mostrarSlide(index - 1));
// Botão próximo
document.getElementById("btnProximo").addEventListener("click", () => mostrarSlide(index + 1));

// Auto-play
setInterval(() => {
  mostrarSlide(index + 1);
}, 6000);


