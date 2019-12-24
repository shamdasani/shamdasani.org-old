import React, { Component } from 'react'
import styled from 'styled-components'

const CounterText = styled.p`
  display: inline-block;

span {
  font-weight: bold;
}
`
class ViewCounter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hits: []
    }
  }
  componentDidMount() {
    const URL = 'https://shamdasani-views.now.sh/?id='
    const id = this.props.id
    fetch(URL + id)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.total }))
  }

  render() {
    const { hits } = this.state
    return <CounterText>&nbsp;-<span>{hits}</span> views</CounterText>
  }
}

export default ViewCounter
