const express = require("express");
const {dbConnection} = require("./db/db");
require("dotenv").config();
const Role = require("./routers/role");

const app = express();

app.use(express.json());
app.use("/api/role", Role);


app.listen(process.env.PORT,()=>{
    console.log("Backend server running on port: " + process.env.PORT);
})

dbConnection();