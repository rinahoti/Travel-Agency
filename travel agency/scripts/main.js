document.addEventListener("DOMContentLoaded", () => {
    console.log("Main JS loaded");
  
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
      contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
  
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
  
        
        const contactData = {
          name: name,
          email: email,
          message: message,
          timestamp: new Date().toISOString()
        };
  
        
        let contacts = [];
        if (localStorage.getItem("contacts")) {
          contacts = JSON.parse(localStorage.getItem("contacts"));
        }
        contacts.push(contactData);
        localStorage.setItem("contacts", JSON.stringify(contacts));
  
        alert("Faleminderit për kontaktin! Do t'ju përgjigjemi sa më shpejt të jetë e mundur.");
        contactForm.reset();
      });
    }
  });
  