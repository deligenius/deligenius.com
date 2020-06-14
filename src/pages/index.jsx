import React from "react"

import { Router } from "@reach/router"
import {navigate} from 'gatsby'
import DocsPage from "./docs"
import TutorialPage from "./tutorial"

const IndexPage = ({data}) => {
  navigate("/docs")
  
  return (
    <Router>
      <DocsPage  path="/" data={data}/>
      <DocsPage  path="/docs" data={data}/>
      <TutorialPage  path="tutorial" data={data} />
    </Router>
  )
}

export const pageQuery = graphql`
  query IndexQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default IndexPage
