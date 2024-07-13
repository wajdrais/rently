require("dotenv").config();
const express = require("express");
const configuration = require("./Config/Config");
const Productrouter = require("./router/productrouter");
const Userrouter = require("./router/userrouter");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

configuration();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/user", Userrouter);
app.use("/product", Productrouter);

const errorHandler = require("./middleware/errorHandler");
// other middleware
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on ${port}`));
