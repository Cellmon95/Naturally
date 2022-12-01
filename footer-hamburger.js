const hamburgerItemAbout = document.querySelector('.footer-top-mobile-hamburger-item-about');

hamburgerItemAbout.addEventListener('click', onClick(a) );

function onClick(a){
    hamburgerItemAbout.classList.toggle('.hide');
    console.log('click')
};