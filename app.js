const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title")
const sneaker = document.querySelector(".sneaker img")
const conhecer_mais = document.querySelector(".conhecer_mais button")
const description = document.querySelector(".info h3")
const tecnologias = document.querySelector(".tecnologias")

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth/2 - e.pageX)/10; 
    let yAxis = (window.innerHeight/2 - e.pageY )/10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    tecnologias.style.transform = "translateZ(100px)";
    conhecer_mais.style.transform = "translateZ(75px)";

})

container.addEventListener("mouseleave", (e) => {
    card.style.transition= "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    tecnologias.style.transform = "translateZ(0px)";
    conhecer_mais.style.transform = "translateZ(0px)";
})