import React from "react"
import { Link } from "@reach/router"
import { Props } from "./index"

interface Menu {
  category: string
  menuItems: MenuItem[]
}

interface MenuItem {
  label: string
  route?: string
  toggle?: boolean
  items?: MenuItem[]
}

const docsMenu: Menu = {
  category: "docs",
  menuItems: [
    {
      label: "Getting Started",
      toggle: true,
      items: [
        {
          label: "Installation",
          route: "/docs/installation",
        },
        {
          label: "Benchmark",
          route: "/docs/benchmark",
        },
        { label: "Hello World", route: "/docs/hello-world", },
        { label: "Basic Routing", route: "/docs/basic-routing" },
        { label: "Static Files", route: "/docs/static-files" },
      ],
    },
    {
      label: "Quick Guide",
      toggle: false,
      items: [
        {
          label: "Query & Params",
          route: "/docs/query-parameters",
        },
        {
          label: "Parsing Body",
          route: "/docs/parsing-body",
        },
        {
          label: "Form Data",
          route: "/docs/form-data",
        },
        {
          label: "Use State",
          route: "/docs/state",
        },
        {
          label: "Error Handling",
          route: "/docs/error-handling",
        },
      ],
    },
  ],
}

/* ----------------------------- Side Menu class ---------------------------- */

class SideMenu extends React.Component<
  Props,
  { category: string; menuItems: MenuItem[], lastToggle: string}
> {
  constructor(props: any) {
    super(props)
    this.state = {
      category: docsMenu.category,
      menuItems: docsMenu.menuItems,
      lastToggle: ""
    }
  }

  handleClickMenuLabel(label: string) {
    let newMenuItems = this.state.menuItems.map(item => {
      if (item.label === label) {
        item.toggle = !item.toggle
      }
      return item
    })
    this.setState({ menuItems: newMenuItems, lastToggle: label })
  }

  displayItems(items: MenuItem[] | undefined) {
    if (!items || items.length < 1) {
      return
    } else {
      // display article label title
      return (
        <ul>
          {items.map(item => {
            let active = item.route === this.props.mdx.frontmatter.route

            return (
              <li key={item.label}>
                <Link className={active ? "is-active" : ""} to={item.route}>
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
    let { menuItems } = this.state

    return (
      <aside className="menu" style={{ borderRight: "1px solid lightgrey" }}>
        <ul className="menu-list">
          {menuItems.map(item => {
            let { items, label, toggle } = item
            let activeStyle = this.state.lastToggle === item.label ? { border: "1px solid lightgrey" }: {}
            return (
              <li key={label}>
                <a
                  style={activeStyle}
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



