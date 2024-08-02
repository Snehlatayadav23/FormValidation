var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename() {
    var name = document.getElementById('contact-name').value;
    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatephone() {
    var phone = document.getElementById('contact-phone').value;
    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    if (!phone.match(/^[1-9][0-9]{9}$/)) {
        phoneError.innerHTML = 'Only digits allowed';
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateemail() {
    var email = document.getElementById('contact-email').value;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z._\-0-9]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatepassword() {
    var password = document.getElementById('contact-password').value;
    if (password.length === 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    if (password.length < 8) {
        passwordError.innerHTML = 'Password should be at least 8 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatemessage() {
    var message = document.getElementById('contact-message').value;
    var words = message.trim().split(/\s+/);
    var minWords = 5;
    var maxWords = 30;

    if (words.length < minWords) {
        messageError.innerHTML = 'Message is too short. Minimum 5 words required.';
        return false;
    }
    if (words.length > maxWords) {
        messageError.innerHTML = 'Message is too long. Maximum 30 words allowed.';
        return false;
    }
    messageError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validatename() || !validatephone() || !validateemail() || !validatepassword() || !validatemessage()) {
        submitError.innerHTML = 'Please fix the errors above to submit the form.';
        return false;
    }
    submitError.innerHTML = '';
    alert('Thank you for your submission!');
    document.getElementById('contact-form').reset();
    return true;
}