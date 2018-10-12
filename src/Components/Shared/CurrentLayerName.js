import React, { Component } from "react"
import {
  SectionWrapper,
  H2,
  P,
  Keyword,
  Example,
  Info
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
      <SectionWrapper id="currentLayerName">
        <div>
          <Info>
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
          </Info>

          <Example className="currentVideo">
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
    )
  }
}

export default CurrentLayerName
