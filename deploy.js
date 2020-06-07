const path = require("path")
const fs = require("fs")
const ncp = require("ncp").ncp

fs.rmdirSync(path.join(__dirname, "docs"), { recursive: true })
fs.mkdirSync("docs")

ncp.limit = 16

ncp(path.join(__dirname, "public"), path.join(__dirname, "docs"), function (
  err
) {
  if (err) {
    return console.error(err)
  }
  console.log("done!")
})
