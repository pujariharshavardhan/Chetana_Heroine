let images = [
    "hotel.jpg",
    "hotel2.jpg",
    "hotel3.jpg",
    "hotel4.jpg",
    "hotel5.jpg"
];

let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("heroImage").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("heroImage").src = images[index];
}
function openDatePopup() {
    document.getElementById("datePopup").style.display = "flex";
}

function closeDatePopup() {
    document.getElementById("datePopup").style.display = "none";
}



document.addEventListener("DOMContentLoaded", function () {

const btn = document.getElementById("locationsBtn");
const menu = document.getElementById("locationsMenu");
const destinationInput = document.getElementById("destinationInput");

// Dropdown
btn.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("show");
});

// Select city
const items = document.querySelectorAll("#locationsMenu a");

items.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        const city = this.textContent;

        destinationInput.value = city;
        btn.textContent = city + " ▾";

        localStorage.setItem("selectedCity", city);

        menu.classList.remove("show");
    });
});

// Load saved city
const savedCity = localStorage.getItem("selectedCity");

if (savedCity) {
    destinationInput.value = savedCity;
    btn.textContent = savedCity + " ▾";
}

});



// CONFIRM
function confirmBooking() {
alert("Booking Confirmed ✅");
}

// LOGIN
function login() {

const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;

if (user === "admin" && pass === "1234") {
alert("Login Successful");
window.location.href = "index.html";
} else {
alert("Invalid Credentials");
}
}

// RESERVE BUTTON
function goToBooking() {
window.location.href = "booking.html";
}
let rooms = 1;
let adults = 1;
let children = 0;

// OPEN / CLOSE BOX
function toggleRoomBox() {
    document.getElementById("roomBox").classList.toggle("show");
}

// CHANGE VALUES
function changeValue(type, value) {

    if (type === "rooms") {
        rooms = Math.max(1, rooms + value);
        document.getElementById("roomsCount").innerText = rooms;
    }

    if (type === "adults") {
        adults = Math.max(1, adults + value);
        document.getElementById("adultsCount").innerText = adults;
    }

    if (type === "children") {
        children = Math.max(0, children + value);
        document.getElementById("childrenCount").innerText = children;
    }
}

// APPLY SELECTION
function applyRooms() {

    let summary = `${rooms} Room${rooms > 1 ? "s" : ""}, ${adults} Adult${adults > 1 ? "s" : ""}, ${children} Children`;

    document.getElementById("roomSummary").innerText = summary;

    document.getElementById("roomBox").classList.remove("show");
}
document.addEventListener("DOMContentLoaded", function () {
    let checkin = document.getElementById("checkin");

    if (checkin) {
        checkin.min = new Date().toISOString().split("T")[0];
    }
});
document.addEventListener("DOMContentLoaded", function () {

    let isLoggedIn = localStorage.getItem("isLoggedIn");
    let user = localStorage.getItem("loggedUser");

    let userDisplay = document.getElementById("userDisplay");
    let loginBtn = document.getElementById("loginBtn");
    let logoutBtn = document.getElementById("logoutBtn");

    if (isLoggedIn === "true") {
        if (userDisplay) userDisplay.innerHTML = "Welcome, " + user;
        if (logoutBtn) logoutBtn.style.display = "inline-block";
        if (loginBtn) loginBtn.style.display = "none";
    } else {
        if (logoutBtn) logoutBtn.style.display = "none";
        if (loginBtn) loginBtn.style.display = "inline-block";
        if (userDisplay) userDisplay.innerHTML = "";
    }
});

// BOOKING
function bookNow() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    let destination = document.getElementById("destinationInput").value;
    let checkin = document.getElementById("checkin").value;
    let checkout = document.getElementById("checkout").value;

    if (!destination || !checkin || !checkout) {
        alert("Please fill all details!");
        return;
    }

    let roomType = localStorage.getItem("selectedRoom") || "Deluxe Room";
let roomCount = rooms;

// ✅ GET PRICE FROM STORAGE
let price = parseInt(localStorage.getItem("roomPrice")) || 0;

// ✅ TOTAL
let totalCost = price * roomCount;

    let roomNumbers = [];
    for (let i = 0; i < roomCount; i++) {
        roomNumbers.push(100 + Math.floor(Math.random() * 50));
    }

    let booking = {
    user: localStorage.getItem("loggedUser"),
    destination,
    checkin,
    checkout,
    roomType,
    rooms: roomCount,
    price,          // ✅ add this
    total: totalCost,
    roomNumbers

    };

    localStorage.setItem("booking", JSON.stringify(booking));

    window.location.href = "booking.html";
}
    
// SHOW BOOKING DETAILS
window.addEventListener("DOMContentLoaded", function () {

    let booking = JSON.parse(localStorage.getItem("booking"));
    let user = localStorage.getItem("loggedUser");

    let bookingDiv = document.getElementById("bookingDetails");

    // ONLY run if booking page exists
    if (!bookingDiv) return;

    if (!booking || booking.user !== user) {
        bookingDiv.innerHTML = "<h3>No booking found for this user</h3>";
        return;
    }

    bookingDiv.innerHTML = `
        <p><b>Name:</b> ${booking.user}</p>
        <p><b>Destination:</b> ${booking.destination}</p>
        <p><b>Check-in:</b> ${booking.checkin}</p>
        <p><b>Check-out:</b> ${booking.checkout}</p>
        <p><b>Room:</b> ${booking.roomType}</p>
    `;
});
function openRooms() {
    window.location.href = "room.html";
}

document.addEventListener("DOMContentLoaded", function () {

    let selectedRoom = localStorage.getItem("selectedRoom");

    if (selectedRoom) {
        document.getElementById("roomType").value = selectedRoom;
    }
});
document.addEventListener("DOMContentLoaded", function () {

    let destination = document.getElementById("destinationInput");
    let checkin = document.getElementById("checkin");
    let checkout = document.getElementById("checkout");

    // SAVE when typing
    destination.addEventListener("input", () => {
        localStorage.setItem("destinationInput", destinationInput.value);
    });

    checkin.addEventListener("change", () => {
        localStorage.setItem("checkin", checkin.value);
    });

    checkout.addEventListener("change", () => {
        localStorage.setItem("checkout", checkout.value);
    });

});
document.addEventListener("DOMContentLoaded", function () {

    let destination = localStorage.getItem("destinationInput");
    let checkin = localStorage.getItem("checkin");
    let checkout = localStorage.getItem("checkout");

    if (destination) {
        document.getElementById("destinationInput").value = destination;
    }

    if (checkin) {
        document.getElementById("checkin").value = checkin;
    }

    if (checkout) {
        document.getElementById("checkout").value = checkout;
    }

});
function logoutUser() {
    localStorage.clear(); // clears everything

    alert("Logged out successfully!");
    window.location.reload();
}
function openDining(){
    window.location.href = "dining.html";
}
function checkLoginForDining() {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        alert("Please login first to reserve a table!");
        window.location.href = "login.html";
    } else {
        window.location.href = "dining.html";
    }
}
function checkLoginRoom() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        alert("Please login first to view rooms!");
        window.location.href = "login.html";
    } else {
        window.location.href = "room.html";
    }
}
function goToBooking(){
    if(selectedRooms.length === 0){
        alert("Please select at least one room!");
        return;
    }

    window.location.href = "hotel.html";
}
function openWellness() {

    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        alert("Please login first!");
        window.location.href = "login.html";
        return;
    }

    window.location.href = "wellness.html";
}
function toggleMenu() {
    document.querySelector(".main-nav").classList.toggle("active");
}