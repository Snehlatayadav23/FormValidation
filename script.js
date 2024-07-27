var nameError= document.getElementById('name-error');
var phoneError= document.getElementById('phone-error');
var emailError= document.getElementById('email-error');
var passwordError= document.getElementById('password-error');
var messageError= document.getElementById('message-error');
var submitError= document.getElementById('submit-error');

function validatename(){
var name = document.getElementById('contact-name').value;
  
if(name.length == 0){
    nameError.innerHTML = 'name is required';
    return false;
}
if(!name.match(/^[A-Za-z]*\s{1}[A-za-z]*$/)){
    nameError.innerHTML = 'Write full name';
    return false;
}
nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
return true;

}

function validatephone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}&/)){
        phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;

    }
    

}

function validateemail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return false;
    }

}

function validatepassword() {
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = '';
        return false;
    }
    if(password.length !== 10){
        passwordError.innerHTML = 'Password should be 10 digits';
        return false;
    }
    if(!password.match(/^[0-9]{10}&/)){
        passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }

}


function validatemessage() {
    var message = document.getElementById('contact-message').value;
    var words = message.trim().split(/\s+/); // Split the message by spaces
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
