const express = require("express");
const app = express();
app.use(express.json());

const calculationscontroller = require("./controller/calculationscontroller");

app.get("/", (req, res) => {
  res.send("Hello Hng stage 3 task is running!");
});

app.post("/calc", calculationscontroller);

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
