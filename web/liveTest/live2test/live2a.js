(function () {
    const status = document.getElementById("status");
    const simulateButton = document.getElementById("simulate");
    const resetButton = document.getElementById("reset");

    if (!status || !simulateButton || !resetButton) {
        return;
    }

    const updateStatus = (message, state) => {
        status.textContent = `Status: ${message}`;
        status.className = `status ${state}`.trim();
    };

    simulateButton.addEventListener("click", () => {
        updateStatus("processing", "active");
        setTimeout(() => {
            const succeeded = Math.random() > 0.35;
            updateStatus(succeeded ? "success" : "failed", succeeded ? "active" : "error");
        }, 1100);
    });

    resetButton.addEventListener("click", () => {
        updateStatus("idle", "");
    });
})();
