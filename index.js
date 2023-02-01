const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => [res.send("Home Page")]);

app.listen(8080, () => {
  console.log(`Server is running at port 8080`);
});
