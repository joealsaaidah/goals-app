const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const connectToDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectToDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalsRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server is listening at port no. ${PORT}`));
