import React, { Component } from "react"
import { HeaderWrapper, H1, P, CenterVideo } from "./Shared/StyledComponents"
import logo from "../images/renameit_xd_logo.png"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper bg={this.props.bg}>
        <div>
          <div>
            <img alt="logo" src={logo} width="140" />
            <H1>Rename it</H1>
            <P>{this.props.description}</P>
          </div>
          <CenterVideo className="video">
            <video
              type="video/mp4"
              src={this.props.videoUrl}
              loop
              autoPlay
              playsInline
            />
          </CenterVideo>
        </div>
      </HeaderWrapper>
    )
  }
}

export default Header
