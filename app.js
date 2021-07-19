require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/article.routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 5050;
const mongodb_uri = process.env.MONGO_ATLAS || process.env.MONGO_URI;

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

//------------API------------------
app.use("/api/v1/blog", routes)

//--------------------------------------
app.get("/", (req, res)=>{
    res.send("Heroku App is Working");
})

app.listen(port, console.log(`Server running on ${port}`));