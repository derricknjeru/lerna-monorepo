const express = require("express");
const port = process.env.port || 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("I am a backed server");
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Error ${error.message}`);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
