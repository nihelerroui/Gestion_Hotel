function signup() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var adresse = document.getElementById("adresse").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var checkFirstNameValidation = checkLength(firstName, 3);
    if (!checkFirstNameValidation) {
        showError("firstNameError", "First name must have at least 3 caracters.");
    } else {
        clearError("firstNameError");
    }
    var checkLastNameValidation = checkLength(lastName, 3);
    if (!checkLastNameValidation) {
        showError("lastNameError", "Last name must have at least 3 caracters.");
    } else {
        clearError("lastNameError");
    }
    var checkEmailValidation = checkEmail(email);
    if (!checkEmailValidation) {
        showError("emailError", "Invalid email format.");
    } else {
        clearError("emailError");
    }
    var checkPhoneValidation = checkPhone(phone);
    if (!checkPhoneValidation) {
        showError("PhoneError", "Phone must have 8 caracters.");
    } else {
        clearError("PhoneError");
    }
    var checkPasswordValidation = checkLength(password, 5);
    if (!checkPasswordValidation) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    var isPasswordMatch = checkPassword(password, confirmPassword);
    if (!isPasswordMatch) {
        showError("ConfirmPasswordError", "Passwords do not match.");
    } else {
        clearError("ConfirmPasswordError");
    }
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }
    if (checkFirstNameValidation &&
        checkLastNameValidation &&
        checkEmailValidation &&
        checkPhoneValidation &&
        checkPasswordValidation &&
        isPasswordMatch &&
        !isEmailUnique) {
        var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];

        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            adresse: adresse,
            password: password,
            role: "client"
        }
        usersTab.push(user);
        localStorage.setItem("usersHotel", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
function checkLength(ch, x) {
    return ch.length > x;
}
function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function checkPassword(pwd, cPwd) {
    return (pwd === cPwd);

}
function checkPhone(phone) {
    return phone.length == 8;
}
function checkEmailExists(email) {
    var usersTab = JSON.parse(localStorage.getItem("usersTab")) || [];
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email === email) {
            return true;
        }
    }
}
function showError(id, message) {
    document.getElementById(id).innerHTML = message;
    document.getElementById(id).style.color = "red";
}
function clearError(id) {
    document.getElementById(id).innerHTML = "";
}
function generateId(Tab) {
    var max;
    if (Tab.length == 0) {
        max = 0;
    } else {
        var max = Tab[0].id;
        for (let i = 0; i < Tab.length; i++) {
            if (Tab[i].id > max) {
                max = Tab[i].id;
            }
        }
    }
    return (max + 1);
}
function singupAdmin() {

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var isFirstNameValid = checkLength(firstName, 3);
    if (!isFirstNameValid) {
        showError("firstNameError", "First name must have at least 3 caracters. ");

    } else {
        clearError("firstNameError");
    }
    var isLastNameValid = checkLength(lastName, 4);
    if (!isLastNameValid) {
        showError("lastNameError", "Last name must have at least 4 caracters.");
    } else {
        clearError("lastNameError");
    }
    var isEmailValid = checkEmail(email)
    if (!isEmailValid) {
        showError("EmailError", "Invalid email format.");
    } else {
        clearError("EmailError");
    }
    var isPasswordValid = checkLength(password, 5);
    if (!isPasswordValid) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid && !isEmailUnique) {
        var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];

        //3. Création JSON
        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: "admin"
        }
        console.log(user);

        //ajouter un nouveau utilisateur
        usersTab.push(user);

        //4.Stockage dans local
        localStorage.setItem("usersHotel", JSON.stringify(usersTab));
        location.replace("login.html");
    }


}
function signupOwner() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var adresse = document.getElementById("adresse").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    var checkFirstNameValidation = checkLength(firstName, 3);
    if (!checkFirstNameValidation) {
        showError("firstNameError", "First name must have at least 3 caracters.");
    } else {
        clearError("firstNameError");
    }
    var checkLastNameValidation = checkLength(lastName, 3);
    if (!checkLastNameValidation) {
        showError("lastNameError", "Last name must have at least 3 caracters.");
    } else {
        clearError("lastNameError");
    }
    var checkEmailValidation = checkEmail(email);
    if (!checkEmailValidation) {
        showError("emailError", "Invalid email format.");
    } else {
        clearError("emailError");
    }
    var checkPhoneValidation = checkPhone(phone);
    if (!checkPhoneValidation) {
        showError("PhoneError", "Phone must have 8 caracters.");
    } else {
        clearError("PhoneError");
    }
    var checkPasswordValidation = checkLength(password, 5);
    if (!checkPasswordValidation) {
        showError("PasswordError", "Password must have at least 5 caracters.");
    } else {
        clearError("PasswordError");
    }
    var isPasswordMatch = checkPassword(password, confirmPassword);
    if (!isPasswordMatch) {
        showError("ConfirmPasswordError", "Passwords do not match.");
    } else {
        clearError("ConfirmPasswordError");
    }
    var isEmailUnique = checkEmailExists(email);
    if (isEmailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError");
    }
    if (checkFirstNameValidation &&
        checkLastNameValidation &&
        checkEmailValidation &&
        checkPhoneValidation &&
        checkPasswordValidation &&
        isPasswordMatch &&
        !isEmailUnique) {
        var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];

        var user = {
            id: generateId(usersTab),
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            adresse: adresse,
            password: password,
            role: "owner",
            status: "notValidated"
        }
        usersTab.push(user);
        localStorage.setItem("usersHotel", JSON.stringify(usersTab));
        location.replace("login.html");
    }
}
function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var foundedUser = {};
    var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].email === email && usersTab[i].password === password) {
            foundedUser = usersTab[i];
            break;
        }
    }
    if (foundedUser) {
        localStorage.setItem("connectedUserId", JSON.stringify(foundedUser.id));

        if (foundedUser.role === "client") {
            location.replace("hotels.html");
        } else if (foundedUser.role === "owner") {
            if (foundedUser.status == "notValidated") {
                showError("loginError", "Your account is not validated yet. Please wait for the admin approval.")
            } else {
                location.replace("store.html");
            }
        } else {
            location.replace("dashboardAdmin.html");
        }
    } else {
        showError("loginError", "Invalid email or password.");
    }

}
function displayAllUsers() {
    var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];
    var content = "";
    for (let i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role !== "admin") {
            if (usersTab[i].role == "owner" && usersTab[i].status == "notValidated") {
                content += `<tr>
                                <td> ${usersTab[i].id}</td>
                                <td> ${usersTab[i].firstName}</td>
                                <td> ${usersTab[i].lastName}</td>
                                <td> ${usersTab[i].email}</td>
                                <td> ${usersTab[i].role}</td>
                                <td> ${usersTab[i].status}</td>
                                <td class="text-center">
                                    <button class="btn btn-orange btn-sm" onclick="ValidateOwner(${usersTab[i].id})">
                                        <i class="fa fa-check"></i> Validate
                                    </button>
                                    <button class="btn btn-lightgrey btn-sm" >
                                        <i class="fa fa-trash"></i> Delete
                                    </button>
                                 </td>
                            </tr>`
            } else {
                content += `<tr>
                                <td> ${usersTab[i].id}</td>
                                <td> ${usersTab[i].firstName}</td>
                                <td> ${usersTab[i].lastName}</td>
                                <td> ${usersTab[i].email}</td>
                                <td> ${usersTab[i].role}</td>
                                <td> ${usersTab[i].status || "--"}</td>
                                <td class="text-center">
                                    <button class="btn btn-lightgrey btn-sm">
                                        <i class="fa fa-trash"></i> Delete
                                    </button>
                                 </td>
                            </tr>`

            }

        }
        document.getElementById("usersList").innerHTML = content;
    }
}
function ValidateOwner(id) {
    var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];
    for (let i = 0; i < usersTab.length; i++) {
        if (Number(usersTab[i].id == id)) {
            usersTab[i].status = "Validated";
            break;
        }
    }
    localStorage.setItem("usersHotel", JSON.stringify(usersTab));
    displayAllUsers();

}