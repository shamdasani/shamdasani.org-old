import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Me from './Me'

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: system-ui, 'Helvetica Neue', 'Segoe UI', sans-serif;
}
a {
  text-decoration: none;
}

`
const Home = () => (
  <main>
    <Me />
  </main>
)

export default Home
