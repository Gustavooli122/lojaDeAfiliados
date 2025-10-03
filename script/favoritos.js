const containerFavoritos = document.querySelector(".paginaProdutosFavoritos");


function renderizarFavoritos(){
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  
  if (favoritos.length === 0) {
    containerFavoritos.innerHTML = "<p class='text-gray-500 col-span-full text-center'>Nenhum favorito adicionado.</p>";
    return;
  }
 containerFavoritos.innerHTML = favoritos.map((produto) =>
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
      <section>
        <a href="produto.html?id=${produto.id}">
     <button  class="bg-[#0d2f42] text-gray-200 text-xs sm:text-sm md:text-base px-2 sm:py-2 sm:px-2 py-1 mt-4 rounded hover:bg-[#123f59] w-full">
        Ver mais
      </button>
    </a>   
     <button data-id = "${produto.id}" class="btnRemoverFavorito bg-[#9b3939] text-gray-100 text-xs sm:text-sm md:text-base px-2 sm:py-2 sm:px-2 py-1 mt-4 rounded w-full">
       Remover
      </button></section>
    </div>
  </article>`
  
).join(""); 

// Eventos para remover favoritos
  const btns = document.querySelectorAll(".btnRemoverFavorito");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
      const id = btn.dataset.id;
      favoritos = favoritos.filter(f => f.id != id);

      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      renderizarFavoritos();
     
    });
  });


}

document.addEventListener("DOMContentLoaded", renderizarFavoritos);

    const carrosselProdutosFavoritos = document.querySelector(".carrosselProdutosFavoritos");
 function abrirCarrosselProdutosFavoritos() {
  carrosselProdutosFavoritos.classList.toggle("translate-y-[-10rem]");
  console.log("carrossel funcionando")
}

 const numeroFavoritos = document.querySelectorAll(".numeroFavoritos");
function renderizarNumerosFavoritos(){
   let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  numeroFavoritos.forEach(num =>{
      num.textContent = favoritos.length;

  })
  
}


// Atualiza sempre que a página carregar
window.addEventListener("load", renderizarNumerosFavoritos);
window.addEventListener("pageshow", renderizarNumerosFavoritos);

   


