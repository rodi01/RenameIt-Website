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
import renamePoster from "../images/rename_sequence_cover.png"
import storePoster from "../images/store_cover.png"
import replacePoster from "../images/replace_cover.png"
import widthPoster from "../images/width_cover.png"
import currentPoster from "../images/current_cover.png"

const theme = {
  bgColor: "#f9f3fd",
  primaryColor: "#8f7295",
  shadowColor: "rgba(86, 34, 113, 0.32)",
  secondaryColor: "#f5d8f9"
}

class XD extends Component {
  videoUrl = filename => {
    return `https://d1o11igmtwz5yg.cloudfront.net/images/renameIt/xd/${filename}`
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <GlobalStyle />
          <Header
            bg={bg}
            description="Keep your Adobe XD CC files organized, batch rename layers and artboards."
          />
          <RenameSequence
            videoUrl={this.videoUrl("Rename_Sequece.mp4")}
            poster={renamePoster}
          />
          <CurrentLayerName
            videoUrl={this.videoUrl("Current.mp4")}
            poster={currentPoster}
          />
          <WidthHeight
            videoUrl={this.videoUrl("Width.mp4")}
            poster={widthPoster}
          />
          <FindReplace
            videoUrl={this.videoUrl("Replace.mp4")}
            poster={replacePoster}
          />
          <KeyboardShorcuts
            type="xd"
            videoUrl={this.videoUrl("Store.mp4")}
            poster={storePoster}
          />
          <Footer type="xd" />
        </MainWrapper>
      </ThemeProvider>
    )
  }
}

export default XD
