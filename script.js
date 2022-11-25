//Burger Menu Section
const burgerMenu = document.querySelector('.burger-menu');
const burgerBtn = document.querySelector('.burger-icon');
const closeMenu = burgerMenu.querySelector('.close-menu');

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