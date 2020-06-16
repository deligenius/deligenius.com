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
    route: string
  }
}

const Body: React.FC<Props> = props => {
  const [activate, setActivate] = React.useState(false)

  const handleClickFloatMenu = () => {
    let _activate = activate
    setActivate(!_activate)
  }

  const activeModal = activate ? "is-active" : ""
  const activeIcon = activate ? "fa-times" : "fa-list-ul"

  return (
    <section className="section ">
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth mr-6 is-hidden-mobile">
            <Menu mdx={props.mdx} />
          </div>
          {/* float menu modal*/}
          <div className={`modal  ${activeModal}`}>
            <div
              className="modal-background"
              onClick={handleClickFloatMenu}
            ></div>
            <div className="modal-card" style={{ overflowY: "scroll" }}>
              <section className="modal-card-body">
                <Menu mdx={props.mdx} />
              </section>
            </div>
          </div>

          {/* float menu icon*/}
          <div
            className="column is-hidden-tablet"
            style={{
              position: "fixed",
              right: "1rem",
              bottom: "1rem",
              zIndex: 50,
            }}
            onClick={handleClickFloatMenu}
          >
            <a className="button is-primary is-rounded is-medium">
              <span className="icon ">
                <i className={`fa ${activeIcon}`}></i>
              </span>
            </a>
          </div>

          <div className="column">
            <Content mdx={props.mdx} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body
