import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-y: scroll;
  }

  html {
    background-color: #fff;
    color: #333;
    font-size: 14px;
    line-height: 22px;
    color: #24282A;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    ${'' /* background-color: #fafafa; */}
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }

  div {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
  }

  input {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`;
