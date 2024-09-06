document.addEventListener("DOMContentLoaded", function () {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const dropdown = document.getElementById("dropdown");
    const niceBtn = document.getElementById("niceBtn");
    const message = document.getElementById("message");
    const places = document.getElementById("places");

    // Ensure dropdown is hidden on page load
    dropdown.classList.add("hidden");

    // When "Yes" is clicked, show the dropdown
    yesBtn.addEventListener("click", function () {
        dropdown.classList.remove("hidden");
    });

    // Show "Oh nice!" button after a place is selected
    places.addEventListener("change", function () {
        niceBtn.classList.remove("hidden");
    });

    // Show message after "Oh nice!" button is clicked
    niceBtn.addEventListener("click", function () {
        const selectedPlace = places.value;
        if (selectedPlace !== "select") {
            message.textContent = `Let's meet at ${selectedPlace} in coming October. See you soon, take care!`;
            message.classList.remove("hidden");

            // Hide the "Oh nice!" button and dropdown
            niceBtn.classList.add("hidden");
            dropdown.classList.add("hidden");
        }
    });

    // Move the "No" button when hovered or clicked
    noBtn.addEventListener("mouseover", moveButton);
    noBtn.addEventListener("click", moveButton);

    function moveButton() {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        noBtn.style.position = "absolute";
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // Apply animation for movement
        noBtn.style.animation = "moveAround 1s ease-in-out";
    }
});
