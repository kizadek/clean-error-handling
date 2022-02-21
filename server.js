const express = require("express");
require("colors");

const morgan = require("morgan");
const {
  notFoundMiddleware,
  errorHandleMiddleware,
} = require("./app/middleware");
const app = express();
//middleware
app.use(express.json()); // json passer

app.use(morgan("dev"));

//mount routes

//errors
app.use(errorHandleMiddleware);
app.use(notFoundMiddleware);

//setting up port
const PORT = 3000;

app.listen(PORT, () =>
  console.log(`server is running on prot:: ${PORT}...`.cyan)
);
