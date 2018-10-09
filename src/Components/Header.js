import React, { Component } from "react"
import { HeaderWrapper, H1, P, HeroImage } from "./Shared/StyledComponents"
import logo from "../images/renameit_xd_logo.png"
import hero from "../images/xd_rename_hero.png"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper bg={this.props.bg}>
        <div>
          <div>
            <img alt="logo" src={logo} height="118" />
            <H1>Rename it</H1>
            <P>{this.props.description}</P>
          </div>
          <HeroImage>
            <img src={hero} alt="Rename it" />
          </HeroImage>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header
