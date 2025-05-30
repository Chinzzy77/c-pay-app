function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const validUsers = [
        { username: "maya2212@gmail.com", password: "mayagloss", redirectTo: "Maya.html" },
        { username: "smart.gajup06@gmail.com", password: "favyspace", redirectTo: "Favy.html" },
        { username: "dr.chinzzy@yahoo.com", password: "chinzzyb", redirectTo: "Chinzzy.html" }
    ];

    for (const user of validUsers) {
        if (username === user.username && password === user.password) {
            window.location.href = user.redirectTo;
            return;
        }
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const matchedUser = storedUsers.find(user => user.email === username && user.password === password);

    if (matchedUser) {
        alert(`Welcome ${matchedUser.firstName}!`);
        window.location.href = "bank.html";
    } else {
        const message = document.getElementById("message");
        message.textContent = "Invalid username/email or password!";
    }
}

function goToSignup() {
    window.location.href = "signup.html";
}

function signup() {
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("signupPassword").value;

    if (!firstName || !lastName || !email || !password) {
        alert("Please fill all fields.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.email === email)) {
        alert("Email already registered. Please log in.");
        return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! You can now log in.");
    window.location.href = "index.html";
}

function toggleBalance() {
            const balanceElement = document.getElementById('balanceAmount');
            const toggleIcon = document.getElementById('toggleIcon');

            if (balanceElement.textContent === '*****') {
                balanceElement.textContent = '$8,965,760.55';
                toggleIcon.textContent = '🙈';
            } else {
                balanceElement.textContent = '*****';
                toggleIcon.textContent = '👁️';
            }
        }

        function updateProfileImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const profileImage = document.getElementById('profilePic');
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        }