const USERNAME = 'f.medeiros';
const PASSWORD = 'password123';

function logIn() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if(username === USERNAME && password === PASSWORD)
        window.location.href = "pages/landing.html";
    else
        alert("Not correct");
}