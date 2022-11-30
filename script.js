//Header Drop Down Section
const headerClothingbtn = document.getElementById('clothing-btn');
const headerCountrybtn = document.getElementById('country-btn');
const headerAccessoriesbtn = document.getElementById('accessoarer-btn');
const headerDropSection = document.querySelector('.header-drop-down');
const headerDropContainer = headerDropSection.querySelector('.header-drop-container');
const headerClothingDrop = headerDropContainer.querySelector('.header-clothing');
const headerCountryDrop = headerDropContainer.querySelector('.header-country');
const headerAccessoriesDrop = headerDropContainer.querySelector('.header-accessories');
const disableHeader = document.querySelector('.disable-header');

let isHeaderDisabled = false;
let isClothesActive = false;
let isCountryActive = false;
let isAccessoriesActive = false;

const headerDisableToggle = () =>{
    disableHeader.classList.toggle('disable-header-active');
}

disableHeader.addEventListener('click', () =>{
    if(isClothesActive){
        headerClothingDrop.classList.toggle('header-clothing-open');
        isClothesActive = false;
    }

    if(isCountryActive){
        headerCountryDrop.classList.toggle('header-country-open');
        isCountryActive = false;
    }

    if(isAccessoriesActive){
        headerAccessoriesDrop.classList.toggle('header-accessories-open');
        isAccessoriesActive = false;
    }

    headerDropContainer.classList.toggle('header-drop-container-open');
    headerDisableToggle();
})

headerClothingbtn.addEventListener('click', () =>{
    headerClothingDrop.classList.toggle('header-clothing-open');
    headerDropContainer.classList.toggle('header-drop-container-open');
    headerDisableToggle();
    isClothesActive = true;
})

headerCountrybtn.addEventListener('click', () =>{
    headerCountryDrop.classList.toggle('header-country-open');
    headerDropContainer.classList.toggle('header-drop-container-open');
    headerDisableToggle();
    isCountryActive = true;
})

headerAccessoriesbtn.addEventListener('click', () =>{
    headerAccessoriesDrop.classList.toggle('header-accessories-open');
    headerDropContainer.classList.toggle('header-drop-container-open');
    headerDisableToggle();
    isAccessoriesActive = true;
})

//Burger Menu Section
const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-icon');
const closeMenu = burgerMenu.querySelector('.close-menu');
const accordionItems = burgerMenu.querySelectorAll('.burger-accordion-container');

const accordionClothing = document.getElementById('accordion-clothing');
const accordionAccessories = document.getElementById('accordion-accessories');
const accordionCountry = document.getElementById('accordion-country');

const accordionClothingImg = document.getElementById('accordion-clothing-img');
const accordionAccessoriesImg = document.getElementById('accordion-accessoarer-img');
const accordionCountryImg = document.getElementById('accordion-country-img');

let accordionItemIndex = 0;

accordionItems.forEach(accordion => {
    if(accordionItemIndex === 2){
        accordion.addEventListener('click', () =>{
            accordionClothing.classList.toggle('burger-content-open');
            accordionClothingImg.classList.toggle('burger-heading-open');
        });
    }
    else if(accordionItemIndex === 3){
        accordion.addEventListener('click', () =>{
            accordionAccessories.classList.toggle('burger-content-open');
            accordionAccessoriesImg.classList.toggle('burger-heading-open');
        })
    }
    else if(accordionItemIndex === 4){
        accordion.addEventListener('click', () =>{
            accordionCountry.classList.toggle('burger-content-open');
            accordionCountryImg.classList.toggle('burger-heading-open');
        })
    }

    accordionItemIndex++;

    if(accordionItemIndex === 4){
        accordionItemIndex = 0;
    }
});

burgerBtn.addEventListener('click', () =>{
    burgerMenu.classList.toggle('burger-menu-open');
})

closeMenu.addEventListener('click', () =>{
    burgerMenu.classList.toggle('burger-menu-open');
})

// Contact Section
const contactInputSection = document.querySelector('.contact-input-field');
const contactInput = contactInputSection.querySelector('input');
const registerBtn = contactInputSection.querySelector('button');
const contactContent = document.querySelector('.contact-content')
const contactErrorField = contactContent.querySelector('.email-error-field');
const registerBtnImg = registerBtn.querySelector('img');

let errorCreated = false;
let registered = false;

const validateEmail = (email) =>{
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

const emailVerify = () =>{
    if(!registered){
        if(validateEmail(contactInput.value) === null){
            contactErrorField.classList.remove('email-error-field');
            contactErrorField.classList.add('email-error-field-active');
            contactInput.classList.add('input-error-active');
            if(!errorCreated){
                errorCreated = true;
            }
        }
        else{
            if(errorCreated){
                errorCreated = false;
                contactErrorField.classList.add('email-error-field');
                contactErrorField.classList.remove('email-error-field-active');
                contactInput.classList.remove('input-error-active');
            }
            
            registerBtn.remove();
            const img = document.createElement('img');
            img.src = "images/contact-btn-reg.svg";
            img.style.marginLeft = "1rem";
            contactInputSection.style =
                `
                display: flex;
                align-items: center;
                `
            contactInputSection.append(img);
            registered = true;            
        }
    }
    contactInput.value = "";
}

registerBtn.addEventListener('click', () =>{
    emailVerify();
})

contactInput.addEventListener('keydown', (e) =>{
    if(e.key === 'Enter' && !registered){
        emailVerify();
    }
})