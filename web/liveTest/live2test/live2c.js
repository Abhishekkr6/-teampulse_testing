(function () {
    const events = document.getElementById("events");

    if (!events) {
        return;
    }

    const fakeEvents = [
        "Agent connected to shard 7",
        "Configuration sync completed",
        "Error rate spike detected",
        "Rollback initiated for release v2.3.1",
        "Stability restored",
    ];

    let index = 0;

    const appendEvent = (message) => {
        const item = document.createElement("li");
        const stamp = new Date().toLocaleTimeString();
        item.textContent = `[${stamp}] ${message}`;
        events.prepend(item);
    };

    setInterval(() => {
        appendEvent(fakeEvents[index % fakeEvents.length]);
        index += 1;
    }, 1800);
})();
