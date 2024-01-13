let blur = document.getElementById('blur');

function toggle() {
    let popup = document.getElementById('popup');
    blur.classList.toggle('active');
    popup.classList.toggle('active');
}

// function burgerMenu() {
//     let burgerPopup = document.getElementById('burgerPopup');
//     blur.classList.toggle('active');
//     burgerPopup.classList.toggle('active');
// }
function showBurgerMenu() {
    let burger_menu = document.getElementById('burger_menu');
    burger_menu.classList.toggle('active');
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// ANIMATIONS
gsap.registerPlugin(ScrollTrigger);

gsap.from('.header', {
    opacity: 0,
    delay: 0.3,
    x: 30,
    // y: -50
})

const nav_items = document.querySelector('.nav');
gsap.from(nav_items.children ,{
    opacity: 0,
    x: -40,
    duration: 1,
    delay: .8,
    stagger: {
        amount: 1
    }
})

const header_text = document.querySelector('.header-main-content');
gsap.from(header_text, {
    opacity: 0,
    y: 120,
    duration: 1,
    delay: .6
})

const about_left = document.querySelector('.about_left');
const about_right = document.querySelector('.about_right');
gsap.from(about_left, {
    opacity: 0,
    x: -1000,
    duration: 1,
    delay: 0.3,
    scrollTrigger: about_left 
})
gsap.from(about_right, {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 0.6,
    scrollTrigger: about_left 
})

const zoom_card = document.querySelector('.cards');
gsap.from(zoom_card.children , {
    opacity: 0,
    x: 100,
    duration: 1.2,
    delay: 0.4,
    scrollTrigger: zoom_card,
    stagger: {
        amount: 0.4
    }
})

const customCards = document.querySelector('.custom_cards');
gsap.from(customCards.children, {
    opacity: 0,
    y: 220,
    duration: 1,
    delay: 0.5,
    scrollTrigger: customCards,
    stagger: {
        amount: 1
    }
})

gsap.utils.toArray('.block_content').forEach(title => {
    gsap.fromTo(title, {
        opacity: 0,
        x: 300,
        skewX: 65
    }, {
        opacity: 1,
        x: 0,
        skewX: 0,
        duration: 1,
        delay: .6,
        scrollTrigger: title
    })
});

const contactSection = document.querySelector('.contact_container');
gsap.from(contactSection, {
    opacity: 0,
    scale: .3,
    duration: 1,
    delay: .6,
    scrollTrigger: contactSection
})