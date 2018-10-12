import React, { Component } from "react"
import { SecondaryWrapper, H2, P, CenterVideo } from "./StyledComponents"
import ShortcutsXD from "./ShortcutsXD"

class KeyboardShorcuts extends Component {
  render() {
    return (
      <SecondaryWrapper noGrid={true}>
        <div>
          <H2>Keyboard Shortcuts</H2>
          <ShortcutsXD />

          <H2>How to Install</H2>
          <P>Go to Manage Plugins and search for “Rename”</P>
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
      </SecondaryWrapper>
    )
  }
}

export default KeyboardShorcuts
