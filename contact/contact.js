/* mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
  mobileMenu.classList.toggle("active");
};

/* desktop mega menu */
const desktopServiceBtn = document.getElementById("desktopServiceBtn");
const megaMenu = document.getElementById("megaMenu");

desktopServiceBtn.onclick = (e) => {
  e.preventDefault();
  megaMenu.classList.toggle("active");
};

/* mobile services */
const mobileServiceBtn = document.getElementById("mobileServiceBtn");
const mobileServices = document.getElementById("mobileServices");

mobileServiceBtn.onclick = (e) => {
  e.preventDefault();
  mobileServices.classList.toggle("active");
};

//contact cards
function makeCall() {
  window.location.href = "tel:+918233354075";
}

function openWhatsApp() {
  let msg = "Hello I want car service today";
  window.open(
    `https://wa.me/918233354075?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

function openLocation() {
  window.open(
    "https://maps.google.com/?q=Elite+Motors+Kanota+Agra+Road+Jaipur",
    "_blank",
  );
}

function openInstagram() {
  window.open("https://instagram.com/", "_blank");
}

// =====for contact part +location=====
document
  .getElementById("whatsappForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    // WhatsApp number
    let whatsappNumber = "918233354075";

    let finalMessage = `New Booking Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    let encodedMessage = encodeURIComponent(finalMessage);

    let url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  });
