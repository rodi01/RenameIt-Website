import isBlank from "is-blank"
import styled, { css } from "styled-components"

const primaryColor = props => props.theme.primaryColor

const sizes = {
  giant: { min: 1281 },
  desktop: { min: 1025, max: 1280 },
  tablet: { max: 1024 },
  tabletL: { min: 768, max: 1024, orientation: "landscape" },
  phone: { min: 320, max: 480 },
  medium: { min: 320, max: 768 }
}

const renderMedia = (min, max, orientation, ...args) => {
  const mi = isBlank(min) ? "" : `(min-width: ${min}px)`
  const ma = isBlank(max) ? "" : `(max-width: ${max}px)`
  const o = isBlank(orientation) ? "" : `and (orientation: ${orientation})`
  let media = `${mi}`

  if (isBlank(media)) {
    media += `${ma}`
  } else {
    media += `and ${ma}`
  }

  return `@media ${media} ${o} {
        ${css(...args)};
      }
    }`
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const min = sizes[label].min
  const max = sizes[label].max
  const orientation = sizes[label].orientation

  accumulator[label] = (...args) => css`
    ${renderMedia(min, max, orientation, ...args)};
  `
  return accumulator
}, {})

// Typography
// ————————————————————————————————————————————————————————————
export const H1 = styled.h1`
  font-size: 80px;
  font-weight: 100;
  margin: 0 0 16px;
  line-height: 1.2em;
  ${media.phone`font-size: 56px;`};
`

export const h2CSS = css`
  & + p {
    margin-top: 16px;
  }
`

export const H2 = styled.h2`
  font-size: 64px;
  font-weight: 200;
  letter-spacing: -1px;
  line-height: 1.2em;
  margin: 0;

  ${media.tablet`font-size: 56px;`};
  ${media.tablet`font-size: 48px;`};

  ${h2CSS};
`

export const H3 = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 36px;
  letter-spacing: -0.2px;
  line-height: 1.2em;
  ${h2CSS};
  ${media.phone`font-size: 32px;`};
  ${media.tabletL`font-size: 32px;`};
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
  ${media.phone`font-size: 32px;`};
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
  height: 100vh;
  text-align: center;
  background-image: url(${props => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  padding: 0 32px;

  ${media.tablet`height:80vh;`};
  ${media.phone`height: 75vh; padding: 0 16px;`};
  ${media.tabletL`height:100vh;`};

  #logo {
    height: 118px;
    ${media.phone`height: 100px;`};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding-top: 20vh;
    ${media.medium`padding-top:5vh;`};
  }

  & > div {
    ${media.tablet`padding-top:8vh !important;`};
  }
`

export const HeroImage = styled.div`
  margin-top: 56px;
  max-height: 65%;

  ${media.tabletL`max-height: 60%;`};
  ${media.phone`margin-top: 32px;`};
  img {
    width: 100%;
    ${media.phone`width:100%;`};
  }
`

export const List = styled.ul`
  padding: 0;
  font-size: 24px;
  margin: 24px 0 0;

  li {
    list-style: none;
    line-height: 32px;
    margin-top: 16px;

    ${media.tablet`font-size: 16px; text-align: left;`};

    &:first-child {
      margin-top: 0;
    }
  }
`

export const SectionWrapper = styled.section`
  margin-top: calc(182px - 80px);
  padding: 80px 56px 0;
  min-height: 620px;
  text-align: center;

  ${media.tablet`padding: 56px 0 0; margin-top: 24px; min-height: auto;`};
  ${media.tabletL`padding: 56px 32px 0`};

  ${pros =>
    pros.noGrid &&
    `
    text-align: center;
  `};

  header + & {
    margin-top: 0;
  }

  & > div {
    ${maxWidth};
    display: flex;
    flex-direction: column;
  }

  .infoWrapper {
    padding: 0 24px;
  }

  &#currentLayerName ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    margin-top: 16px;
    ${media.phone`display: block;`};
  }
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    padding: 0 24px;
  `};

  ${media.medium`
    padding: 0 24px;
  `};
`
export const InfoRight = styled(Info)`
  ${media.tablet` order: 1; `};
`

export const Example = styled.div`
  position: relative;
  margin: 16px 0 0;

  video {
    width: 100%;
  }
`

export const ComboList = styled.div`
  display: flex;
  margin-top: 56px;
  justify-content: center;
  ${media.phone`flex-direction: column; margin-top: 32px;`};

  & > div {
    margin: 0 16px;
    ${media.phone`margin: 0;`};
  }

  & > div:first-child {
    ${media.phone`margin-bottom: 24px;`};
  }
`

export const ExampleLeft = styled(Example)`
  video {
    right: 0;
  }
  ${media.tablet` order: 2; `};
`

export const CenterVideo = styled.div`
  height: 630px;
  overflow: hidden;
  position: relative;
  margin: 16px auto 0;

  ${media.medium`
    height: auto; margin-bottom: -4px;
  `};
  ${media.tablet`height: auto;`};

  video {
    width: 100%;
  }
`

export const Footer = styled.footer`
  background: ${primaryColor};
  padding: 80px 0;
  ${media.medium`padding-top: 1px;`};

  & > div {
    ${maxWidth};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 24px;
    ${media.medium`display: block`};
  }
`
export const FooterItem = styled.div`
  text-align: center;

  ${media.medium`margin-top: 56px;`};

  ${P} {
    color: #fff;
    ${media.medium`font-size: 16px; margin-top: 8px;`};
  }
`

export const FooterCredits = styled.div`
  margin-top: 136px;
  grid-column-start: span 3;
  font-size: 12px;
  color: #fff;
  padding: 0 16px;

  ${media.medium`margin-top: 80px;`};

  ${media.tablet`text-align: center;`};

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
  margin: 32px 12px 0;
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
    background-image: linear-gradient(0deg, #1c98e6 0%, #1da1f2 100%);

    ${media.phone`margin: 32px auto 0; display: block;`};
  }

  &.github {
    background-image: linear-gradient(0deg, #dbdbdb 0%, #e4ebf0 100%);
    color: #000;
  }

  &:hover {
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.3);
  }
  ${media.phone`margin-top:16px;`};
`

export const SecondaryWrapper = styled(SectionWrapper)`
  &&& {
    margin-top: -4px;
  }
  background: ${props => props.theme.secondaryColor};
  ${media.medium`display: none;`};
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

export const ListWrapper = styled.div`
  text-align: left;
  align-self: ${props => props.alignSelf || "center"};
  margin-top: ${props => props.marginTop || 0};
  ${media.phone`margin-top: 32px;`};
  ${media.tablet`text-align: center;`};
`
