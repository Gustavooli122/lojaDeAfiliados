


const produtos = [
  {
    id: 1,
    nome: "Bicicleta azul",
    descricao: "Bicicleta Azul aro 29.",
    preco:950.00,
    imagem: "https://static.netshoes.com.br/produtos/bicicleta-aro-29-krw-aluminio-24-vel-marchas-freio-a-disco-suspensao-dianteira-mountain-bike-x32/08/CGY-0302-108/CGY-0302-108_zoom1.jpg?ts=1745398163&ims=1088x",
     outrasImg: ["../img/feature_prod_02.jpg","../img/feature_prod_03.jpg","../img/feature_prod_01.jpg","../img/feature_prod_03.jpg","../img/feature_prod_02.jpg"],
    rating: 4, // até 5
    categoria:"bicicletas"
  },
   {
    id: 2,
    nome: "Bicicleta branca",
    descricao: "O produto de CategoriaC id 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    preco: 460.00,
    imagem: "https://images.tcdn.com.br/img/img_prod/394779/bicicleta_29_gts_m1_freio_a_disco_21_marchas_shimano_ride_new_g_series_4993_variacao_16043_1_db4f41946fc392eb4eb4d284ddae2822_20250701155948.jpg",
    outrasImg: [],
    rating: 4 , // até 5
    categoria:"bicicletas"
  },
    {
    id: 3,
    nome: "bicicleta amarela",
    descricao: "Produto resistente para treinos intensos.",
    preco: 342.00,
    imagem: "https://http2.mlstatic.com/D_NQ_NP_922021-MLB78734496967_082024-O-bicicleta-aro-29-gta-21v-freio-disco-mecnico-suspenso-bike.webp",
     outrasImg: ["https://http2.mlstatic.com/D_NQ_NP_922021-MLB78734496967_082024-O-bicicleta-aro-29-gta-21v-freio-disco-mecnico-suspenso-bike.webp","https://http2.mlstatic.com/D_NQ_NP_922021-MLB78734496967_082024-O-bicicleta-aro-29-gta-21v-freio-disco-mecnico-suspenso-bike.webp","https://http2.mlstatic.com/D_NQ_NP_922021-MLB78734496967_082024-O-bicicleta-aro-29-gta-21v-freio-disco-mecnico-suspenso-bike.webp","https://http2.mlstatic.com/D_NQ_NP_922021-MLB78734496967_082024-O-bicicleta-aro-29-gta-21v-freio-disco-mecnico-suspenso-bike.webp"],
    rating: 4, // até 5
    categoria:"bicicletas"
  },
    {
    id: 4,
    nome: "Peso de academia categoria B",
    descricao: "Produto resistente para treinos intensos.",
    preco: 893.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 4 , // até 5
    categoria:"relogios"
  },
    {
    id: 5,
    nome: "Peso de academia categoria B",
    descricao: "Produto resistente para treinos intensos.",
    preco: 120.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: [],
    rating: 4 , // até 5
    categoria:"lanternas"
  },
    {
    id: 6,
    nome: "Peso de academia categoriaA id6",
    descricao: "Produto resistente para treinos intensos.",
    preco: 24.00,
    imagem: "../img/feature_prod_03.jpg",
     outrasImg: [],
    rating: 4 , // até 5
    categoria:"cameras"
  },
    {
    id: 7,
    nome: "Peso de academia categoriaA id7",
    descricao: "Produto resistente para treinos intensos.",
    preco: 270.00,
    imagem: "../img/feature_prod_02.jpg",
    outrasImg: [],
    rating: 4 , // até 5
    categoria:"relogios"
  },
    {
    id: 8,
    nome: "Peso de academia categoria C",
    descricao: "Produto resistente para treinos intensos.",
    preco: 650.00,
    imagem: "../img/feature_prod_03.jpg",
     outrasImg: [],
    rating: 2, // até 5
    categoria:"cameras"
  },
    {
    id: 9,
    nome: "Peso de academia categoriaA id9",
    descricao: "Produto resistente para treinos intensos.",
    preco: 40.00,
    imagem: "../img/feature_prod_01.jpg",
    outrasImg: [],
    rating: 3 , // até 5
    categoria:"lanternas"
  },
    {
    id: 10,
    nome: "Peso de academia categoriaA id10",
    descricao: "Produto resistente para treinos intensos.",
    preco: 22.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 5, // até 5
    categoria:"relogios"
  },
   {
    id: 11,
    nome: "Peso de academia categoriaD",
    descricao: "Produto resistente para treinos intensos.",
    preco: 990.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 5, // até 5
    categoria:"relogios"
  },
   {
    id: 12,
    nome: "Peso de academia categoriaD",
    descricao: "Produto resistente para treinos intensos.",
    preco: 2000.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 5, // até 5
    categoria:"relogios"
  },
   {
    id: 13,
    nome: "Peso de academia categoriaD",
    descricao: "Produto resistente para treinos intensos.",
    preco: 222.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 5, // até 5
    categoria:"relogios"
  },
   {
    id: 14,
    nome: "Peso de academia categoriaC",
    descricao: "Produto resistente para treinos intensos.",
    preco: 10.00,
    imagem: "../img/feature_prod_02.jpg",
     outrasImg: [],
    rating: 5, // até 5
    categoria:"relogios"
  },

];

