function validatePassword() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords don't match.");
        password.value = ''; 
        confirm_password.value = '';
        password.focus();
    } else {
        confirm_password.setCustomValidity('');
    }
}

function updateRangeValue() {
    var range = document.getElementById("pageRating");
    var rangeValue = document.getElementById("rangeValue");
    rangeValue.innerText = range.value;
}

document.addEventListener('DOMContentLoaded', (event) => {
    var form = document.getElementById('exampleForm');
    form.addEventListener('submit', validatePassword);

    var range = document.getElementById("pageRating");
    range.addEventListener('input', updateRangeValue);
    updateRangeValue(); // Initialize the range value on page load
});
