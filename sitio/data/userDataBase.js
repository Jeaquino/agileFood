const fs = require("fs");
const path = require ("path");

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, "/userDataBase.json"), "utf-8"));