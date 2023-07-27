const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes");
const morgan = require("morgan")
const cors = require("cors")

app.use(express.json());
app.use(morgan("dev"))
app.use(cors())
app.use("/api",routes);

const connect = async()=>{
    await  mongoose.connect("mongodb+srv://admin:admin@cluster0.ya46tst.mongodb.net/userAuth?retryWrites=true&w=majority")
    .then(()=>{
        console.log("DB connected successfully");
    }).catch((err)=>{
        console.log(err);
    })
}

app.listen(5000,()=>{
   console.log("server connected");
   connect();
});

