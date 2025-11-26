(function () {
    const conversion = document.getElementById("conversion");
    const latency = document.getElementById("latency");
    const errors = document.getElementById("errors");

    if (!conversion || !latency || !errors) {
        return;
    }

    const tick = () => {
        conversion.textContent = `${(Math.random() * 100).toFixed(1)}%`;
        latency.textContent = `${Math.floor(Math.random() * 420) + 80} ms`;
        errors.textContent = Math.floor(Math.random() * 12);
    };

    tick();
    setInterval(tick, 1500);
})();
