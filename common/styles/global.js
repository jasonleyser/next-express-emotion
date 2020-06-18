import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

/* prettier-ignore */
export default () => css`
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

  @font-face {
      font-family: 'vhs';
      src: local('vhs'), url(./static/fonts/VT323-Regular.ttf) format('truetype');
  }

  html, body {
    background: ${Constants.colors.white};
    color: ${Constants.colors.green};
    font-size: 16px;
  }

  a {
    color: ${Constants.colors.white};
  }

`;
