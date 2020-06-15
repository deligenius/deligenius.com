import React from "react"

import { Router } from "@reach/router"
import { navigate } from "gatsby"
import DocsPage from "./docs"
import TutorialPage from "./tutorial"

const IndexPage = ({ data }) => {
  React.useEffect(() => {
    navigate("/docs/installation")
  })
  return (
    <Router>
      <DocsPage path="/docs" data={data} />
      {/* <TutorialPage  path="tutorial" data={data} /> */}
    </Router>
  )
}

export default IndexPage
