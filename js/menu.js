document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("nav ul");

  if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
      menu.classList.toggle("open");
    });
  }
});

(function() {
    emailjs.init("YwHvTOATlxedlF5iw"); // από EmailJS
})();

document.getElementById("contact-form")
    .addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_s7q4sor",   // π.χ. service_xxx
            "template_uk0dvpv",  // π.χ. template_xxx
            this
        ).then(
            () => {
                alert("Το μήνυμα στάλθηκε επιτυχώς.");
                this.reset();
            },
            (error) => {
                alert("Παρουσιάστηκε σφάλμα. Δοκιμάστε ξανά.");
                console.error(error);
            }
        );
    });