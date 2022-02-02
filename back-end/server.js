const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const { errorHandling } = require("./middleware");
const apiRouter = require("./routes");

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(express.json({ limit: "50mb" }));

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(cookieParser());

app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api", apiRouter);
app.use(errorHandling.handleError);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
