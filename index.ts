import express from "express";

const app = express();

const port = process.env.PORT || 3333;

app.use("/", express.static("web"));

app.listen(port, () => console.log("Its running."));
