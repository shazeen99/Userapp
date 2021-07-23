const {User} = require("./db")
const express = require("express")
const crypto = require("crypto");

const app = express()




function generateSalt() {
    return crypto.randomBytes(16).toString("hex");
}
function getPasswordHashAndSalt(password) {
    const salt = generateSalt();
    const passwordHash = hashPassword(password, salt);
    return { passwordHash, salt };
}
function hashPassword(password, salt) {
    return crypto
        .pbkdf2Sync(password, salt, 1000, 64, "sha256")
        .toString("base64");
}
function passwordIsCorrect(password, salt, passwordHash) {
    hashPassword(password, salt) === passwordHash;
}

app.post("/users", async (req, res) => {
    const {username, password} = req.body
    getPasswordHashAndSalt(password)
    await User.create({username, passwordHash, salt})
    res.sendStatus(201);
  });
module.exports = app

