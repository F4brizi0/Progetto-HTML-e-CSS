// js/emailjs-config.js

(function() {
    emailjs.init("Xg3mLda3OBPD_Knwa");
})();
window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impedisce il ricaricamento della pagina

            const formStatus = document.getElementById('form-status');
            formStatus.textContent = 'Invio in corso...';
            formStatus.className = ''; // Rimuove classi precedenti (success/error)

            // Invia il form usando EmailJS
            emailjs.sendForm('service_lrpa55n', 'template_y885z7m', this)
                .then(function() {
                    console.log('SUCCESS!');
                    formStatus.textContent = 'Messaggio inviato con successo!';
                    formStatus.className = 'success';
                    contactForm.reset(); // Resetta il form dopo l'invio
                }, function(error) {
                    console.log('FAILED...', error);
                    formStatus.textContent = 'Errore nell\'invio del messaggio. Riprova.';
                    formStatus.className = 'error';
                });
        });
    }
}