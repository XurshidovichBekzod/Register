    function showSignIn() {
    document.querySelector(".singIn").style.display = "block";
    document.querySelector(".singUp").style.display = "none";
}

function showSignUp() {
    document.querySelector(".singIn").style.display = "none";
    document.querySelector(".singUp").style.display = "block";
}

function closeForms() {
    document.querySelector(".singIn").style.display = "none";
    document.querySelector(".singUp").style.display = "none";
    document.getElementById("resultText").innerText = "";
}

function signINfunc() {
    const emailEl = document.getElementById("singInEmail").value;
    const passwordEl = document.getElementById("singInPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
        alert("Avval ro'yxatdan o'tishingiz kerak!");
        return;
    }

    if (emailEl === savedUser.email && passwordEl === savedUser.password) {
        document.getElementById("resultText").innerText = "To'g'ri!";
        document.getElementById("resultText").style.color = "wihite";
    } else {
        document.getElementById("resultText").innerText = "Xato!";
        document.getElementById("resultText").style.color = "white";
    }
}

function register() {
    const name = document.getElementById("signUpName").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    if (name && email && password) {
        localStorage.setItem("user", JSON.stringify({ name, email, password }));
        alert("Ro'yxatdan o'tdingiz!");
        closeForms();
    } else {
        alert("Barcha maydonlarni to'ldiring iltimos!");
    }
}
