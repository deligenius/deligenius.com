import React from "react"
// global css import
import "bulma/css/bulma.css"
import 'font-awesome/css/font-awesome.css'
import "./styles.css"

class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>
  }
}

export default Layout