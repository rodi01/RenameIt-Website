import React, { Component } from "react"
import { SectionWrapper, H2, P, CenterVideo } from "./StyledComponents"

class FindReplace extends Component {
  render() {
    return (
      <SectionWrapper noGrid={true}>
        <H2>Find and Replace</H2>
        <P>Replace any word(s) or character(s) from selected layers.</P>
        <CenterVideo>
          <video
            type="video/mp4"
            src={this.props.videoUrl}
            loop
            autoPlay
            playsInline
          />
        </CenterVideo>
      </SectionWrapper>
    )
  }
}

export default FindReplace
