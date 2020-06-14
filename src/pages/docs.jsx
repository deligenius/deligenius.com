import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/Layout"
import Header from "../layouts/Header"
import Body from "../layouts/Body/index"
import Footer from "../layouts/Footer"

const DocsPage = (props) => {
  console.log(props)
  let { pathname } = props.location
  // let slug = pathname === "/docs" ? "/docs/getting-started" : pathname
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
