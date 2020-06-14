import React from "react"
import Menu from "./SideMenu"
import Content from "./Content"

export interface Props {
  mdx: MDX
}

export type MDX = {
  id: string
  body: string
  frontmatter: {
    title: string
  }
}

class Body extends React.Component<Props> {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth mr-6">
              <Menu />
            </div>
            <div className="column">
              <Content mdx={this.props.mdx} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Body
