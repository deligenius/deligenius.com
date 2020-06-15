import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
import components from "./components/components"
import "./styles.css"

const Layout = ({ mdx }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{mdx.frontmatter.title}</title>
      </Helmet>
      {/* <h1>{mdx.frontmatter.title}</h1> */}
      <div className="markdown-body">
        <MDXProvider components={components}>
          <MDXRenderer class="markdown-body">{mdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </>
  )
}

export default Layout
