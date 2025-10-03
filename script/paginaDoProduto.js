

    const params = new URLSearchParams(window.location.search);
    const produtoId = parseInt(params.get("id"));
    const produtoAtual = produtos.find((p)=>p.id === produtoId)

    const relacionados = produtos.filter((p)=>p.categoria === produtoAtual.categoria && p.id !== produtoAtual.id);
    const produtoCompleto = [produtoAtual]; // transforma em array para poder usar forEach


    const produtoRelacionados = document.querySelector(".produtosRelacionados");
    
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
      <h2 class="text-sm sm:text-base font-medium leading-tight">${produto.nome}</h2>
        <a href="produto.html?id=${produto.id}">
     <button class="bg-[#0d2f42] text-gray-200 text-xs sm:text-sm md:text-base px-2 sm:py-2 sm:px-2 py-1 mt-4 rounded hover:bg-[#123f59] w-full">
        Ver mais
      </button>
    </a> 
    </div>
  </article>`;

  
  produtoRelacionados.innerHTML += card;
    })

  
      
  let isDown = false;    // verifica se está clicado
let comecoX;            // posição inicial do mouse/toque
let scrollLeft;        // posição inicial do scroll


const cardDeInformacoes = document.querySelector(".paginaProdutos");
    
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    produtoCompleto.forEach(produto =>{
      const nosFavoritos = favoritos.some(f => f.id == produto.id);

       const card2 = `
      <section class= "h-full md:h-[90%] lg:h-full">
       <figure class="flex justify-center">
  <img id="imgPrincipal" src="${produto.imagem}" alt="Produto esportivo principal" class= "object-contain">
  <figcaption class="sr-only ">Imagem principal do produto</figcaption>
</figure>
<!-- Galeria de imagens (carrossel) -->
<section class="relative flex items-center w-full overflow-hidden rounded-lg" aria-label="Galeria de imagens do produto">
  
  <!-- Container dos slides -->
  <section>
  <div id="slides" class="flex w-full flex-row transition-transform mt-10 items-center" role="region" aria-roledescription="carrossel">
    
  </div>

  <!-- Botões -->
  <button id="prev" class="absolute left-0 top-[50%] bg-opacity-50 text-black rounded-full text-2xl sm:text-2xl md:text-3xl" aria-label="Imagem anterior">
    &#10094;
  </button>
  <button id="next" class="absolute right-0 top-[50%] bg-opacity-50 text-black rounded-full  text-2xl sm:text-2xl md:text-3xl" aria-label="Próxima imagem">
    &#10095;
  </button></section>
</section></section>

    
        <section class="bg-white w-full h-full lg:h-full text-gray-700 px-5 py-7 md:h-[90%] lg:pt-5 flex flex-col lg:my-0 my-10 sm:px-10">
  <!-- Cabeçalho do produto -->
  
<header>
    <h1 class="text-3xl sm:text-4xl font-[300]">${produto.nome}</h1> 
   
    <p class="preco text-xl sm:text-2xl text-gray-700 my-3" aria-label="Preço do produto">R$${produto.preco}</p>
  </header>

  <!-- Avaliação -->
   <section aria-label="Avaliação do produto" class="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-3 sm:gap-5 md:gap-0 my-3 sm:my-4 sm:items-center">
    <ul class="flex gap-2 md:flex-wrap md:w-[60%] sm:gap-3" role="list" aria-label="Estrelas da avaliação">
      ${gerarEstrelas(produto.rating)}
    </ul>
    <p class="text-lg">Avaliação <strong>4,8</strong></p>
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

<section class="flex gap-2 sm:gap-2 flex-col sm:flex-row md:flex-col lg:flex-row my-3 sm:justify-between w-full sm:px-0">
  <a href="#" aria-label="Link do produto" 
     class="bg-[#0b2c57d5] hover:bg-[#238a48] text-white py-2 px-3 rounded-[4px] text-xl w-auto text-center sm:w-full">
     <button class="p-0 m-0">Comprar agora</button>
  </a>
  <button data-id="${produto.id}" class="bg-[#2ea55cd5] btnFavoritos hover:bg-[#238a48] text-white py-2 px-3 rounded text-[18px] w-auto sm:w-full">
          <i class="fa-regular fa-heart mx-2 iconeFavoritoProduto"></i>
          <span class="textoBtnFavoritos">${nosFavoritos ? "Remover dos favoritos" : "Adicionar favorito"}</span>
        </button>


