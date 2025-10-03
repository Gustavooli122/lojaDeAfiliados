/* favoritos.js - versão corrigida e comentada */

document.addEventListener("DOMContentLoaded", () => {
  const containerFavoritos = document.querySelector(".paginaProdutosFavoritos");
  const btnRemoverCategoria = document.querySelector(".btnRemoverCategoria");
  const menuRemoverCategoria = document.querySelector(".menuRemoverCategoria");

  // Função que renderiza os cards de favoritos
  function renderizarFavoritos(){
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (favoritos.length === 0) {
      containerFavoritos.innerHTML = "<p class='text-gray-500 col-span-full text-center'>Nenhum favorito adicionado.</p>";
      return;
    }

    containerFavoritos.innerHTML = favoritos.map((produto) =>
      `<article class="bg-white pb-3 flex flex-col justify-between rounded-md shadow-md shadow-slate-600">
        <a href="produto.html?id=${produto.id}">
          <img src="${produto.imagem}" alt="img-produto-card" class="w-full rounded-t-md">
        </a>
        <div class="mx-2 mt-2">
          <div class="flex flex-col sm:justify-between lg:flex-row md:flex-col sm:flex-row lg:items-center md:items-start sm:items-center items-start lg:justify-between mt-2">
            <ul id="rating" class="flex gap-1">
              ${gerarEstrelas(produto.rating)}
            </ul>
            <p class="text-gray-400">R$ ${produto.preco.toFixed(2)}</p>
          </div>
          <h2 class="text-sm sm:text-base font-medium leading-tight">${produto.nome}</h2>
          <section>
            <a href="produto.html?id=${produto.id}">
              <button class="bg-[#0d2f42] text-gray-200 text-xs sm:text-sm md:text-base px-2 sm:py-3 sm:px-4 py-2 mt-4 rounded hover:bg-[#123f59] w-full">Ver mais</button>
            </a>
            <button data-id="${produto.id}" class="btnRemoverFavorito hover:bg-[#afafaf] text-gray-800 font-[600] text-base sm:text-sm md:text-base px-2 sm:py-4 sm:px-2 py-2 mt-2 rounded w-full">Remover</button>
          </section>
        </div>
      </article>`
    ).join("");

    // ====== eventos para remover por ID (um card) ======
    const btns = containerFavoritos.querySelectorAll(".btnRemoverFavorito");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
        const id = btn.dataset.id;
        // comparar como string para evitar problema number vs string
        favoritos = favoritos.filter(f => String(f.id) !== String(id));
        localStorage.setItem("favoritos", JSON.stringify(favoritos));
        renderizarFavoritos();
        
      });
    });
  }



  function limparContainer(){
    containerFavoritos.innerHTML = "";
  }

  // Toggle do menu "Remover por categoria"
  if (btnRemoverCategoria) {
    btnRemoverCategoria.addEventListener("click", () => {
      if (menuRemoverCategoria.classList.contains("hidden")) {
        menuRemoverCategoria.classList.remove("hidden");
        menuRemoverCategoria.classList.add("flex");
      } else {
        menuRemoverCategoria.classList.remove("flex");
        menuRemoverCategoria.classList.add("hidden");
      }
    });
  }

  // ====== listeners dos botões de categoria ======
  // Seleciono múltiplos formatos de atributo para compatibilidade:
  const btnsCategoria = document.querySelectorAll("[data-classe], [data-classe-remove], [data-classeRemove]");

  btnsCategoria.forEach(btn => {
    btn.addEventListener("click", (e) => {
      // evita comportamento padrão se por acaso for <a>
      if (e && typeof e.preventDefault === "function") e.preventDefault();

      // lê o atributo no formato que existir
      const categoriaRaw = btn.getAttribute("data-classe") || btn.getAttribute("data-classe-remove") || btn.getAttribute("data-classeRemove");
      if (!categoriaRaw) {
        console.warn("Botão de remover por categoria sem atributo de categoria:", btn);
        return;
      }

      // normaliza (lowercase + trim) para evitar problemas com maiúsc/minúsc
      const categoria = categoriaRaw.toString().toLowerCase().trim();

      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

      // filtro comparando de forma case-insensitive
      const novos = favoritos.filter(f => {
        const catProduto = (f.categoria || "").toString().toLowerCase().trim();
        return catProduto !== categoria; // mantém apenas os que NÃO pertencem à categoria
      });

      localStorage.setItem("favoritos", JSON.stringify(novos));

      // Atualiza UI
      limparContainer();
      renderizarFavoritos();

      console.log(`Removidos favoritos da categoria '${categoria}': antes=${favoritos.length} agora=${novos.length}`);
    });
  });

  // Listener para "Remover todos" se existir botão com essa classe
  const btnRemoverTodos = document.querySelector(".categoriasRemoverTodos");
  if (btnRemoverTodos) {
    btnRemoverTodos.addEventListener("click", (e) => {
      if (e && typeof e.preventDefault === "function") e.preventDefault();
      localStorage.setItem("favoritos", JSON.stringify([]));
      limparContainer();
      renderizarFavoritos();
      console.log("Todos os favoritos removidos");
    });
  }

  // Inicializa ao carregar
  renderizarFavoritos();


  // Função de abertura do carrossel (se estiver em outro arquivo, ignore aqui)
  const carrosselProdutosFavoritos = document.querySelector(".carrosselProdutosFavoritos");
  window.abrirCarrosselProdutosFavoritos = function abrirCarrosselProdutosFavoritos() {
    if (carrosselProdutosFavoritos) {
      carrosselProdutosFavoritos.classList.toggle("translate-y-[-10rem]");
      console.log("carrossel funcionando");
    }
  };
});


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


