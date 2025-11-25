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
// Quando a página termina de carregar
window.addEventListener("load", function() {
    const loading = document.getElementById("loading");
    const conteudo = document.getElementById("conteudo");

    // Oculta o loading após 2,5 segundos
    setTimeout(() => {
        if (loading && conteudo) {
            conteudo.style.display = "block";
            loading.style.display = "none";
        }
    }, 2500); // 2500ms = 2,5 segundos
});

// Função para ver o portfólio
function VerPortifolio(){
    const sobremim = document.getElementById("sobremim");
    const inicio = document.getElementById("inicio");

    setTimeout(() => {
        if (sobremim && inicio) {
            sobremim.style.display = "flex";
            inicio.style.display = "none";
        }
    }, 1000);
}
