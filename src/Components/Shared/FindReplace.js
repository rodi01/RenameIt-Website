import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import { SectionWrapper, H2, P, CenterVideo } from "./StyledComponents"

class FindReplace extends Component {
  render() {
    return (
      <ScrollAnimation animateIn="fadeInUp" offset={0} animateOnce={true}>
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
                poster={this.props.poster}
                loop
                autoPlay
                playsInline
              />
            </CenterVideo>
          </div>
        </SectionWrapper>
      </ScrollAnimation>
    )
  }
}

export default FindReplace
