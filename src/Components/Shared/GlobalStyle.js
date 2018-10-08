import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bgColor};
    margin: 0;
    padding: 0;
    color: ${props => props.theme.primaryColor};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1em/1.2;
  }
`
