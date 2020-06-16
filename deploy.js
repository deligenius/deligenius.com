const path = require("path")
const fs = require("fs")
const ncp = require("ncp").ncp

fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })

fs.renameSync("public", "docs")
fs.copyFileSync("CNAME", "docs/CNAME")
