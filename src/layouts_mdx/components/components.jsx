/*eslint-disable */
import React from "react"
import CodeBlock from "./CodeBlock"
// import styled from 'styled-components'

const BlockQuote = props => {
  return (
    <article className="message ">
      <div className="message-body" {...props}></div>
    </article>
  )
}

export default {
  h1: props => <h1 className="is-size-1" {...props} />,
  h2: props => <h2 className="is-size-2" {...props} />,
  h3: props => <h3 className="is-size-3" {...props} />,
  h4: props => <h4 className="is-size-4" {...props} />,
  h5: props => <h5 className="is-size-5" {...props} />,
  h6: props => <h6 className="is-size-6" {...props} />,
  h7: props => <h7 className="is-size-7" {...props} />,
  pre: props => <div {...props} />,
  code: CodeBlock,
  blockquote: BlockQuote,
}
