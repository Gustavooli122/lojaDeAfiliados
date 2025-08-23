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

        const dropdownBtn = document.getElementById("dropdownBtn");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownValue = document.getElementById("dropdownValue");

    // Alterna menu ao clicar no botão
    dropdownBtn.addEventListener("click", () => {
      dropdownMenu.classList.toggle("hidden");
    });

    // Fecha o menu e seleciona o item
    dropdownMenu.querySelectorAll("li").forEach(option => {
      option.addEventListener("click", () => {
        dropdownValue.textContent = option.textContent; // altera texto do botão
        dropdownMenu.classList.add("hidden"); // fecha menu
      });
    });

    // Fecha se clicar fora
    document.addEventListener("click", (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.add("hidden");
      }
    });
