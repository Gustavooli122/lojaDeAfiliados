const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let index = 0;

    function showSlide(n) {
      // Se o índice for menor que 0, volta para o último slide
      if (n < 0) index = totalSlides - 1; //2
      // Se o índice for maior ou igual ao total, volta para o primeiro slide
      else if (n >= totalSlides) index = 0;
      // Caso contrário, atualiza o índice normalmente
      else index = n;
      // Move os slides usando transform para mostrar o slide correto
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    // Botão "anterior": mostra o slide anterior ao clicar
    document.getElementById('prev').addEventListener('click', () => showSlide(index - 1));
    // Botão "próximo": mostra o próximo slide ao clicar
    document.getElementById('next').addEventListener('click', () => showSlide(index + 1));

    // Auto-play: troca de slide automaticamente a cada 4 segundos
    setInterval(() => showSlide(index + 1), 4000);

    // --- SWIPE NO MOBILE ---
    // Variáveis para armazenar posição inicial e final do toque
    let startX = 0;
    let endX = 0;

    // Detecta início do toque e armazena a posição X
    slides.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    // Detecta fim do toque e armazena a posição X, depois chama handleSwipe
    slides.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    });

    function handleSwipe() {
      // Calcula a diferença entre início e fim do toque
      const diff = startX - endX;
      if (Math.abs(diff) > 50) { // arrasto mínimo
        if (diff > 0) {
          showSlide(index + 1); // arrastou pra esquerda → próximo
        } else {
          showSlide(index - 1); // arrastou pra direita → anterior
        }
      }
    }

    const params = new URLSearchParams(window.location.search);
    const produtoId = parseInt(params.get("id"));
    const produtoAtual = produtos.find((p)=>p.id === produtoId)

    const relacionados = produtos.filter((p)=>p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id);

    const carrossel = document.querySelector(".cardCarrossel");
    
    relacionados.forEach(produto =>{
       const card = `<article class="bg-white pb-3 flex flex-col rounded-md shadow-md shadow-[#949494]">
    <a href="produto.html?id=${produto.id}">
      <img src="${produto.imagem}" alt="img-produto-card" 
           class="w-full object-cover rounded-t-md">
    </a>
    <div class="flex flex-col lg:justify-between md:justify-between sm:justify-between lg:flex-row md:flex-row sm:flex-row lg:items-center md:items-center sm:items-center items-start  mx-2 mt-2">
      <ul id = "rating" class="flex gap-1">
    ${gerarEstrelas(produto.rating)}
      </ul>
      <p class="text-gray-400  lg:text-xs md:text-xs sm:text-xs text-sm">R$ ${produto.preco.toFixed(2)}</p>
    </div>
    <div class="mx-2 mt-2">
      <h2 class="text-sm font-medium leading-tight">${produto.nome}</h2>
      <button class="bg-[#0d2f42] text-gray-200 text-xs px-2 py-1 mt-2 rounded hover:bg-[#123f59] w-full">
        <i class="fa-solid fa-cart-shopping text-white mr-1"></i>
        Carrinho
      </button>
    </div>
  </article>`;

  carrossel.innerHTML += card;
    })

      
  let isDown = false;    // verifica se está clicado
let comecoX;            // posição inicial do mouse/toque
let scrollLeft;        // posição inicial do scroll

// Para PC (mouse)
carrossel.addEventListener("mousedown", (e) => {
  isDown = true;
  carrossel.classList.add("cursor-grabbing");
  comecoX = e.pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});
carrossel.addEventListener("mouseleave", () => {
  isDown = false;
  carrossel.classList.remove("cursor-grabbing");
});
carrossel.addEventListener("mouseup", () => {
  isDown = false;
  carrossel.classList.remove("cursor-grabbing");
});
carrossel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrossel.offsetLeft;
  const walk = (x - comecoX) * 2; // fator de velocidade
  carrossel.scrollLeft = scrollLeft - walk;
});

// Para celular (toque)
carrossel.addEventListener("touchstart", (e) => {
  isDown = true;
 comecoX = e.touches[0].pageX - carrossel.offsetLeft;
  scrollLeft = carrossel.scrollLeft;
});
carrossel.addEventListener("touchend", () => {
  isDown = false;
});
carrossel.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX - carrossel.offsetLeft;
  const walk = (x - comecoX) * 2;
  carrossel.scrollLeft = scrollLeft - walk;
});
