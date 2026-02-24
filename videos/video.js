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
  window.location.href = "/tel:+918233354075";
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

const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => {
  lightbox.style.display = "none";
};

lightbox.onclick = (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = "none";
  }
};

document.getElementById("phoneBtn").addEventListener("click", function () {
  // check if desktop
  if (!/Mobi|Android/i.test(navigator.userAgent)) {
    alert("Call us at: +91 82333 54075");
  }
});
