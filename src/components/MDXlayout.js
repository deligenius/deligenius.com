import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"

import components from "./MDXComponents"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MDXSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MDXProvider components={components}>
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
    </MDXProvider>
  )
}

export default Layout
