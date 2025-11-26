import http from "http";

const phrases = [
    "Deploying nonsense...",
    "Calibrating chaos engine...",
    "Staging reality distortion...",
];

const server = http.createServer((req, res) => {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: phrase, time: new Date().toISOString() }));
});

const port = Number(process.env.PORT || 5050);
server.listen(port, () => {
    console.log(`Mock app streaming on port ${port}`);
});
