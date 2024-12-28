(emailjs => {
    emailjs.init('HAwR8wHBrT9taCCkC');
})(emailjs);

const emailField = document.querySelector('.form__email');

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    let error = validation();

    if(error === 0) {
        emailjs.sendForm('service_utzgb0p', 'template_s1kng4m', this)
        .then(function() {
            const formFields = document.querySelectorAll('.form__field');
            formFields.forEach(field => field.value = '');
            emailField.classList.remove('filled');

            alert('Повідомлення успішно надіслано!');
        }, function(error) {
            alert('Сталася помилка: ' + error);
        });
    }
});

function validation() {
    let error = 0;
    let reqFields = document.querySelectorAll('._req');

    for (let index = 0; index < reqFields.length; index++) {
        const input = reqFields[index];
        formRemoveError(input);
        
        if(input.value === '') {
            formAddError(input);
            error++;
        } else if(input.classList.contains('form__email')){
            if(emailTest(input)) {
                formAddError(input);
                error++;
            }
        }
    }

    return error;
}

function formAddError(input){
    input.parentElement.classList.add('error');
}
function formRemoveError(input){
    input.parentElement.classList.remove('error');
}
function emailTest(input) {
    if(input.value !== '') {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    return false;
}

emailField.addEventListener('input', ()=> {
    if(emailField.value !== '') {
        emailField.classList.add('filled');
    } else {
        emailField.classList.remove('filled');
    }
})