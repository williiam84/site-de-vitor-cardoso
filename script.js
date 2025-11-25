document.addEventListener("DOMContentLoaded", () => {

    // Botão do menu (mobile)
    const menuBtn = document.querySelector(".menu-btn");
    const nav = document.querySelector("header nav");

    menuBtn.addEventListener("click", () => {
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });

    // Pega TODAS as seções que devem ser trocadas
    const secoes = document.querySelectorAll("main, section");

    function mostrarSecao(id) {
        // esconde todas as seções
        secoes.forEach(secao => secao.style.display = "none");

        // mostra apenas a escolhida
        const s = document.getElementById(id);
        if (s) s.style.display = "block";

        // fecha o menu (mobile)
        nav.style.display = "none";
    }

    // Quando clicar no menu, troca a seção
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // impede o scroll automático
            const id = link.getAttribute("href").replace("#", "");
            mostrarSecao(id);
        });
    });

    // Exibir a seção inicial ao carregar
    mostrarSecao("inicio");
});
function abrirSecao(secao) {
    document.querySelectorAll("main, section").forEach(s => {
        s.style.display = "none";
    });

    document.getElementById(secao).style.display = "block";
}
function VerPortifolio(){
    const sobremim = document.getElementById("sobremim")
    const inicio = document.getElementById("inicio")
    setTimeout(() =>{
        sobremim.style.display ="flex"
        inicio.style.display = "none"
    }, 1000)
    
}
document.addEventListener("DOMContentLoaded", () => {
    let i = 0;
    const slides = document.querySelectorAll(".carrossel .slide");
    const dots = document.querySelectorAll(".carrossel .dot");

    function mostrarSlide(n) {
        slides.forEach(s => {
            s.classList.remove("ativo");
            s.style.opacity = 0;
            s.style.display = "none";
        });
        dots.forEach(d => d.classList.remove("ativo"));

        i = (n + slides.length) % slides.length;

        slides[i].style.display = "block";
        setTimeout(() => slides[i].style.opacity = 1, 50);
        dots[i].classList.add("ativo");
    }

    // autoplay
    setInterval(() => {
        mostrarSlide(i + 1);
    }, 2000);  // troca a cada 2s

    // clicar nos dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => mostrarSlide(index));
    });

    // mostra o primeiro slide
    mostrarSlide(i);
});
</bod