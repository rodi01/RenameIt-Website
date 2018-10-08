import React, { Component } from "react"
import styled from "styled-components"
import { List, H3, Keyword } from "./StyledComponents"

const Div = styled.div`
  margin-top: ${props => props.marginTop || 0};
`

class KewordsList extends Component {
  render() {
    const keyname = this.props.title.replace(/\s/g, "")
    const rows = this.props.keywords.map((item, index) => (
      <li key={`${keyname}_${index}`}>
        <Keyword width={this.props.keywordWidth}>{item.keyword}</Keyword>{" "}
        {item.description}
      </li>
    ))
    return (
      <Div marginTop={this.props.marginTop}>
        <H3>{this.props.title}</H3>
        <List>{rows}</List>
      </Div>
    )
  }
}

export default KewordsList
