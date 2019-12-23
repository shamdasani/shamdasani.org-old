import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import  styled, { createGlobalStyle } from "styled-components"

import { Link } from "gatsby"

const Container = styled.div`
  max-width: 50em;
  margin: 0 auto;
  color: #333;
  padding: 32px;
`

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, 'Helvetica Neue', 'Segoe UI', sans-serif;
}
a {
  text-decoration: none;
  color: #333;
}
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = <div />
    } else {
      header = <Link to="/"><h3>Essays by Samay Shamdasani</h3></Link>
    }
    return (
      <Container>
        <GlobalStyle />
        <header>{header}</header>
        <main>{children}</main>
        <br/> <br/>
        <footer>© {new Date().getFullYear()}, Samay Shamdasani</footer>
      </Container>
    )
  }
}

export default Layout
