// js/main.js

document.addEventListener('DOMContentLoaded', function() {
    const mainNavbar = document.getElementById('main-navbar');

    // Funzione per controllare lo scroll e applicare/rimuovere classi
    function checkScroll() {
        if (window.scrollY > 50) { // Aggiungi la classe 'scrolled' dopo 50px di scroll
            mainNavbar.classList.add('navbar-scrolled');
        } else {
            mainNavbar.classList.remove('navbar-scrolled');
        }
    }

    // Aggiungi un event listener per lo scroll
    window.addEventListener('scroll', checkScroll);

    // Esegui la funzione all'avvio per il caso di pagina già scrollata
    checkScroll();

    // Gestione dello scroll-spy (per evidenziare la sezione corrente nella navbar)
    
});