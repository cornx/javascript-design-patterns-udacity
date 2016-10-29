// cat clicker v2.0
var macka1 = document.querySelector(".macka1"),
    macka2 = document.querySelector(".macka2"),
    counterMacka1 = document.querySelector("#macka1"),
    counterMacka2 = document.querySelector("#macka2"),
    macka1Ime = document.querySelector("#macka1-ime"),
    macka2Ime = document.querySelector("#macka2-ime"),
    n1 = 0,
    n2 = 0;

// upisivanje imena pojedina mačke
macka1Ime.innerHTML = "Tom";
macka2Ime.innerHTML = "Maška Šopojiva";

// brojač klikova

macka1.addEventListener("click", function() {
    n1++;
    counterMacka1.innerHTML = n1;
});
macka2.addEventListener("click", function() {
    n2++;
    counterMacka2.innerHTML = n2;
});