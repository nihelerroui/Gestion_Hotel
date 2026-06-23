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
                                    <button class="btn btn-lightgrey btn-sm" onclick="deleteUser(${usersTab[i].id})" >
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
                                    <button class="btn btn-lightgrey btn-sm" onclick="deleteUser(${usersTab[i].id})">
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
function deleteUser(id) {
    var usersTab = JSON.parse(localStorage.getItem("usersHotel")) || [];
    var position;
    for (let i = 0; i < usersTab.length; i++) {
        if (Number(usersTab[i].id == id)) {
            position = i;
            break;
        }
    }
    usersTab.splice(position, 1);
    localStorage.setItem("usersHotel", JSON.stringify(usersTab));
    displayAllUsers();

}
function addGuestHouse() {
    var guestHouseName = document.getElementById("guestHouseName").value;
    var guestHouseCity = document.getElementById("guestHouseCity").value;
    var guestHouseAddress = document.getElementById("guestHouseAddress").value;
    var guestHousePhone = document.getElementById("guestHousePhone").value;
    var guestHouseEmail = document.getElementById("guestHouseEmail").value;
    var guestHousePrice = document.getElementById("guestHousePrice").value;
    var guestHouseRooms = document.getElementById("guestHouseRooms").value;
    var guestHouseDescription = document.getElementById("guestHouseDescription").value;

    var imageInput = document.getElementById("guestHouseImage");
    var imageFile = imageInput.files[0];

    var nameValidate = checkLength(guestHouseName, 4);
    if (!nameValidate) {
        showError("nameError", "Name must have at least 4 caracters.")
    } else {
        clearError("nameError")
    }
    var phoneValidate = checkPhone(guestHousePhone);
    if (!phoneValidate) {
        showError("phoneError", "phone must have 8 caracters.")
    } else {
        clearError("phoneError")
    }
    var emailVlaidate = checkEmail(guestHouseEmail);
    if (!emailVlaidate) {
        showError("emailError", "Invalid email format.")
    } else {
        clearError("emailError")
    }
    var emailUnique = checkEmailExists(guestHouseEmail);
    if (emailUnique) {
        showError("EmailUniqueError", "Email must be unique");
    } else {
        clearError("EmailUniqueError")
    }
    var priceValidate = checkNumber(guestHousePrice);
    if (!priceValidate) {
        showError("priceError", "Price must be greater than 0.")
    } else {
        clearError("priceError")
    }
    var nbChambreValidate = checkNumberRoom(guestHouseRooms);
    if (!nbChambreValidate) {
        showError("roomsError", "The maximum number of rooms is 5.")
    } else {
        clearError("roomsError")
    }
    var imageValidate = imageFile != undefined;
    if (!imageValidate) {
        showError("imageError", "Please select an image.");
    } else {
        clearError("imageError");
    }
    if (nameValidate && phoneValidate && emailVlaidate && priceValidate && nbChambreValidate && !emailUnique && imageValidate) {
        var reader = new FileReader();

        reader.onload = function () {
            var guestHouseTabs = JSON.parse(localStorage.getItem("guestHouses")) || [];
            var connectedUserId = localStorage.getItem("connectedUserId");

            var guestHouse = {
                id: generateId(guestHouseTabs),
                guestHouseName: guestHouseName,
                guestHouseCity: guestHouseCity,
                guestHouseAddress: guestHouseAddress,
                guestHousePhone: guestHousePhone,
                guestHouseEmail: guestHouseEmail,
                guestHousePrice: guestHousePrice,
                guestHouseRooms: guestHouseRooms,
                guestHouseImage: reader.result,
                guestHouseDescription: guestHouseDescription,
                ownerId: connectedUserId
            }
            guestHouseTabs.push(guestHouse);
            localStorage.setItem("guestHouses", JSON.stringify(guestHouseTabs));
        }
        reader.readAsDataURL(imageFile)

    }

}
function checkNumber(nb) {
    return nb > 0;
}
function checkNumberRoom(nb) {
    return Number(nb) > 0 && Number(nb) <= 5;
}
function addRoom() {
    var roomGuestHouse = document.getElementById("roomGuestHouse").value;
    var roomName = document.getElementById("roomName").value;
    var roomType = document.getElementById("roomType").value;
    var roomCapacity = document.getElementById("roomCapacity").value;
    var roomPrice = document.getElementById("roomPrice").value;
    var roomAvailability = document.getElementById("roomAvailability").value;
    var roomDescription = document.getElementById("roomDescription").value;

    var imageInput = document.getElementById("roomImage");
    var imageFile = imageInput.files[0];

    var guestHouseValidate = roomGuestHouse != "";
    if (!guestHouseValidate) {
        showError("guestHouseError", "Please select a guest house.");
    } else {
        clearError("guestHouseError");
    }

    var roomNameValidate = checkLength(roomName, 2);
    if (!roomNameValidate) {
        showError("roomNameError", "Room name must have at least 2 characters.");
    } else {
        clearError("roomNameError");
    }

    var roomTypeValidate = checkLength(roomType, 1);
    if (!roomTypeValidate) {
        showError("roomTypeError", "Please select a room type.");
    } else {
        clearError("roomTypeError");
    }

    var capacityValidate = checkNumber(roomCapacity, 1);
    if (!capacityValidate) {
        showError("capacityError", "Capacity must be greater than 0.");
    } else {
        clearError("capacityError");
    }

    var priceValidate = checkNumber(roomPrice, 1);
    if (!priceValidate) {
        showError("roomPriceError", "Price must be greater than 0.");
    } else {
        clearError("roomPriceError");
    }

    var availabilityValidate = checkLength(roomAvailability, 1);
    if (!availabilityValidate) {
        showError("availabilityError", "Please select availability.");
    } else {
        clearError("availabilityError");
    }

    var descriptionValidate = checkLength(roomDescription, 10);
    if (!descriptionValidate) {
        showError("roomDescriptionError", "Description must have at least 10 characters.");
    } else {
        clearError("roomDescriptionError");
    }

    var imageValidate = imageFile != undefined;
    if (!imageValidate) {
        showError("imageError", "Please select an image.");
    } else {
        clearError("imageError");
    }

    if (guestHouseValidate && roomNameValidate && roomTypeValidate && capacityValidate && priceValidate && availabilityValidate && descriptionValidate && imageValidate
    ) {
        var reader = new FileReader();

        reader.onload = function () {
            var roomsTab = JSON.parse(localStorage.getItem("rooms")) || [];
            var connectedUserId = localStorage.getItem("connectedUserId");
            var room = {
                id: generateId(roomsTab),
                guestHouseId: roomGuestHouse,
                roomName: roomName,
                roomType: roomType,
                roomCapacity: roomCapacity,
                roomPrice: roomPrice,
                roomAvailability: roomAvailability,
                roomImage: reader.result,
                roomDescription: roomDescription,
                ownerId: connectedUserId
            }
            roomsTab.push(room);
            localStorage.setItem("rooms", JSON.stringify(roomsTab));
        }
        reader.readAsDataURL(imageFile);
    }

}
function loadGuestHouses() {
    var guestHouses = JSON.parse(localStorage.getItem("guestHouses")) || [];
    var connectedUserId = localStorage.getItem("connectedUserId");

    var roomGuestHouse = document.getElementById("roomGuestHouse");

    roomGuestHouse.innerHTML = '<option value="">Select Guest House</option>';

    if (!connectedUserId) {
        return;
    }

    for (var i = 0; i < guestHouses.length; i++) {
        if (guestHouses[i].ownerId == connectedUserId) {
            roomGuestHouse.innerHTML += `
                <option value="${guestHouses[i].id}">
                    ${guestHouses[i].guestHouseName} - ${guestHouses[i].guestHouseCity}
                </option>
            `;
        }
    }
}
function displayAllHotels() {
    var hotelsTab = JSON.parse(localStorage.getItem("guestHouses")) || [];
    var content = "";

    for (let i = 0; i < hotelsTab.length; i++) {

        var image = hotelsTab[i].guestHouseImage
            ? hotelsTab[i].guestHouseImage
            : "images/hotel-grid-1.jpg";

        content += `
            <div class="col-md-6 col-lg-6 col-xl-4">
                <div class="grid-block main-block h-grid-block">
                    <div class="main-img h-grid-img">
                        <a href="hotel-detail-left-sidebar.html?id=${hotelsTab[i].id}">
                            <img src="${image}" class="img-fluid hotel-card-img" alt="hotel-img" />
                        </a>

                        <div class="main-mask">
                            <ul class="list-unstyled list-inline offer-price-1">
                                <li class="price">
                                    $${hotelsTab[i].guestHousePrice}
                                    <span class="divider">|</span>
                                    <span class="pkg">Avg/Night</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="block-info h-grid-info">
                        <div class="rating">
                            <span><i class="fa fa-star orange"></i></span>
                            <span><i class="fa fa-star orange"></i></span>
                            <span><i class="fa fa-star orange"></i></span>
                            <span><i class="fa fa-star orange"></i></span>
                            <span><i class="fa fa-star lightgrey"></i></span>
                        </div>
                        
                        <h3 class="block-title">
                            <a href="hotel-detail-left-sidebar.html?id=${hotelsTab[i].id}">
                                ${hotelsTab[i].guestHouseName}
                            </a>
                        </h3>

                        <p class="block-minor">
                            From: ${hotelsTab[i].guestHouseCity}
                        </p>

                        <p>${truncateText(hotelsTab[i].guestHouseDescription, 80)}</p>

                        <div class="grid-btn">
                            <button type="button"
                            onclick="goToDisplay(${hotelsTab[i].id})"
                               class="btn btn-orange btn-block btn-lg">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    document.getElementById("hotelsContent").innerHTML = content;
}
function truncateText(text, maxLength) {
    if (!text) {
        return "";
    }

    if (text.length <= maxLength) {
        return text;
    }

    return text.substring(0, maxLength) + "...";
}
function goToDisplay(id) {
    var HouseId = JSON.stringify(localStorage.setItem("displayHotelId", id));
    window.location.href = "detail-house.html"

}
function displayAllRoomsByHouse() {
    var roomsTab = JSON.parse(localStorage.getItem("rooms")) || [];
    var houseId = localStorage.getItem("displayHotelId");
    var content = "";
    for (let i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].guestHouseId == houseId) {
            var image = roomsTab[i].roomImage
                ? roomsTab[i].roomImage
                : "images/available-room-1.jpg";
            content += `<div class="list-block main-block room-block">
                    <div class="list-content">
                        <div class="main-img list-img room-img">
                            <a href="#">
                                <img src="${image}" class="img-responsive room-card-img" alt="room-img" />
                            </a>

                            <div class="main-mask">
                                <ul class="list-unstyled list-inline offer-price-1">
                                    <li class="list-inline-item price">
                                        $${roomsTab[i].roomPrice}
                                        <span class="divider">|</span>
                                        <span class="pkg">Per Night</span>
                                    </li>

                                    <li class="list-inline-item rating">
                                        <span><i class="fa fa-star orange"></i></span>
                                        <span><i class="fa fa-star orange"></i></span>
                                        <span><i class="fa fa-star orange"></i></span>
                                        <span><i class="fa fa-star orange"></i></span>
                                        <span><i class="fa fa-star lightgrey"></i></span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="list-info room-info">
                            <h3 class="block-title">
                                <a href="#">
                                    ${roomsTab[i].roomName}
                                </a>
                            </h3>

                            <p class="block-minor">
                                Type: ${roomsTab[i].roomType}
                            </p>

                            <p class="block-minor">
                                Max Guests: ${roomsTab[i].roomCapacity}
                            </p>

                            <p class="block-minor">
                                Availability: ${roomsTab[i].roomAvailability}
                            </p>

                            <p>
                                ${truncateText(roomsTab[i].roomDescription, 120)}
                            </p>

                            <button type="button" class="btn btn-orange btn-lg" onclick="goToDisplayRoom(${roomsTab[i].id})">
                                View More
                            </button>
                        </div>
                    </div>
                </div>`
                

        }

    }
    document.getElementById("RoomsListId").innerHTML = content;

}
function goToDisplayRoom(id) {
    var displayRoomId = JSON.stringify(localStorage.setItem("displayRoomId", id));
    window.location.href = "detail-room.html";
}
function displayRoom() {
    var roomsTab = JSON.parse(localStorage.getItem("rooms")) || [];
    var displayRoomId = localStorage.getItem("displayRoomId");
    var content = "";
    var booking = "";

    for (let i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id == displayRoomId) {

            var room = roomsTab[i];

            var image = room.roomImage
                ? room.roomImage
                : "images/available-room-1.jpg";

            content = `
                <div class="detail-tabs">
                    <ul class="nav nav-tabs nav-justified">
                        <li class="nav-item">
                            <a class="nav-link active" href="#room-overview" data-bs-toggle="tab">
                                Room Overview
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#room-capacity" data-bs-toggle="tab">
                                Capacity
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#room-price" data-bs-toggle="tab">
                                Price
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#room-availability" data-bs-toggle="tab">
                                Availability
                            </a>
                        </li>
                    </ul>

                    <div class="tab-content">

                        <div id="room-overview" class="tab-pane active">
                            <div class="row">
                                <div class="col-md-4 tab-img">
                                    <img src="${image}" class="img-responsive room-detail-img" alt="room-img" />
                                </div>

                                <div class="col-md-8 tab-text">
                                    <h3>${room.roomName}</h3>
                                    <p>${room.roomDescription}</p>
                                </div>
                            </div>
                        </div>

                        <div id="room-capacity" class="tab-pane">
                            <div class="row">
                                <div class="col-md-4 tab-img">
                                    <img src="${image}" class="img-responsive room-detail-img" alt="room-img" />
                                </div>

                                <div class="col-md-8 tab-text">
                                    <h3>Room Capacity</h3>
                                    <p>
                                        This room can accept a maximum of 
                                        <strong>${room.roomCapacity}</strong> guest(s).
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="room-price" class="tab-pane">
                            <div class="row">
                                <div class="col-md-4 tab-img">
                                    <img src="${image}" class="img-responsive room-detail-img" alt="room-img" />
                                </div>

                                <div class="col-md-8 tab-text">
                                    <h3>Room Price</h3>
                                    <p>
                                        Price per night: 
                                        <strong>$${room.roomPrice}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="room-availability" class="tab-pane">
                            <div class="row">
                                <div class="col-md-4 tab-img">
                                    <img src="${image}" class="img-responsive room-detail-img" alt="room-img" />
                                </div>

                                <div class="col-md-8 tab-text">
                                    <h3>Availability</h3>
                                    <p>
                                        Current availability: 
                                        <strong>${room.roomAvailability}</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            `;
            booking = `
                <div class="side-bar-block booking-form-block mt-4">
                    <h2 class="selected-price">
                        $${room.roomPrice} 
                        <span>Per Night</span>
                    </h2>

                    <div class="booking-form">
                        <h3>Book This Room</h3>
                        <p>Choose the number of places and your stay dates</p>

                        <form id="roomBookingForm">

                            <div class="form-group">
                                <input type="number"
                                       class="form-control"
                                       placeholder="Number of places"
                                       id="bookingPlaces"
                                       min="1"
                                       max="${room.roomCapacity}" />
                                       <span id="capacityError"></span>
                                       <span id="placesError"></span>
                            </div>

                            <div class="form-group">
                                <input type="date"
                                       class="form-control"
                                       id="bookingStartDate" />
                                       <span id="startDateMessage"></span>
                                       <span id="startDateError"></span>
                            </div>

                            <div class="form-group">
                                <input type="date"
                                       class="form-control"
                                       id="bookingEndDate" />
                                       <span id="endDateError"></span>
                                       <span id="dateError"></span>
                            </div>
                            <div>
                            <span id="datesError"></span>
                            </div>

                            <div class="form-group">
                                <input type="text"
                                       class="form-control"
                                       value="Room capacity: ${room.roomCapacity}"
                                       readonly />
                            </div>

                            <div class="form-group">
                                <input type="text"
                                       class="form-control"
                                       value="Availability: ${room.roomAvailability}"
                                       readonly />
                            </div>

                            <div class="col-md-12 text-center mb-3" id="bookingMessage"></div>

                            <button class="btn btn-block btn-orange w-100"
                                    type="button"
                                    onclick="confirmRoomBooking()">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            `;

            break;
        }
    }

    document.getElementById("detailRoom").innerHTML = content + booking;
    
}
function confirmRoomBooking() {
    var roomsTab = JSON.parse(localStorage.getItem("rooms")) || [];
    var roomId = localStorage.getItem("displayRoomId");
    var connectedUserId = localStorage.getItem("connectedUserId");

    var places = document.getElementById("bookingPlaces").value;
    var startdate = document.getElementById("bookingStartDate").value;
    var endDate = document.getElementById("bookingEndDate").value;
    var foundedRoom = {};

    for (let i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id == roomId) {
            foundedRoom = roomsTab[i];
            break;
        } 
    }
    var placesValidate =  validateRequired(places, "placesError", "Number of places is required.");
    places = Number(places);
    var capacityValidate = validateMax(places, foundedRoom.roomCapacity, "capacityError", "Number of places exceeds room capacity.");
    var startDateValidate = validateRequired(startdate, "startDateError", "Please select  start date.") ;
    var endDateValidate = validateRequired(endDate, "endDateError", "Please select  end date.");
    var dateValidate = validateDateRange(startdate, endDate, "dateError","End date must be after start date");
    if (placesValidate && capacityValidate && startDateValidate && endDateValidate && dateValidate ) {
        var bookingTab = JSON.parse(localStorage.getItem("bookings")) || [];
        var booking = {
            id: generateId(bookingTab),  
            roomId: roomId,
            places: places,
            startDate: startdate,
            endDate: endDate,
            idClient: connectedUserId
        };
        bookingTab.push(booking);
        localStorage.setItem("bookings", JSON.stringify(bookingTab));   
    }
}
function validateRequired(value, errorId, message) {
    if (!value || value.trim() === "") {
        showError(errorId, message);
        return false;
    } else {
        clearError(errorId);
        return true;
    }
}
function validateMax(value, max, errorId, message) {
    if (Number(value) > Number(max)) {
        showError(errorId, message);
        return false;
    } else {
        clearError(errorId);
        return true;
    }
}
function validateDateRange(start, end, errorId, message) {
    if (new Date(start) >= new Date(end)) {
        showError(errorId, message);
        return false;
    } else {
        clearError(errorId);
        return true;
    }
}