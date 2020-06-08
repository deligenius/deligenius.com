import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Header from "./header"
import "./styles/styles.css"

import components from "./MDXComponents"

const Layout = ({ children, pageContext, ...props }) => {
  const data = useStaticQuery(graphql`
    query MDXSiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        edges {
          node {
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
  let title = pageContext.frontmatter.title || data.site.siteMetadata.title
  // console.log(data)
  // console.log("props", props)
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <MDXProvider components={components} path="/getting-started">
        <Header siteTitle={title} />
        {children}
      </MDXProvider>
    </div>
  )
}

export default Layout
