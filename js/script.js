var macka = document.querySelector(".macka"),
    brojac = document.querySelector(".counter"),
    nKlikova = 0;

macka.addEventListener("click", function() {
    nKlikova++;
    brojac.innerHTML = nKlikova;
}, false);