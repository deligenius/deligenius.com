/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

interface State {
  data: { imageSharp: { fixed: { src: string } } }
}

const Header = prpos => {
  const data = useStaticQuery(graphql`
    query LogoQuery($height: Int = 28) {
      imageSharp(fixed: { originalName: { eq: "deligenius.png" } }) {
        resize(height: $height) {
          src
        }
      }
    }
  `)

  const logoSrc = data.imageSharp.resize.src

  return (
    <div className="has-background-dark">
      <nav
        className="navbar  is-dark container"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logoSrc} alt="" />
            {/* <span
                className="is-size-5 has-text-primary 
            has-text-weight-medium 
            is-family-monospace	
            is-uppercase
            "
              >
                Deligenius
              </span> */}
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-active">
          <div className="navbar-start">
            <Link to="/docs" className="navbar-item active">
              <span role="img" aria-label="Page Facing Up">
                📄
              </span>
              Docs
            </Link>

            {/* <Link to="/tutorial" className="navbar-item">
                <span role="img" aria-label="Book">
                  📖
                </span>
                Tutorial
              </Link> */}
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button px-5"
                  href="https://github.com/deligenius/deligenius"
                >
                  <span className="icon">
                    <i className="fa fa-github fa-lg"></i>
                  </span>
                  <span className="">Github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
