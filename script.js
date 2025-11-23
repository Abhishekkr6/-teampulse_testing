(function () {
    const toggleButton = document.getElementById("toggle-button");
    const card = document.querySelector(".card");
    const message = document.getElementById("card-message");
    const yearDisplay = document.getElementById("year");

    if (yearDisplay) {
        yearDisplay.textContent = new Date().getFullYear();
    }

    if (!toggleButton || !card || !message) {
        return;
    }

    toggleButton.addEventListener("click", () => {
        const isActive = card.classList.toggle("highlight");
        message.textContent = isActive
            ? "Highlight is active. Click again to reset."
            : "Highlight removed. Click to enable it again.";
    });
})();
