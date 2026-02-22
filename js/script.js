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









// for services card js read more btn
// Select all Read More buttons
const readMoreButtons = document.querySelectorAll(".card .btn");

readMoreButtons.forEach((button) => {

  button.addEventListener("click", function (event) {

    // Prevent any parent click conflict
    event.stopPropagation();
    event.preventDefault();

    // Get link from href
    const pageLink = this.getAttribute("href");

    // Open the page
    window.location.href = pageLink;

  });

});


// Also make whole card clickable (Professional Feature 🔥)
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", function () {

    const link = this.querySelector(".btn").getAttribute("href");
    window.location.href = link;

  });
});



document.getElementById("phoneBtn").addEventListener("click", function() {

    // check if desktop
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
        alert("Call us at: +91 82333 54075");
    }

});






/* VIDEO PLAY IN SAME PLACE */

/* ================= VIDEO CONTROL ================= */

const playBtn = document.getElementById("playBtn");
const thumb = document.getElementById("thumb");
const video = document.getElementById("serviceVideo");
const closeBtn = document.getElementById("videoClose");

playBtn.addEventListener("click", () => {

    thumb.style.display = "none";
    playBtn.style.display = "none";
    video.style.display = "block";
    closeBtn.style.display = "flex";

    video.currentTime = 0;
    video.play();
});

closeBtn.addEventListener("click", () => {

    video.pause();
    video.currentTime = 0;

    video.style.display = "none";
    thumb.style.display = "block";
    playBtn.style.display = "flex";
    closeBtn.style.display = "none";
});



/* ================= COUNTER ANIMATION ================= */

const counters = document.querySelectorAll(".counter");

function startCounting(counter){

    const target = +counter.getAttribute("data-target");
    let count = 0;

    /* animation speed auto adjust */
    const increment = target / 180;

    const update = () => {

        count += increment;

        if(count < target){
            counter.innerText = Math.floor(count);
            requestAnimationFrame(update);
        }
        else{

            /* number formatting */
            if(target >= 10000){
                counter.innerText = Math.floor(target/1000) + "K+";
            }
            else if(target >= 1000){
                counter.innerText = target.toLocaleString() + "+";
            }
            else{
                counter.innerText = target + "+";
            }
        }
    };

    update();
}


/* ================= SCROLL DETECTION (PRO METHOD) ================= */

const observerr = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            counters.forEach(counter=>{
                startCounting(counter);
            });

            observerr.disconnect(); // run only once
        }

    });

},{ threshold:0.4 });

observerr.observe(document.querySelector(".stats-container"));














// 2nd video
// 2nd video
const playBt = document.getElementById("playVideoo");
const videoBoxx = document.getElementById("videoBoxx");
const closeBt = document.getElementById("closeVideoo");
const videoo = document.getElementById("expertVideoo");

// Play video
playBt.addEventListener("click", () => {
    videoBoxx.style.display = "flex";
    playBt.style.display = "none";
    videoo.play();
});

// Close video
closeBt.addEventListener("click", () => {
    videoo.pause();
    videoo.currentTime = 0;
    videoBoxx.style.display = "none";
    playBt.style.display = "flex";
});









// what your customers say slider(for review section)

const track = document.querySelector(".review-track");
let x = 0;
let start = false;

function slide() {
  x -= 0.4;

  if (Math.abs(x) >= track.scrollWidth / 2) {
    x = 0;
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(slide);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !start) {
        start = true;
        slide();
      }
    });
  },
  { threshold: 0.3 },
);

observer.observe(document.querySelector(".reviews-section"));

// FAQ SECTION
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    // Close all
    faqItems.forEach((i) => {
      if (i !== item) {
        i.classList.remove("active");
      }
    });

    // Toggle current
    item.classList.toggle("active");
  });
});

// for logo moving  slider in the footer part
/* ===== Infinite Logo Slider Clone Script ===== */

const tracks = document.querySelectorAll(".logo-track");

tracks.forEach(track => {

    const logos = Array.from(track.children);

    // duplicate all logos
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

});












// contact form to whatsapp and location map
document.getElementById("whatsappForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    // WhatsApp number
    let whatsappNumber = "918233354075";

    let finalMessage =
`New Booking Enquiry

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`;

    let encodedMessage = encodeURIComponent(finalMessage);

    let url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
});

