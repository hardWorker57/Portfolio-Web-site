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