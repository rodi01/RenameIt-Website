import React, { Component } from "react"
import {
  SectionWrapper,
  H2,
  P,
  InfoRight,
  Keyword,
  ExampleLeft
} from "./StyledComponents"
import KeywordsList from "./KewordsList"

class CurrentLayerName extends Component {
  render() {
    const proTip = [
      { keyword: "%*u%", description: "Convert to UPPER CASE" },
      { keyword: "%*l%", description: "Convert to lower case" },
      { keyword: "%*t%", description: "Convert to Tile Case" },
      { keyword: "%*uf%", description: "Convert to Upper first word" },
      { keyword: "%*c%", description: "Convert to camelCase" }
    ]
    return (
      <SectionWrapper alignLeft={true}>
        <div>
          <ExampleLeft>
            <video
              type="video/mp4"
              src={this.props.videoUrl}
              loop
              autoPlay
              playsInline
            />
          </ExampleLeft>
          <InfoRight alignRight={true}>
            <H2>Current Layer Name</H2>
            <P>
              The keyword <Keyword>%*</Keyword> will copy the current selected
              layer(s) name.
            </P>
            <KeywordsList
              title="Pro Tip"
              keywords={proTip}
              marginTop="56px"
              keywordWidth="46px"
            />
          </InfoRight>
        </div>
      </SectionWrapper>
    )
  }
}

export default CurrentLayerName
