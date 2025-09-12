

const produtos = [
  {
    id: 1,
    nome: "Produto Teste",
    descricao: "Produto resistente para treinos intensos.",
    preco:950.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["../img/feature_prod_02.jpg","../img/feature_prod_03.jpg","../img/feature_prod_01.jpg","../img/feature_prod_03.jpg","../img/feature_prod_02.jpg"],
    rating: 4, // até 5
    categoria:"A"
  },
   {
    id: 2,
    nome: "Peso de academia categoriaC",
    descricao: "O produto de CategoriaC id 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    outrasImg: ["","","","","","","","",""],
    rating: 4 , // até 5
    categoria:"C"
  },
    {
    id: 3,
    nome: "Peso de academia categoriaA id3",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 4, // até 5
    categoria:"A"
  },
    {
    id: 4,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 4 , // até 5
    categoria:"B"
  },
    {
    id: 5,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 4 , // até 5
    categoria:"B"
  },
    {
    id: 6,
    nome: "Peso de academia categoriaA id6",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 4 , // até 5
    categoria:"A"
  },
    {
    id: 7,
    nome: "Peso de academia categoriaA id7",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 4 , // até 5
    categoria:"A"
  },
    {
    id: 8,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 2, // até 5
    categoria:"C"
  },
    {
    id: 9,
    nome: "Peso de academia categoriaA id9",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 3 , // até 5
    categoria:"A"
  },
    {
    id: 10,
    nome: "Peso de academia categoriaA id10",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
     outrasImg: ["","","","","","","","",""],
    rating: 5, // até 5
    categoria:"A"
  },

];

const container = document.querySelector(".containerShop");
produtos.forEach(produto =>{
    const card = `<article class="bg-white pb-3 flex flex-col rounded-md shadow-md shadow-slate-600">
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

  container.innerHTML += card;
})
// Função para renderizar as estrelas
function gerarEstrelas(rating) {
  let estrelas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      estrelas += `<i class="fa fa-star text-yellow-500  md:text-base text-sm my-2"></i>`;
    } else {
      estrelas += `<i class="fa fa-star text-gray-300 md:text-base text-sm my-2"></i>`;
    }
  }
  return estrelas;
}









