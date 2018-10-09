import React, { Component } from "react"
import { SectionWrapper, H2, P, CenterVideo } from "./StyledComponents"

class FindReplace extends Component {
  render() {
    return (
      <SectionWrapper noGrid={true}>
        <div>
          <div className="infoWrapper">
            <H2>Find and Replace</H2>
            <P>Replace any word(s) or character(s) from selected layers.</P>
          </div>
          <CenterVideo>
            <video
              type="video/mp4"
              src={this.props.videoUrl}
              loop
              autoPlay
              playsInline
            />
          </CenterVideo>
        </div>
      </SectionWrapper>
    )
  }
}

export default FindReplace
