import React from "react"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import vsDark from "prism-react-renderer/themes/vsDark"

const Pre = styled.pre`
  text-align: left;
  margin: 1rem 0;
  padding: 0.5em;
  /* overflow-x: scroll; */
`

export default ({ children, className }) => {
  // console.log("code", children)
  let language
  if (className) {
    language = className.replace(/language-/, "")
  } else {
    language = ""
  }

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  )
}
