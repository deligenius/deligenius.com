import React from "react"
import Layout from "../layouts/Layout"
import Header from "../layouts/Header"
import Body from "../layouts/Body/index"
import Footer from "../layouts/Footer"

const DocsPage = ({ data: { mdx } }) => {
  console.log(mdx)

  return (
    <Layout>
      <Header />
      <h2>Docs</h2>
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
      }
    }
  }
`

export default DocsPage
