const path = require("path");
const fs = require("fs");
const express = require("express");
const { json } = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const html_path = path.join(__dirname, "../public");
const db_file = path.join(__dirname, "../develop/db/db.json");

console.log("html path: " , html_path);
console.log("db path: " , db_file);
console.log(path.join(__dirname, "/index.html"));

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//

const myNotes = [
    {
        title: "title1",
        text: "text1"
    }
];

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

        var notes = JSON.parse(data);

         notes.forEach(element => {
            console.log(element.title);
            console.log(element.text);            
        });


    } )

    //console.log(notes);
    //res.send('success');
    //res.json(notes);
    res.json(myNotes);
})

//app.post

// start the listener
//
app.listen(PORT, () => {
    console.log("server is listening " + PORT);
})
