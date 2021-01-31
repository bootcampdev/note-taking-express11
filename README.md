# Note-Taking-Express
<img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
<img alt="jQuery" src="https://img.shields.io/badge/jquery%20-%230769AD.svg?&style=for-the-badge&logo=jquery&logoColor=white"/>
 <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
 <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
 <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
 <img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?&style=for-the-badge&logo=bootstrap&logoColor=white"/>
 <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/>

 

![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

![Mozilla](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)


# Note-Taking-Express-11


## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

The application frontend has already been created, it's your job to build the backend and connect the two.

The following HTML routes should be created:

GET /notes - Should return the notes.html file.

GET * - Should return the index.html file

The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

The following API routes should be created:

GET /api/notes - Should read the db.json file and return all saved notes as JSON.

POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



## Table of Contents

- [Installation](#installation-requirements)
- [Usage](#usage)
- [Application Repo](#application-repository)
- [Questions?](#questions)
- [License](#license)


## Installation Requirements

$ node install inquirer


$ node install express

$ node install uuid




## Usage
```md
Deployment is using Heroku for our public server

https://fast-lowlands-81468.herokuapp.com/

```



## Questions

[GitHub Account](https://github.com/bootcampdev)


<p><a href="mailto:kimberleyheuer@hotmail.com">eMail Contact</a></p>


## Contributing

* The URL of the deployed application. This should be the link to the url provided by Heroku. Be sure not to submit a link to the Heroku dashboard.

* The URL of the GitHub repository


## Application Repository

[note-taking-express11](https://github.com/bootcampdev/note-taking-express11/)

## License

The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology in the late 1980s.

The Mozilla Public License is a free and open-source software license developed and maintained by the Mozilla Foundation.

---
### Last update

Sun Jan 31 2021 16:58:01 GMT-0600 (Central Standard Time)