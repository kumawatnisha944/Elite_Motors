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
















// ===== Scroll Reveal Animation =====

const revealImage = document.querySelector(".reveal-img");

function revealOnScroll(){
    const windowHeight = window.innerHeight;
    const revealTop = revealImage.getBoundingClientRect().top;
    const revealPoint = 120;

    if(revealTop < windowHeight - revealPoint){
        revealImage.classList.add("active");
    }
}

window.addEventListener("scroll", revealOnScroll);








// Read more pop up cards js

const modal = document.getElementById("modalBox");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.getElementById("closeModal");

function openModal(card){

    modal.style.display = "flex";

    // CARD 1 CONTENT
    if(card === 1){
        modalBody.innerHTML = `
        <h2>Expert Technicians</h2>

        <p>Elite Motors is the best luxury car service centre in Jaipur that has skilled and expert technicians who have an excellent knowledge of motor technology and specialise in your make of vehicle. Our team strives to work tirelessly on your car to give you the peace of mind while you stay back and relax.</p>

        <p>Our professionals have brilliant practical skills and the ability to solve any car problem, whether it is minor or major. We guarantee flawless service of your car along with a host of additional benefits.</p>

        <h4>Specially Trained</h4>
        <p>Our expert technicians have received training from the manufacturers of luxury vehicles and provide additional expertise while servicing. They quickly diagnose issues and repair your premium car efficiently.</p>

        <h4>Experience</h4>
        <p>Our specialty mechanics have plenty of experience with your brand. They understand the practices of luxury car manufacturers, making maintenance easier.</p>

        <h4>Special Equipment</h4>
        <p>Our mechanics are well equipped with proper tools and equipment required for repair and maintenance.</p>

        <h4>Access to Rare Parts</h4>
        <p>We have access to rare luxury car parts that may not be available generally and provide proper repair with trained mechanics.</p>

        <h4>Professionalism</h4>
        <p>Our certified technicians provide high-quality customer service and the utmost professionalism.</p>
        `;
    }

    // CARD 2 CONTENT
    if(card === 2){
        modalBody.innerHTML = `
        <h2>Why Choose Elite Motors</h2>

        <p>Elite Motors provides best in class service for premium cars with VIP care and service warranty.</p>

        <h4>Reasons for choosing us</h4>
        <p>Latest diagnostic scan tools, genuine spare parts, full mechanical service, transparency and no hidden cost.</p>

        <h4>Transparency</h4>
        <p>Every work is done with high-tech equipments and complete transparency ensuring your car is safe.</p>

        <h4>Skilled Manpower</h4>
        <p>Experienced workers capable of solving all maintenance problems.</p>

        <h4>Genuine Spares</h4>
        <p>We only use genuine branded spare parts with warranty.</p>

        <h4>Well Equipped</h4>
        <p>Workshop equipped with state-of-the-art equipments.</p>

        <h4>Affordability</h4>
        <p>Affordable range of services for customer satisfaction.</p>

        <h4>Pick & Drop Facility</h4>
        <p>Doorstep car service with pick and drop facility.</p>
        `;
    }

    // CARD 3 CONTENT
    if(card === 3){
        modalBody.innerHTML = `
        <h2>Premium Car Service</h2>

        <p>Elite Motors provides top quality premium auto repair and maintenance service with latest machinery.</p>

        <p>Our qualified mechanics use advanced automotive technology and diagnostic equipments to repair high-end vehicles.</p>

        <p>We offer general servicing, paint jobs, body repair and complete car maintenance solutions under one roof.</p>

        <p>We provide mechanical, electrical and technical services using advanced tools ensuring your luxury car is in safe hands.</p>
        `;
    }
}

// close modal
closeBtn.onclick = function(){
    modal.style.display = "none";
}

// click outside close
window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
}
