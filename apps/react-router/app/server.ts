import express from "express";

import reactRouter from "virtual:react-router/express";

const app = express();
app.use(express.static("public"));

app.get("/.well-known/appspecific/com.chrome.devtools.json", (req, res) => {
  res.status(404);
  res.send("Not found");
});

app.use(reactRouter);

app.listen(3000);
console.log("Server listening on port 3000 (http://localhost:3000)");
