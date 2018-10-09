import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import styled from "styled-components"
import Sketch from "./Sketch"
import XD from "./XD"
import Soon from "./Soon"

const Content = styled.div`
  overflow: hidden;
`

class App extends Component {
  render() {
    return (
      <Content>
        <Switch>
          <Route exact path="/" component={Soon} />
          <Route path="/sketch" component={Sketch} />
          <Route path="/xd" component={XD} />
        </Switch>
      </Content>
    )
  }
}

export default App
