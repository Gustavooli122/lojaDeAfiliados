  document.querySelectorAll(".accordion-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const icon = btn.querySelector("i");
        const content = btn.nextElementSibling;
        if(content.style.maxHeight && content.style.maxHeight !== "0px"){
             content.style.maxHeight = "0px";
             
             icon.classList.add("rotate-none");
              icon.classList.remove("rotate-180");
        }
         else{
          content.style.maxHeight = content.scrollHeight + "px";
          icon.classList.remove("rotate-none");
          icon.classList.add("rotate-180");

         }
      });
    });

        const dropdownBtn = document.querySelectorAll(".dropdownBtn");
    const dropdownMenu = document.querySelectorAll(".dropdownMenu");
    const dropdownValue = document.querySelectorAll(".dropdownValue");

    // Alterna menu ao clicar no botão
    dropdownBtn.forEach(botao =>{
        botao.addEventListener("click", () => {
          dropdownMenu.forEach(menuBtn =>{
            menuBtn.classList.toggle("hidden");
          })
      
    })
  
    });

   dropdownMenu.forEach(menubtn => {
    menubtn.querySelectorAll("li").forEach(option =>{
      option.addEventListener("click", () => {
        dropdownValue.forEach(valor => valor.textContent = option.textContent)// altera texto do botão
        dropdownMenu.forEach(menubtn => menubtn.classList.add("hidden")) // fecha menu 
      });
    })
      
      
    });

    // Fecha se clicar fora
    document.addEventListener("click", (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
      }
    }); 

    const carrosselCompras = document.querySelector(".carrosselCompras");
 function abrirCarrosselCompras() {

  carrosselCompras.classList.toggle("translate-y-[-11rem]");
  carrosselCompras.classList.remove("lg:translate-y-[-0.5rem]");
  console.log("funçao esta sendo chamada")

}
   







