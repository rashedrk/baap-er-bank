// step 1 : add click handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function () {
    // step 2 : get the email address inside the email input field 
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;

    // step 3: get the password inside the password field 
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    // DANGER : do not verify email and password in client side 
    // step 4 : verify email and password 
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = '../bank.html'
    } else {
        console.log('invalid');
    }
})