import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import components from "./components/components"

// export type MDX = {
//   id: string
//   body: string
//   frontmatter: {
//     title: string
//   }
// }

const Layout = ({ mdx }) => {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{mdx.frontmatter.title}</title>
      </Helmet>
      {/* <h1>{mdx.frontmatter.title}</h1> */}
      <MDXProvider components={components}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default Layout
