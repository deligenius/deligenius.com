import React from "react"

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Deligenius</strong> by{" "}
            <a href="https://github.com/gjuoun">John Guo</a>. The source code is
            licensed {" "}
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
          </p>
        </div>
      </footer>
    )
  }
}

export default Footer
