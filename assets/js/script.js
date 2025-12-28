// 1.  for index.php page yani sign page

// Password Show or hide function and it is also used in password show in step 2
function togglePassword() {
    const password = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");

    if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bi-eye", "bi-eye-slash");
    } else {
        password.type = "password";
        eyeIcon.classList.replace("bi-eye-slash", "bi-eye");
    }
}



// 2. for sign-up.php yani create account page


