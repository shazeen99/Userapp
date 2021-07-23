const bcrypt = require('bcrypt')
const User = require("./db")
const express = require("express")

const app = express()

app.post("/users", async (req, res) => {
    const {username, password} = req.body
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(username, password, hash)
    res.sendStatus(201);
  });
//bcrypt.hash('password101', 10).then(console.log)


//checking hash
// bcrypt
//     .compare(
//         "password101",
//         "$2b$10$AQXoVkfzAovJ9RHTtmd6N.Yegy3V9ALTlYDcCM76HxBqq044q6xLK"
//     )
//     .then(console.log);