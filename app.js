const express = require("express");
const app = express();
app.use(express.json());

app.use("/", Router);

app.listen(5000, () => {
  console.log("server is listening on port 5000..");
});
