const footerTopMobileHamburger = document.querySelectorAll('.footer-top-mobile-hamburger > li');

footerTopMobileHamburger.forEach(item => {
    item.addEventListener('click', onClick );
});
console.log(footerTopMobileHamburger);

function onClick(e){
    e.currentTarget.querySelector('ul').classList.toggle('hide');
};