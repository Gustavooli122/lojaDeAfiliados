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
    const produtoCompleto = [produtoAtual]; // transforma em array para poder usar forEach


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
      <a href="produto.html?id=${produto.id}">
     <button class="bg-[#0d2f42] text-gray-200 text-xs px-2 py-1 mt-2 rounded hover:bg-[#123f59] w-full">
        Ver mais
      </button>
    </a> 
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


const cardDeInformacoes = document.querySelector(".cardDeinformacoes");
    
    produtoCompleto.forEach(produto =>{
       const card2 = `<header>
    <h1 class="text-3xl sm:text-4xl font-[300]">${produto.nome}</h1> 
   
    <p class="preco text-xl sm:text-2xl text-gray-700 my-3" aria-label="Preço do produto">$ 25,00</p>
  </header>

  <!-- Avaliação -->
   <section aria-label="Avaliação do produto" class="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-3 sm:gap-5 my-3 sm:my-4 sm:items-center">
    <ul class="flex gap-2 md:flex-wrap md:w-[60%] sm:gap-3" role="list" aria-label="Estrelas da avaliação">
      <li><i class="fa fa-star text-base" style="color: #facc15;" aria-hidden="true"></i></li>
      <li><i class="fa fa-star text-base" style="color: #facc15;" aria-hidden="true"></i></li>
      <li><i class="fa fa-star text-base" style="color: #facc15;" aria-hidden="true"></i></li>
      <li><i class="fa fa-star text-base" style="color: #facc15;" aria-hidden="true"></i></li>
      <li><i class="fa fa-star text-base" style="color: #979797;" aria-hidden="true"></i></li>
    </ul>
    <p class="text-lg">Avaliação <strong>4,8</strong> | 36 comentários</p>
  </section>

  <!-- Detalhes do produto -->
  <dl class="font-medium flex gap-2 my-3">
    <dt><strong>Marca:</strong></dt>
    <dd class="text-gray-500">Fácil de usar</dd>
  </dl>

  <!-- Descrição -->
  <section class="my-3">
    <h2><strong>Descrição:</strong></h2>
    <p class="text-lg">
      ${produto.descricao}
    </p>
  </section>

  <!-- Cor -->
  <section class="flex gap-2 my-3">
    <h2><strong>Cor  disponível:</strong></h2>
    <p class="text-gray-500">Branco / Preto</p>
  </section>

  <!-- Especificações -->
  <section class="flex flex-col gap-2 my-3">
    <h2><strong>Especificações:</strong> </h2>
    <p class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
      Conjunto você está irritado.  
      Ut enim ad minim, dolore magna aliqua.  
      Excepto sint.  
    </p>
  </section>

<section class="flex gap-2 sm:gap-2 flex-col sm:flex-row md:flex-row lg:flex-row my-3 sm:justify-between w-full sm:px-0">
  <a href="#" aria-label="Link do produto" 
     class="bg-[#0b2c57d5] hover:bg-[#238a48] text-white py-2 px-3 rounded-[4px] text-xl w-auto text-center sm:w-full">
     <button class="p-0 m-0">Comprar agora</button>
  </a>
  <button id="btnFavoritos" class="bg-[#2ea55cd5] hover:bg-[#238a48] text-white py-2 px-3 rounded-[4px] text-[18px] w-auto sm:w-full">
  
<i class="fa-regular fa-heart mx-2 sm:mx-0 iconeFavoritoProduto"></i> Adicionar aos favoritos
  </button>


</section>`;

  
 cardDeInformacoes.innerHTML += card2;
    })

    const btnFavoritos = document.getElementById("btnFavoritos");
    const iconeFavoritosContorno = document.querySelector(".iconeFavoritoProduto");

    btnFavoritos.addEventListener("click", () => {
      if(document.querySelector(".fa-regular")){ 
      iconeFavoritosContorno.classList.remove("fa-regular");
      iconeFavoritosContorno.classList.add("fa-solid");}
      else{
      iconeFavoritosContorno.classList.add("fa-regular");
      iconeFavoritosContorno.classList.remove("fa-solid");
      }
    });



