require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/article.routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 5050;
const atlas_uri = "mongodb+srv://1234:1234@microservices.rjvap.mongodb.net/Blog?retryWrites=true&w=majority"
const mongodb_uri = atlas_uri || process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongodb_uri,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .catch(err => console.log(err))
const db = mongoose.connection
db.once("open", () => console.log("Connected to MongoDB successfully!"));

// Parse Request Body
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json())

app.use(express.static(__dirname + "/public"))
//------------API------------------
app.use("/api/v1/blog", routes)

//--------------------------------------
app.get("/", (req, res)=>{
    res.send("Hello, There!");
})

app.listen(port, console.log(`Server running on ${port}`));