import React from "react"
import { Link } from "@reach/router"

interface Menu {
  category: string
  menuItems: MenuItem[]
}

interface MenuItem {
  label: string
  toggle?: boolean
  items?: MenuItem[]
}

const docsMenu: Menu = {
  category: "docs",
  menuItems: [
    {
      label: "Installation",
      toggle: true,
      items: [{ label: "Getting Started" }, { label: "Hello" }],
    },
  ],
}

/* ----------------------------- Side Menu class ---------------------------- */

class SideMenu extends React.Component<
  null,
  { category: string; menuItems: MenuItem[]; activeItem: MenuItem }
> {
  constructor(props: any) {
    super(props)
    this.state = {
      category: docsMenu.category,
      menuItems: docsMenu.menuItems,
      activeItem: { label: "Getting Started" },
    }
  }

  handleClickMenuLabel(label: string) {
    let newMenuItems = this.state.menuItems.map(item => {
      if (item.label === label) {
        item.toggle = !item.toggle
      }
      return item
    })
    this.setState({ menuItems: newMenuItems })
  }

  displayItems(items: MenuItem[] | undefined) {
    if (!items || items.length < 1) {
      return
    } else {
      // display article label title
      let { category } = this.state
      let windowPath =
        window.location.pathname.match(/^\/docs\/?$/)
          ? "/docs/getting-started"
          : window.location.pathname

      return (
        <ul>
          {items.map(item => {
            let hashLabel = item.label.toLowerCase().split(" ").join("-")
            let path = `/${category}/${hashLabel}`
            let active = path === windowPath

            return (
              <li key={item.label}>
                <Link className={active ? "is-active" : ""} to={path}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )
    }
  }

  render() {
    let { menuItems, category } = this.state

    return (
      <aside className="menu" style={{ borderRight: "1px solid lightgrey" }}>
        <ul className="menu-list">
          {menuItems.map(item => {
            let { items, label, toggle } = item

            return (
              <li key={label}>
                <a
                  onClick={this.handleClickMenuLabel.bind(this, label)}
                  className="has-text-weight-medium is-uppercase"
                >
                  {/* table of content label */}
                  <span>{label}</span>
                  <span className="icon">
                    <i
                      className={`fa fa-angle-${toggle ? "up" : "down"} lg`}
                    ></i>
                  </span>
                </a>

                {toggle && this.displayItems(items)}
              </li>
            )
          })}
        </ul>
      </aside>
    )
  }
}

export default SideMenu
