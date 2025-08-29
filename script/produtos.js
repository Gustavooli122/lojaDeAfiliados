


const produtos = [
  {
    id: 1,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 2400.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
   {
    id: 2,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 3,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 4,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 5,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 6,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 7,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 4 // até 5
  },
    {
    id: 8,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 2 // até 5
  },
    {
    id: 9,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 3 // até 5
  },
    {
    id: 10,
    nome: "Peso de academia",
    descricao: "Produto resistente para treinos intensos.",
    preco: 240.00,
    imagem: "../img/feature_prod_01.jpg",
    rating: 5 // até 5
  },

];

const container = document.querySelector(".containerShop");
produtos.forEach(produto =>{
    const card = `<article class="bg-white pb-3 flex flex-col rounded-md shadow">
    <a href="#">
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
      <h2 class="text-sm font-medium leading-tight">${produto.descricao}</h2>
      <button class="bg-[#0d2f42] text-gray-200 text-xs px-2 py-1 mt-2 rounded hover:bg-[#123f59] w-full">
        <i class="fa-solid fa-cart-shopping text-white mr-1"></i>
        Carrinho
      </button>
    </div>
  </article>`;

  container.innerHTML += card;
})
// Função para renderizar as estrelas
function gerarEstrelas(rating) {
  let estrelas = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      estrelas += `<i class="fa fa-star text-yellow-500  lg:text-xs md:text-xs sm:text-xs text-sm my-2"></i>`;
    } else {
      estrelas += `<i class="fa fa-star text-gray-300 lg:text-xs md:text-xs sm:text-xs text-sm my-2"></i>`;
    }
  }
  return estrelas;
}







