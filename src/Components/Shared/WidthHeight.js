import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import { SectionWrapper, H2, P, Info, Example } from "./StyledComponents"
import KeywordsList from "./KewordsList"

class WidthHeight extends Component {
  render() {
    const keywords = [
      { keyword: "%w", description: "Width of the selected layer" },
      { keyword: "%h", description: "Height of the selected layer" }
    ]
    return (
      <ScrollAnimation animateIn="fadeInUp" offset={0} animateOnce={true}>
        <SectionWrapper>
          <div>
            <Info>
              <H2>Width and Height</H2>
              <P>Rename layer with its width and height.</P>
              <KeywordsList
                title="Keywords"
                keywords={keywords}
                marginTop="56px"
                keywordWidth="32px"
              />
            </Info>
            <Example className="widthHeightVideo">
              <video
                type="video/mp4"
                src={this.props.videoUrl}
                poster={this.props.poster}
                loop
                autoPlay
                playsInline
              />
            </Example>
          </div>
        </SectionWrapper>
      </ScrollAnimation>
    )
  }
}

export default WidthHeight
