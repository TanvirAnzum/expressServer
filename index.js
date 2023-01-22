const express = require("express");
const cors = require("cors");

// app initialization
const app = express();
const port = 9000;

// middlewares
app.use(cors());
app.use(express.json());

// endpoints
app.get("/get_name", (req, res) => {
  res.send("Hello from getName");
});

app.post("/save_user", (req, res) => {
  res.send("Hello from saveUser");
});

app.listen(port, () => {
  console.log("Server is listening on port" + port);
});
