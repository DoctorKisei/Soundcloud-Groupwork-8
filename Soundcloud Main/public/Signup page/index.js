const usernameEle = document.querySelector('#username');
const emailEle = document.querySelector('#email');
const passwordEle = document.querySelector('#password');

const form = document.querySelector('#sign-up');

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');

    
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = '';
};

const checkUsername = () => {

    let valid = false;
    const min = 3,
        max = 25;
    const username = usernameEle.value.trim();

    if (!isRequired(username)) {
        showError(usernameEle, 'Username cannot be blank.');
    } else if (!isBetween(username.length, min, max)) {
        showError(usernameEle, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(usernameEle);
        valid = true;
    }
    return valid;
}

const checkEmail = () => {
    let valid = false;
    const email = emailEle.value.trim();
    if (!isRequired(email)) {
        showError(emailEle, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEle, 'Email is not valid.')
    } else {
        showSuccess(emailEle);
        valid = true;
    }
    return valid;
}

const checkPassword = () => {
    let valid = false;
    const password = passwordEle.value.trim();
    if (!isRequired(password)) {
        showError(passwordEle, 'Password cannot be blank');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEle, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)')
    } else {
        showSuccess(passwordEle);
        valid = true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword();
    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid;

    if (isFormValid) {}
});
form.addEventListener('input', function(e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
    }
});