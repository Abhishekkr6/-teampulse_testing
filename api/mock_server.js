import http from "http";
import fs from "fs";
import path from "path";

const dataPath = path.resolve(process.cwd(), "data", "mockdata.json");
const cache = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const server = http.createServer((req, res) => {
    if (req.url === "/health") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok", entries: cache.length }));
        return;
    }

    if (req.url === "/dataset") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(cache));
        return;
    }

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "not found" }));
});

const port = Number(process.env.PORT || 4100);
server.listen(port, () => {
    console.log(`Mock server listening on ${port}`);
});
