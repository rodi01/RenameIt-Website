import styled, { css } from "styled-components"

const primaryColor = props => props.theme.primaryColor

// Typography
// ————————————————————————————————————————————————————————————
export const H1 = styled.h1`
  font-size: 80px;
  font-weight: 100;
  margin: 0 0 16px;
  line-height: 1;
`

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 200;
  letter-spacing: -1px;
  line-height: 1.2em;
  margin: 0;

  & + p {
    margin-top: 16px;
  }
`

export const H3 = styled(H2)`
  font-weight: 400;
  font-size: 36px;
  letter-spacing: -0.2px;
  line-height: 1.2em;
`

export const P = styled.p`
  font-size: 24px;
  letter-spacing: 0;
  line-height: 32px;
  margin: 0;
`
export const Keyword = styled.span`
  display: inline-block;
  height: 32px;
  width: ${props => props.width || "32px"};
  text-align: center;
  line-height: 32px;
  font-size: 16px;
  color: #fff;
  padding: 0 10px;
  background: ${primaryColor};
  border-radius: 6px;
`

export const H4 = styled(H2)`
  font-size: 36px;
  letter-spacing: -0.75px;
  color: #fff;
`

// Layout
// ————————————————————————————————————————————————————————————
const maxWidth = css`
  max-width: 1280px;
  margin: 0 auto;
`
const grid = css`
  grid-template-columns: repeat(12, 1fr);
  column-gap: 24px;
`

export const MainWrapper = styled.div``

export const HeaderWrapper = styled.header`
  height: 88vh;
  text-align: center;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

  & > div {
    display: grid;
    grid-template-rows: 1fr auto;
    grid-row-gap: 64px;
    padding-top: 64px;
  }

  .video {
    height: auto;
    video {
      margin-top: 0;
    }
  }
`

export const List = styled.ul`
  padding: 0;
  font-size: 24px;
  margin: 24px 0;
  li {
    list-style: none;
    line-height: 32px;
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }
  }
`

export const SectionWrapper = styled.section`
  margin-top: calc(182px - 80px);
  padding: 80px 0 0;
  min-height: 620px;
  ${pros =>
    pros.noGrid &&
    `
    text-align: center;
  `};

  header + &  {
    margin-top: 0
  }

  & > div {
    ${maxWidth}
    display: ${props => props.noGrid ? "block" : "grid" /* prettier-ignore */};
    ${grid}
  }
`

export const Info = styled.div`
  grid-column: ${props => props.alignRight ? "8 / span 5" : "1 / span 5" /* prettier-ignore */};
`

export const Example = styled.div`
  grid-column: ${props => props.alignLeft ? "1 / span 7" : "6 / span 7" /* prettier-ignore */};
  width: 100%;
  position: relative;

  video {
    position: absolute;
    z-index: -1;
    height: 620px;
    right: ${props => props.alignLeft ? 0 : "auto" /* prettier-ignore */};
  }
`

export const CenterVideo = styled.div`
  height: 630px;
  overflow: hidden;
  video {
    margin: 80px auto 0;
    width: 100%;
  }
`

export const Footer = styled.footer`
  background: ${primaryColor};
  padding: 80px 0;

  & > div {
    ${maxWidth};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
  }
`
export const FooterItem = styled.div`
  text-align: center;

  ${P} {
    color: #fff;
  }
`

export const FooterCredits = styled.div`
  margin-top: 136px;
  grid-column-start: span 3;
  font-size: 12px;
  color: #fff;

  p {
    margin: 8px 0 0;

    &:first-child {
      margin-top: 0;
    }
  }

  a:link,
  a:visited {
    color: #fff;
  }
`

export const LinkButton = styled.a.attrs({
  target: "_blank"
})`
  display: inline-block;
  margin-top: 32px;
  height: 64px;
  width: 192px;
  line-height: 64px;
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  border-radius: 32px;
  font-weight: bold;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0px 4px 17px 2px ${props => props.theme.shadowColor};
  background-image: linear-gradient(0deg, #9263cb 0%, #6ea6c6 100%);

  &::before {
    content: "";
    background: url(${props => props.icon}) no-repeat;
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 8px;
    position: relative;
    top: 12px;
  }

  &.facebook {
    background-image: linear-gradient(0deg, #344d85 0%, #3b5998 100%);
  }

  &.twitter {
    margin-left: 24px;
    background-image: linear-gradient(0deg, #1c98e6 0%, #1da1f2 100%);
  }

  &.github {
    background-image: linear-gradient(0deg, #dbdbdb 0%, #e4ebf0 100%);
    color: #000;
  }

  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
  }
`

export const SecondaryWrapper = styled(SectionWrapper)`
  margin-top: 0;
  background: ${props => props.theme.secondaryColor};
`

export const ShortcutXDWrapper = styled.div`
  display: grid;
  ${grid};
  text-align: left;
  margin-top: 56px;
  margin-bottom: 160px;
  row-gap: 32px;

  .renameLayer {
    grid-column: 4 / span 4;
  }

  .findReplace {
    grid-column: 8 / span 5;
  }

  h5 {
    font-size: 24px;
    font-weight: normal;
    margin: 0 0 16px;
  }

  .platform {
    font-size: 24px;
    display: block;
    text-align: right;
    grid-column: 1 / span 3;
    margin-top: 12px;
    svg {
      margin-right: 8px;
    }
  }
`
