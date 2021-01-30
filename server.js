const path = require("path");
const fs = require("fs");
const express = require("express");
const { json } = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

const html_path = path.join(__dirname, "../develop/public");
const db_file = path.join(__dirname, "../develop/db/db.json");

console.log("html path: ", html_path);
console.log("db path: ", db_file);
console.log(path.join(__dirname, "/index.html"));

// middleware
app.use(express.urlencoded({ extended: true }))
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
    res.sendFile(path.join(html_path, "/index.html"));
})

app.get("/notes", (req, res) => {
    console.log(req.url);
    //res.send('success');
    res.sendFile(path.join(html_path, "/notes.html"));
})

// api calls
// get all notes and send back
//
app.get("/api/notes", (req, res) => {
    //
    // read file will be string, readFile

    // fs.readFile(db_file, "ascii", (err, data) => {
    //     if (err) throw err;
    //     console.log("data is ", data);

    //     var notes = JSON.parse(data);

    //      notes.forEach(element => {
    //         console.log(element.title);
    //         console.log(element.text);  

    //         myNotes.push(element);

    //         console.log("element", element);            
    //     });

    //     console.log("after push myNotes: ",myNotes);
    //     res.json(myNotes);
    //     //res.send(JSON.stringify(notes));
    // } )

    try {
        const data = fs.readFileSync(db_file, { encoding: "ascii", flag: "r" });

        var notes = JSON.parse(data);

        notes.forEach(element => {
            console.log(element.title);
            console.log(element.text);

            myNotes.push(element);

            console.log("element", element);
        });

        console.log("after push myNotes: ", myNotes);
        res.json(myNotes);
    } catch (err) {
        console.error(err);
    }

    console.log("before return myNotes: ", myNotes);
    //res.json(myNotes);
})

// add a new note
//
app.post("/api/notes", (req, res) => {

    const newNote = req.body;
    console.log(newNote);

    myNotes.push(newNote);

    fs.writeFile(db_file, JSON.stringify(myNotes), (err) => {
        if (err) {
            console.log(err);
            res.status(500).send();
        }
    })

    console.log(myNotes);
    res.status(200).send();
})


// start the listener
//
app.listen(PORT, () => {
    console.log("server is listening " + PORT);
})
