import http from "http";
import fs from "fs";
import csv from "csv/lib/sync.js";
// import path from "path";

const server = http.createServer(function (request, response) {
    response.setHeader("content-type", "application/json");

    switch (request.method) {
        // Tangani Content-Type terlebih dahulu pada method yang sesuai
        case "POST":
        case "PUT":
            if (request.headers["content-type"] !== "application/json") {
                response.writeHead(415);
                response.end();
                return;
            }

        case "GET":
            const file = fs.readFileSync("back-end/data.csv", { encoding: "utf8" });
            const data = csv.parse(file, { columns: true });
            const dataToBeSent = JSON.stringify(data);
            response.end(dataToBeSent);
            break;
    }
});

const port = 3000;
server.listen(port);
console.log(`Server (API) berjalan pada alamat http://localhost:${port}`);