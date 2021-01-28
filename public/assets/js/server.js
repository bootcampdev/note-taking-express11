const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const html_path = path.join(__dirname, "../../");
const db_file = path.join(__dirname, "../../../db/db.json");

console.log("html path" , html_path);
console.log("db path" , db_file);
console.log(path.join(__dirname, "../../index.html"));

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// html routes
//
app.get("/", (req, res) => {
    console.log(req.url);
    //res.send('success');
    res.sendFile( path.join(html_path, "/index.html"));
})

app.get("/notes", (req, res) => {
    console.log(req.url);
    //res.send('success');
    res.sendFile( path.join(html_path, "/notes.html"));
})

// api calls
//
app.get("/api/notes", (req, res) => {

    fs.readFile(db_file, "ascii", (err, data) => {
        if (err) throw err;
        console.log("data is ", data);
    } )

    res.send('success');
    //res(data);
})

// start the listener
//
app.listen(PORT, () => {
    console.log("server is listening " + PORT);
})
