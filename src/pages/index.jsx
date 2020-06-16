import React from "react"

import { Router } from "@reach/router"
import { navigate } from "gatsby"
import DocsPage from "./docs"
// import TutorialPage from "./tutorial"

const IndexPage = () => {
  React.useEffect(() => {
    navigate("/docs/installation")
  })
  return (
    <Router>
      <DocsPage path="/docs"  />
      {/* <TutorialPage  path="tutorial" data={data} /> */}
    </Router>
  )
}

export default IndexPage
