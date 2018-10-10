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
  bgColor: "#f9f3fd",
  primaryColor: "#8f7295",
  shadowColor: "rgba(86, 34, 113, 0.32)",
  secondaryColor: "#f5d8f9"
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
          />
          <RenameSequence videoUrl="http://x.rodrigosoares.me.s3.amazonaws.com/images/renameIt/xd/Rename_Sequece.mp4" />
          <CurrentLayerName videoUrl="http://x.rodrigosoares.me.s3.amazonaws.com/images/renameIt/xd/Current.mp4" />
          <WidthHeight videoUrl="http://x.rodrigosoares.me.s3.amazonaws.com/images/renameIt/xd/Width.mp4" />
          <FindReplace videoUrl="http://x.rodrigosoares.me.s3.amazonaws.com/images/renameIt/xd/Replace.mp4" />
          <KeyboardShorcuts
            type="xd"
            videoUrl="http://x.rodrigosoares.me.s3.amazonaws.com/images/renameIt/xd/Store.mp4"
          />
          <Footer type="xd" />
        </MainWrapper>
      </ThemeProvider>
    )
  }
}

export default XD