</section></section>`;


 cardDeInformacoes.innerHTML += card2;
const slides = document.getElementById('slides');
const botaoAntes = document.getElementById('prev');
const botaoDepois = document.getElementById('next');
const imgs = produtoAtual.outrasImg;

// Limpa o container antes de adicionar
slides.innerHTML = "";

// Loop para criar slides de até 3 imagens cada
for (let i = 0; i < imgs.length; i += 3) {
  // Pega até 3 imagens por vez
  const slideImgs = imgs.slice(i, i + 3)
    .map(src => `<img src="${src}" alt="Produto ângulo lateral" class="w-[23%] object-cover outrasImg">`)
    .join('');

  // Adiciona o slide ao carrossel
  slides.innerHTML += `
    <div class="w-full flex flex-shrink-0 justify-center flex-row gap-4" role="group" aria-label="Slide ${i/3 + 1} de ${Math.ceil(imgs.length/3)}">
      ${slideImgs}
    </div>
  `;
}
if(imgs.length <= 3){
  botaoAntes.classList.add("hidden")
  botaoDepois.classList.add("hidden")
}
    adicionarEventosFavoritos();
    })
  



function renderizarCard(lista){
  
 const card = lista.map(produto =>
     `<article class="bg-white pb-3 flex flex-col justify-between rounded-md shadow-md shadow-slate-600">
    <a href="produto.html?id=${produto.id}">
      <img src="${produto.imagem}" alt="img-produto-card" 
           class="w-full   rounded-t-md">
    </a>
  
    <div class="mx-2 mt-2"> 
     <div class="flex flex-col  sm:justify-between lg:flex-row md:flex-col sm:flex-row lg:items-center md:items-start sm:items-center items-start lg:justify-between mt-2">
      <ul id = "rating" class="flex gap-1">
    ${gerarEstrelas(produto.rating)}
      </ul>
      <p class="text-gray-400  lg:text-base md:text-sm sm:text-xs text-sm">R$ ${produto.preco.toFixed(2)}</p>
    </div>
      <h2 class="text-sm sm:text-base font-medium leading-tight">${produto.nome}</h2>
        <a href="produto.html?id=${produto.id}">
     <button  class="bg-[#0d2f42] text-gray-200 text-xs sm:text-sm md:text-base px-2 sm:py-2 sm:px-2 py-1 mt-4 rounded hover:bg-[#123f59] w-full">
        Ver mais
      </button>
    </a> 
    </div>
  </article>`
).join(""); container.innerHTML = card;}

    const btnFavoritos = document.getElementById("btnFavoritos");

    const iconeFavoritosContorno = document.querySelector(".iconeFavoritoProduto");
    const containerProdutosFavoritos = document.querySelector(".paginaProdutosFavoritos")

// --- FUNÇÃO FAVORITOS ---
function adicionarEventosFavoritos() {
  const btns = document.querySelectorAll(".btnFavoritos");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const produtoId = btn.dataset.id;
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      const produto = produtos.find((p) => p.id == produtoId);
      const existe = favoritos.some((f) => f.id == produtoId);

      if (!existe) {
        favoritos.push(produto);
      } else {
        favoritos = favoritos.filter((f) => f.id != produtoId);
      }

      localStorage.setItem("favoritos", JSON.stringify(favoritos));

      // Atualiza texto do botão
      const textoBtn = btn.querySelector(".textoBtnFavoritos");
      textoBtn.textContent = existe
        ? "Adicionar favorito"
        : "Remover dos favoritos";
        renderizarNumerosFavoritos()
    });
  });
}



    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;
    let index = 0;
    const botaoAntes = document.getElementById('prev');
    const botaoDepois = document.getElementById('next');

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

     botaoAntes.addEventListener('click', () => showSlide(index - 1));
    // Botão "próximo": mostra o próximo slide ao clicar
     botaoDepois.addEventListener('click', () => showSlide(index + 1));

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

    const imgPrincipal = document.getElementById("imgPrincipal")
   const carrosselDeImgs = document.querySelectorAll(".outrasImg")

   carrosselDeImgs.forEach((imgs)=>{
    imgs.addEventListener("click",()=>{
       let imgAtual = imgs.getAttribute("src");
       imgPrincipal.setAttribute("src", imgAtual)

    })
   }) 

    const carrosselProdutos = document.querySelector(".carrosselProdutos");
 function abrirCarrosselProdutos() {

  carrosselProdutos.classList.toggle("translate-y-[-10rem]");
  carrosselProdutos.classList.toggle("lg:translate-y-0");


}

   



