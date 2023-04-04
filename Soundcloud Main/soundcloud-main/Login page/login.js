const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

// show error function
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success
function showSuccess() {
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// check valid email
function isValidEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if(email.value === '') {
        showError(email, 'Email is required');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email);
    }

    if(password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }
});
