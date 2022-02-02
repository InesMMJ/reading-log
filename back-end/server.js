const express = require("express");
const cors = require("cors");

//const { errorHandling } = require("./middleware");
const apiRouter = require("./routes");

const app = express();

const PORT = process.env.SERVER_PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

//app.use(errorHandling.handleError);

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
