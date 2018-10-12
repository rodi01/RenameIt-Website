import React, { Component } from "react"
import { List, H3, Keyword, ListWrapper } from "./StyledComponents"

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
      <ListWrapper
        marginTop={this.props.marginTop}
        alignSelf={this.props.alignSelf}
        id={this.props.id}
      >
        <H3>{this.props.title}</H3>
        <List>{rows}</List>
      </ListWrapper>
    )
  }
}

export default KewordsList
