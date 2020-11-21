import * as Constants from "~/common/constants";

import { css } from "@emotion/core";

/* prettier-ignore */
const GlobalStyles = () => css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, img {
    display: block;
  }

  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  html, body {
    height: 100%;
    background: ${Constants.colors.black};
    color: ${Constants.colors.grey};
    font-size: 16px;
    font-family: 'VT323';
    cursor: crosshair;
  }

  a {
    text-decoration: none;
    cursor: crosshair;
  }

  a:hover {
    color: ${Constants.colors.green_secondary};
    cursor: crosshair;

  }

  a:visited {
    color: ${Constants.colors.grey};
  }

`;

export default GlobalStyles;
