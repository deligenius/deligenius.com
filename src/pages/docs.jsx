import React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../layouts/Layout"
import Header from "../layouts/Header"
import Body from "../layouts/Body/index"
import Footer from "../layouts/Footer"

const DocsPage = props => {
  let mdx = props.data.mdx

  return (
    <Layout>
      <Header />
      <Body mdx={mdx}></Body>
      <Footer></Footer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocsQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        route
      }
    }
  }
`

export default DocsPage
