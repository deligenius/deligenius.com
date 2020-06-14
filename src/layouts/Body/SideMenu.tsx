import React from "react";

interface MenuItem {
  label: string;
  toggle?: boolean;
  items?: MenuItem[];
}

const list: MenuItem[] = [
  {
    label: "Dashboard",
    toggle: true,
    items: [
      { label: "Getting Started" },
      { label: "Plugins" },
      { label: "Add a member" },
    ],
  },
  {
    label: "Installation",
    toggle: false,
    items: [
      { label: "Members" },
      { label: "Plugins" },
      { label: "Add a member" },
    ],
  },
];
class Menu extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { list: list };
    // this.handleClickMenu = this.handleClickMenu.bind(this)
  }

  handleClickMenu(label: string) {
    let newList = list.forEach((item) => {
      if (item.label === label) {
        item.toggle = !item.toggle;
      }
    });
    this.setState({ list: newList });
  }

  displayItems(items: MenuItem[] | undefined) {
    if (!items || items.length < 1) {
      return;
    } else {
      return (
        <ul>
          {items.map((subItem) => {
            let hashLabel =
              "#" + subItem.label.toLowerCase().split(" ").join("-");
            let active = hashLabel === window.location.hash;

            return (
              <li key={subItem.label}>
                <a className={active ? "is-active" : ""} href={`/${hashLabel}`}>{subItem.label}</a>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  render() {
    return (
      <aside className="menu">
        <ul className="menu-list">
          {list.map((item) => {
            let items = item.items;
            let label = item.label;
            let toggle = item.toggle;

            return (
              <li key={label}>
                <a onClick={this.handleClickMenu.bind(this, label)} >
                  <span>{label}</span>
                  <span className="icon">
                    <i
                      className={`fa fa-angle-${toggle ? "up" : "down"} lg`}
                    ></i>
                  </span>
                </a>

                {toggle && this.displayItems(items)}
              </li>
            );
          })}
        </ul>
      </aside>
    );
  }
}

export default Menu;
