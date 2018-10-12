import React, { Component } from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import {
  SectionWrapper,
  Info,
  Example,
  P,
  H2,
  ComboList
} from "./StyledComponents"
import KeywordsList from "./KewordsList"

class RenameSequence extends Component {
  render() {
    const keywords = [
      { keyword: "%n", description: "Ascending numbered sequence" },
      { keyword: "%N", description: "Descending numbered sequence" },
      { keyword: "%A", description: "Alphabet sequence" }
    ]
    const proTip = [
      { keyword: "%nn", description: "This will output 01, 02, 03 and so on" },
      { keyword: "%a", description: "Lowercase alphabet sequence" }
    ]
    return (
      <ScrollAnimation animateIn="fadeInUp" offset={0} animateOnce={true}>
        <SectionWrapper>
          <div>
            <Info>
              <H2>Rename in Sequence</H2>
              <P>
                Sequentially rename layers in either ascending or descending
                order.
              </P>
              <ComboList>
                <KeywordsList
                  title="Keywords"
                  keywords={keywords}
                  keywordWidth="32px"
                />
                <KeywordsList
                  title="Pro Tip"
                  keywords={proTip}
                  keywordWidth="32px"
                  alignSelf="flex-start"
                />
              </ComboList>
            </Info>
            <Example>
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

export default RenameSequence
