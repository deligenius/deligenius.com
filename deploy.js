const path = require("path")
const fs = require("fs")
const ncp = require("ncp").ncp

// copy /public to /docs
function deploy() {
  fs.rmdir(
    path.join(__dirname, "docs"),
    { recursive: true, retryDelay: 500 },
    err => {
      if (!err) {
        fs.mkdirSync("docs")
        ncp(
          path.join(__dirname, "public"),
          path.join(__dirname, "docs"),
          function (err) {
            if (err) {
              return console.error(err)
            }
            console.log("done!")
          }
        )
      }
    }
  )

  ncp.limit = 16
}

deploy()
