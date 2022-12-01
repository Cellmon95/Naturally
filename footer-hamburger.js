const footerAccordionContent = document.querySelectorAll('.footer-top-accordion-container');
const footerAccordionBtn = document.querySelectorAll('.footer-accordion-heading');

const accordionFooterMember = document.getElementById('footer-member-content');
const accordionFooterAbout = document.getElementById('footer-about-content');
const accordionFooterCustomerService = document.getElementById('footer-customer-service-content');

const accordionFooterMemberImg = document.getElementById('accordion-footer-member-heading');
const accordionFooterAboutImg = document.getElementById('accordion-footer-about-heading');
const accordionFooterCustomerServiceImg = document.getElementById('accordion-footer-customer-service-heading');

let accordionFooterItemIndex = 0;

footerAccordionContent.forEach(accordion => {
    if(accordionFooterItemIndex === 0){
        accordion.addEventListener('click', () =>{
            accordionFooterMember.classList.toggle('footer-accordion-content-open');
            accordionFooterMemberImg.classList.toggle('footer-accordion-img-open');
        });
    }
    else if(accordionFooterItemIndex === 1){
        accordion.addEventListener('click', () =>{
            accordionFooterAbout.classList.toggle('footer-accordion-content-open');
            accordionFooterAboutImg.classList.toggle('footer-accordion-img-open');
        })
    }
    else if(accordionFooterItemIndex === 2){
        accordion.addEventListener('click', () =>{
            accordionFooterCustomerService.classList.toggle('footer-accordion-content-open');
            accordionFooterCustomerServiceImg.classList.toggle('footer-accordion-img-open');
        })
    }

    accordionFooterItemIndex++;

    if(accordionFooterItemIndex === 3){
        accordionFooterItemIndex = 0;
    }
});