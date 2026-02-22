const questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {
    q.addEventListener("click", () => {

        // sab band
        document.querySelectorAll(".faq-answer").forEach(ans=>{
            if(ans !== q.nextElementSibling){
                ans.style.display="none";
            }
        });

        // current open
        let ans = q.nextElementSibling;
        ans.style.display = (ans.style.display === "block") ? "none" : "block";
    });
});








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





// FAQ ACCORDION

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        // close others
        faqItems.forEach(i => {
            if(i !== item){
                i.classList.remove("active");
            }
        });

        // toggle current
        item.classList.toggle("active");

    });
});
