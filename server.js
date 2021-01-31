//
// could use a random number generator but I thought I'd try uuid

const { uuid } = require("uuidv4");
const path = require("path");
const fs = require("fs");
const express = require("express");
const { json } = require("express");

const app = express();

//
// for deployment use process port elese 3001

const PORT = process.env.PORT || 3001;

//
// define some known paths

const html_path = path.join(__dirname, "../develop/public");
const db_file = path.join(__dirname, "../develop/db/db.json");

console.log("html path: ", html_path);
console.log("db path: ", db_file);
console.log(path.join(__dirname, "/index.html"));

//
// middleware

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

//

// const myNotes = [
//     {
//         id: "1",
//         title: "title1",
//         text: "text1"
//     }
// ];

//
// html routes to serve html pages

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

//
// api calls
// get all notes and send back

//
// read all notes

app.get("/api/notes", (req, res) => {
    //#region example of asynch read
    // read file will be string, readFile asynch below, keep for reference

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

    //     res.json(myNotes);
    // } )
    //#endregion

    try {
        //#region example synch readfile
        // took this readfile Synch and made a function to reuse

        // const data = fs.readFileSync(db_file, { encoding: "ascii", flag: "r" });

        // var notes = JSON.parse(data);

        // notes.forEach(element => {
        //     console.log(element.id);
        //     console.log(element.title);
        //     console.log(element.text);

        //     // element.id = uuid();
        //     // myNotes.push(element);

        //     console.log("element", element);
        // });

        // console.log("after push myNotes: ", myNotes);
        //#endregion

        var notes = read_all_notes(db_file);
        
        res.json(notes);

    } catch (err) {
        console.error(err);
    }

    console.log("before return Notes: ", notes);
})


//
// add a new note (note the post)

app.post("/api/notes", (req, res) => {

    const newNote = req.body;
    newNote.id = uuid();
    console.log(newNote);

    const myNotes = read_all_notes(db_file);

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

//
// delete a note by id

app.delete("/api/notes/:id", (req,res) => {
    
    console.log("param id read: ", req.params.id);
    const note_id = req.params.id
    console.log("set to id ", note_id);

    var notes = read_all_notes(db_file);
        
    res.json(notes);
})


//
// utilities

function read_all_notes(file_name) {
    try {
        const data = fs.readFileSync(file_name, { encoding: "ascii", flag: "r" });

        var notes = JSON.parse(data);

        notes.forEach(element => {
            console.log(element.id);
            console.log(element.title);
            console.log(element.text);

            // element.id = uuid();
            // myNotes.push(element);
        })
    } catch (err) {
        console.error(err);
    }

    return(notes)
}


//
// start the listener

app.listen(PORT, () => {
    console.log("server is listening " + PORT);
})
