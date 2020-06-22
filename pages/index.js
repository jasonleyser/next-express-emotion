import * as React from "react";
import * as Constants from "~/common/constants";
import * as System from "~/components";
import ReactPlayer from "react-player";

import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_LAYOUT_LEFT = css`
  height: calc(100vh - ${Constants.sizes.navigation}px);
  width: ${Constants.sizes.sidebar}%;

  background-color: ${Constants.colors.black_secondary};

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

  flex-direction: column;
  justify-content: flex-start;
  display: block;

  height: calc(100vh - ${Constants.sizes.navigation}px);
  min-width: 20%;
  width: ${Constants.sizes.sidebar}%;
  padding: 24px 24px 24px 24px;
  background: ${Constants.colors.black};
  font-size: 2rem;
  overflow-y: scroll;

  background-image: url("https://media1.giphy.com/media/LqDEIKfIm5DtvPXPrf/giphy.gif?cid=ecf05e47fc05d1d1b4ea5de4d57a283f946122dcf6fe8dbf&rid=giphy.gif");
  background-size: cover;
  background-repeat: no-repeat;

  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
  }

  :hover {
    background-image: url("https://media3.giphy.com/media/lWDgxXQXFXh7O/giphy.gif?cid=ecf05e476a0936a404af5f3f3b63717732a79b7398a1e83f&rid=giphy.gif");
  }

`;

const STYLES_NAVIGATION = css`
  height: ${Constants.sizes.navigation}px;
  padding: 0 0 0 0;
  background: ${Constants.colors.black_secondary};
  font-size: 2rem;
  border-bottom: 1px solid ${Constants.colors.green};
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

`;

const STYLES_NOISE = css`
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: auto 4px;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
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

  state = {
    playing: false,
    radio_url: 'https://s4.radio.co/s76212900f/listen',
  }

  handlePlay = () => {
    this.setState({ radio_url: 'https://s4.radio.co/s76212900f/listen', playing: true });
  }

  handleStop = () => {
    this.setState({ radio_url: null, playing: false })
  }

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

        <div css={STYLES_OVERLAY}></div>
        <div css={STYLES_NOISE}></div>

        <nav css={STYLES_NAVIGATION}>
          <img height="64px" src="/static/logo 13.png" />
        </nav>

        <div css={STYLES_LAYOUT}>

          <span css={STYLES_LAYOUT_LEFT}>

            {this.state.playing ?
              <div css={STYLES_MENU}
                onClick={this.handleStop}> >> STOP STREAM
              </div>
              :
              <div css={STYLES_MENU}
                onClick={this.handlePlay}> >> START STREAM
              </div>
            }

            <div css={STYLES_MENU}>
              >> NEXT STATION
            </div>

            <br /> <br />

            <System.GetData
              url="https://public.radio.co/stations/s76212900f/status"
            />

          </span>

          <span css={STYLES_LAYOUT_RIGHT}>
            LIVE

            <ReactPlayer
                url={this.state.radio_url}
                playsinline='true'
                playing={this.state.playing}
            />

          </span>

        </div>
      </React.Fragment>
    );
  }
}
