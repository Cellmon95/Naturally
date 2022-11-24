const contactInputSection = document.querySelector('.contact-input-field');
const contactInput = contactInputSection.querySelector('input');
const registerBtn = contactInputSection.querySelector('button');
const contactContent = document.querySelector('.contact-content')
const contactErrorField = contactContent.querySelector('.email-error-field');

let errorCreated = false;
let registered = false;

const validateEmail = (email) =>{
    return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

registerBtn.addEventListener('click', () =>{
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
        }
    }
})