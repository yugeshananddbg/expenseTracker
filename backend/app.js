const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

//route import
const expense = require("./routes/expenseRoute.js");
app.use("/api/v1/", expense);
app.use(express.static(path.join(__dirname, "../tutorial/build")));
app.get("*", (req,res)=>{
  res.sendFile(path.resolve(__dirname, "../tutorial/build/index.html"))
})
module.exports = app;
