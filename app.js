const nav = document.querySelector('.header_container');

window.addEventListener('scroll', () => {
    nav.classList.toggle('active',scrollY > 0 )
})
const slider = document.querySelector('.slide');
let sliderSection = document.querySelectorAll('.slider_section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('.btn_slider');
const btnRight = document.querySelector('.btn_slider2');

slider.insertAdjacentElement("afterbegin" , sliderSectionLast);

function Next() {
    let sliderSectionfirst = document.querySelectorAll('.slider_section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend" , sliderSectionfirst);
        slider.style.marginLeft = "-100%";
    }, 500);

}

btnRight.addEventListener('click', function(){
    Next();
});

function Prev() {
    let sliderSection = document.querySelectorAll('.slider_section');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin" , sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);

}

btnLeft.addEventListener('click', function(){
    Prev();
});

const aparecere =  document.querySelectorAll('circle');
const dot = document.querySelectorAll('.dot');


const typed = new Typed('.typed', {
    strings: ['Frontend Developer','Autodidacta','Responsabilidad', 'Comunicativo'],
    typeSpeed: 75,
    startDelay: 300,
    backSpeed: 75,
    smartBackSpace: true,
    shuffle:false,
    loop:true,
    loopcounter: false,
});

const maker =  document.querySelector('.muevete');
const item = document.querySelectorAll('.navBar .nav a');

function indicator(e) {
    maker.style.left = e.offsetLeft + "px";
    maker.style.width = e.offsetWidth + "px";
}

item.forEach(link => {
    link.addEventListener('click', (e) => {
        indicator(e.target);
    })
})

var menu = document.querySelector('.menu');
var responsive = document.querySelector('.navBar');



menu.addEventListener('click', () => {
    responsive.classList.toggle('active_responsive');
    responsive.classList.remove('navBar');
})


item.forEach(link => {
    link.addEventListener('click', () => {
        responsive.classList.remove('active_responsive');
        responsive.classList.add('navBar');
    })
})

// if(scrollY > 1200){

// }

const scroll_y = document.querySelectorAll('.dot');
const scroll_y2 = document.querySelectorAll('.card .porcentaje svg circle:nth-child(2)');

const services_section = document.getElementById('services_section');

const cargarsection = (entradas, observador) => {

    entradas.forEach(entrada => {
        if(entrada.isIntersecting){
            console.log('Cargando de services_section');
            scroll_y.forEach(element => {
                element.classList.add('dot_activacion');
            })
            scroll_y2.forEach(element => {
                element.classList.add('actives');
            })
        }
    })

}

const observador = new IntersectionObserver(cargarsection,{
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
});

observador.observe(services_section)

if(window.innerWidth < 768){
    scroll_y.forEach(element => {
        element.classList.add('dot_activacion');
    })
    scroll_y2.forEach(element => {
        element.classList.add('actives');
    })
}

