let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let index = 0;

function showSlide(i){
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
}

next.onclick = () => {
    index = (index + 1) % slides.length;
    showSlide(index);
};

prev.onclick = () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
};

dots.forEach((dot,i)=>{
    dot.onclick = ()=>{
        index = i;
        showSlide(index);
    };
});

setInterval(()=>{
    index = (index + 1) % slides.length;
    showSlide(index);
},5000);

window.addEventListener("scroll",()=>{
    document.querySelectorAll(".reveal").forEach(el=>{
        if(el.getBoundingClientRect().top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});