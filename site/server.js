import path from "path";
import http from "http";
import express from "express";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;
const app = express();

const server = http.createServer(app);

app.use(express.static(path.join(__dirname, "public")));

server.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

