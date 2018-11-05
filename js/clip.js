const USERNAME = 'f.medeiros';
const PASSWORD = 'password123';

function logIn() {
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    if(username === USERNAME && password === PASSWORD) {
        console.log("Logged in");
        window.location.href = "pages/homepage.html";
    } else
        alert("Not correct");
}
