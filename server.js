const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(path.resolve(__dirname, "src")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});

app.listen(port, (err, res) => {
  if (err) return console.error(err);
  console.log(`Listening on port http://127.0.0.1:${port}`);
});