const container = document.querySelector(".containerShop");

function limparContainer(){
  container.innerHTML ="";
}

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
     <button class="bg-[#0d2f42] text-gray-200 text-xs sm:text-sm md:text-base px-2 sm:py-2 sm:px-2 py-1 mt-4 rounded hover:bg-[#123f59] w-full">
        Ver mais
      </button>
    </a> 
    </div>
  </article>`
).join(""); container.innerHTML = card;

if(lista.length === 0){
  container.innerHTML = `<p class ="my-40 mx-auto">Nenhum produto encontrado.</p>`;
  return;
}
}

  renderizarCard(produtos);


const produtosClasses = document.querySelectorAll("[data-classe]").forEach(botao =>
  botao.addEventListener("click",()=>{
    const classe = botao.dataset.classe;
    limparContainer();
    renderizarCard(produtos.filter(e => e.categoria == classe))
     
  } )
)



// Função para renderizar as estrelas
function gerarEstrelas(rating) {
  let estrelas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      estrelas += `<i class="fa fa-star text-yellow-500  md:text-base text-sm my-2 lg:text-lg"></i>`;
    } else {
      estrelas += `<i class="fa fa-star text-gray-300 md:text-base text-sm my-2 lg:text-lg"></i>`;
    }
  }
  return estrelas;
}

const categoriasTodos = document.querySelector(".categoriasTodos");
categoriasTodos.addEventListener("click",()=>{
limparContainer();
renderizarCard(produtos);
})

let precoInputMin = document.querySelector(".minPreco");
let precoInputMax = document.querySelector(".maxPreco");
const btnFiltroPreco = document.querySelector(".filterBtn");

btnFiltroPreco.addEventListener("click",()=>{
  limparContainer()
  const precoMin = parseFloat(precoInputMin.value) || 0;
  const precoMax = parseFloat(precoInputMax.value) || Infinity;
  let cardsFiltradosPreco = produtos.filter(p => p.preco >= precoMin && p.preco <= precoMax);
  renderizarCard(cardsFiltradosPreco)
  console.log("botao esta funcionando")
})

//input de busca

// input de busca
const inputBusca = document.getElementById("inputProcurar");

inputBusca.addEventListener("input", () => {
  limparContainer();
  const termo = inputBusca.value.toLowerCase().trim();

  if (termo === "") {
    // se o input estiver vazio, renderiza todos de novo
    renderizarCard(produtos);
    return;
  }

  const pesquisados = produtos.filter(p => 
    p.nome.toLowerCase().includes(termo) || 
    p.descricao.toLowerCase().includes(termo)
  );

  renderizarCard(pesquisados);
});




