/**
 * Function that validates whether a string is a valid email address.
 */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// unit test for the function validateEmail()

console.log(validateEmail('XXXXXXXXXXXXX'));
console.log(validateEmail('test@test'));
console.log(validateEmail('XXXXXXXXXXXXXXX'));
