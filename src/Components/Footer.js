import React, { Component } from "react"
import * as Styled from "./Shared/StyledComponents"
import donateIc from "../images/heart_ic.svg"
import fbIc from "../images/fb_ic.svg"
import twIc from "../images/tw_ic.svg"
import githubIc from "../images/github_ic.svg"

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      link: `http://renameit.design/${props.type}`
    }
  }

  getLink(website) {
    let url = ""
    switch (website) {
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${
          this.state.link
        }&src=sdkpreparse`
        break

      case "twitter":
        const description = `Keep your ${
          this.props.type === "xd" ? "Adobe XD" : "Sketch"
        } files organized, batch rename layers and artboards.`
        url = `https://twitter.com/intent/tweet?url=${
          this.state.link
        }&via=rodi01&text=${description}`
        break

      case "github":
        url = `https://github.com/rodi01/${
          this.props.type === "xd" ? "RenameIt-XD" : "RenameIt"
        }`
        break
      case "donation":
        url = "https://www.paypal.me/rodi01/2"
        break
      default:
        break
    }
    return encodeURI(url)
  }

  render() {
    return (
      <Styled.Footer>
        <div>
          <Styled.FooterItem>
            <Styled.H4>Share</Styled.H4>
            <Styled.P>Help spread the love</Styled.P>
            <Styled.LinkButton
              className="facebook"
              href={this.getLink("facebook")}
              icon={fbIc}
            >
              Facebook
            </Styled.LinkButton>
            <Styled.LinkButton
              className="twitter"
              href={this.getLink("twitter")}
              icon={twIc}
            >
              Twitter
            </Styled.LinkButton>
          </Styled.FooterItem>

          <Styled.FooterItem>
            <Styled.H4>Open Source</Styled.H4>
            <Styled.P>Fork it and contribute</Styled.P>
            <Styled.LinkButton
              className="github"
              href={this.getLink("github")}
              icon={githubIc}
            >
              Github
            </Styled.LinkButton>
          </Styled.FooterItem>

          <Styled.FooterItem>
            <Styled.H4>Help</Styled.H4>
            <Styled.P>Help the development</Styled.P>
            <Styled.LinkButton
              className="donation"
              href={this.getLink("donation")}
              icon={donateIc}
            >
              Donate
            </Styled.LinkButton>
          </Styled.FooterItem>

          <Styled.FooterCredits>
            <p>
              Found a bug? Create an{" "}
              <a href="https://github.com/rodi01/RenameIt/issues">
                Issue on Github
              </a>{" "}
              or{" "}
              <a href="https://twitter.com/rodi01">
                send me a message on Twitter
              </a>
              .
            </p>
            <p>
              Rename It is maintained by Rodrigo Soares. Follow me{" "}
              <a href="https://twitter.com/rodi01">@rodi01 </a>
            </p>
            <p>MIT License © Rodrigo Soares.</p>
          </Styled.FooterCredits>
        </div>
      </Styled.Footer>
    )
  }
}

export default Footer
