import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./Shared/GlobalStyle"
import { MainWrapper } from "./Shared/StyledComponents"
import RenameSequence from "./Shared/RenameSequence"
import CurrentLayerName from "./Shared/CurrentLayerName"
import WidthHeight from "./Shared/WidthHeight"
import Footer from "./Footer"
import FindReplace from "./Shared/FindReplace"
import KeyboardShorcuts from "./Shared/KeyboardShorcuts"
import Header from "./Header"
import bg from "../images/xd_bg.png"

const theme = {
  bgColor: "#F9F1FB",
  primaryColor: "#8f7295",
  shadowColor: "rgba(86, 34, 113, 0.32)",
  secondaryColor: "#EED5F3"
}

class XD extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <GlobalStyle />
          <Header
            bg={bg}
            description="Keep your Adobe XD files organized, batch rename layers and artboards."
            videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/start-to-finish-screen-design.mp4"
          />
          <RenameSequence videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/responsive-scaling.mp4" />
          <CurrentLayerName videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/rapid-prototyping.mp4" />
          <WidthHeight videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/start-to-finish-screen-design.mp4" />
          <FindReplace videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/start-to-finish-screen-design.mp4" />
          <KeyboardShorcuts
            type="xd"
            videoUrl="https://s3.amazonaws.com/www.invisionapp.com-studio/static/video/responsive-scaling.mp4"
          />
          <Footer type="xd" />
        </MainWrapper>
      </ThemeProvider>
    )
  }
}

export default XD
