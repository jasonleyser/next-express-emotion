import * as React from "react";
import * as Constants from "~/common/constants";
import * as System from "~/components";
import Typist from 'react-typist';

import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_NOISE = css`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: .02;
`;

const STYLES_OVERLAY = css`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background:
      repeating-linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0) 100%);
  background-size: auto 4px;
  z-index: 1;

  ::before {
    content: "";
    pointer-events: none;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        0deg,
        transparent 0%,
        rgba(32, 128, 32, 0.2) 2%,
        rgba(32, 128, 32, 0.8) 3%,
        rgba(32, 128, 32, 0.2) 3%,
        transparent 100%);
    background-repeat: no-repeat;
    animation: scan 7.5s linear 0s infinite;
  }
`;

const STYLES_LAYOUT_LEFT = css`
  height: calc(100vh - ${Constants.sizes.navigation}px);
  width: ${Constants.sizes.sidebar}%;
  background: ${Constants.colors.black};
  padding: 24px 24px 24px 24px;
  font-size: 2rem;
  text-shadow: 0 0 2px ${Constants.colors.green};

  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_LAYOUT_RIGHT = css`
  height: calc(100vh - ${Constants.sizes.navigation}px);
  min-width: 20%;
  width: ${Constants.sizes.sidebar}%;
  padding: 24px 24px 24px 24px;
  background: ${Constants.colors.black};
  font-size: 2rem;
  overflow-y: scroll;

  background-image: url("/static/flying.gif");
  background-size: cover;
  background-repeat: no-repeat;

  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_NAVIGATION = css`
  height: ${Constants.sizes.navigation}px;
  padding: 16px 0 0 24px;
  background: ${Constants.colors.black};
  font-size: 2rem;
  border-bottom: 1px solid ${Constants.colors.green};
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_MENU = css`

  :hover{
    cursor: pointer;
    color: ${Constants.colors.black};
    background: ${Constants.colors.green};
    text-shadow: 0 0 1px ${Constants.colors.black};
  }
`;

export default class IndexPage extends React.Component {
  render() {
    const title = "next-express-emotion";
    const description =
      "minimal example for a full client server web application with next, express, and emotion.";
    const url = "https://github.com/jimmylee/next-express-emotion";

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
          <meta name="title" content={title} />
          <meta name="description" content={description} />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="/static/social.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={url} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
          <meta property="twitter:image" content="/static/social.png" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>

        <div css={STYLES_NOISE}></div>
        <div css={STYLES_OVERLAY}></div>

        <nav css={STYLES_NAVIGATION}>
          <Typist cursor='true'>
            <span> [ &#62; MIDNIGHT ENDS</span>
            <Typist.Backspace count={15} delay={2000} />
            <span> OLD IS GOLD</span>
            <Typist.Backspace count={12} delay={2000} />
            <span> MIDNIGHT ENDS ]</span>
        </Typist>
      </nav>

        <div css={STYLES_LAYOUT}>

          <span css={STYLES_LAYOUT_LEFT}>

            <div css={STYLES_MENU}>
              >> STOP RADIO
            </div>

            <div css={STYLES_MENU}>
              >> NEXT STATION
            </div>

            <br /> <br />

            <System.GetData
              url="https://api.radioking.io/widget/radio/midnight/track/current"
            />

          </span>

          <span css={STYLES_LAYOUT_RIGHT}>
            Live
          </span>

        </div>
      </React.Fragment>
    );
  }
}
