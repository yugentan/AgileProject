const express = require("express");
const config = require("dotenv");
const cors = require("cors");
const bodyparser = require("body-parser");
const user = require("./route/userRoute")
const app = express();
app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(user)
config.config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log(`App is live on PORT: ${process.env.PORT}`);
});
