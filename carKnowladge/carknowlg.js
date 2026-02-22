/* mobile menu */
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = ()=>{
  mobileMenu.classList.toggle("active");
};

/* desktop mega menu */
const desktopServiceBtn = document.getElementById("desktopServiceBtn");
const megaMenu = document.getElementById("megaMenu");

desktopServiceBtn.onclick = (e)=>{
  e.preventDefault();
  megaMenu.classList.toggle("active");
};

/* mobile services */
const mobileServiceBtn = document.getElementById("mobileServiceBtn");
const mobileServices = document.getElementById("mobileServices");

mobileServiceBtn.onclick = (e)=>{
  e.preventDefault();
  mobileServices.classList.toggle("active");
};
