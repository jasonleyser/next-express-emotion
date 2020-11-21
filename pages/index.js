import * as React from "react";
import * as Constants from "~/common/constants";

import Head from "next/head";

import { css } from "@emotion/core";

const STYLES_LAYOUT_LEFT = css`
  height: calc(100vh - ${Constants.sizes.navigation}px);
  width: ${Constants.sizes.sidebar}px;
  background: red;
  font-size: 2rem;
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
  width: 100%;
  background: blue;
  font-size: 2rem;
  overflow-y: scroll;

  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const STYLES_NAVIGATION = css`
  height: ${Constants.sizes.navigation}px;
  background: green;
  font-size: 2rem;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export default class IndexPage extends React.Component {
<<<<<<< Updated upstream
  render() {
    const title = "next-express-emotion";
    const description =
      "minimal example for a full client server web application with next, express, and emotion.";
    const url = "https://github.com/jimmylee/next-express-emotion";
=======
  songDataInit = data[Math.floor(Math.random() * data.length)];

  constructor(props) {
    super(props);

    this.state = {
      started: true,
      playing: true,
      song_url: this.songDataInit.hash,
      name: this.songDataInit.name,
      artist: this.songDataInit.artist,
      year: this.songDataInit.year,
      discogs: null,
      inline: true,
      played: null,
      end: null,
      runtime: 0,
      transition: false,
      level: 0,
    };

    console.log(this.state);
  }

  handlePlayPause = () => {
    console.log("Play/pause");
    this.setState({
      playing: !this.state.playing,
    });
  };

  handleEnded = () => {
    console.log("The song has ended");

    //const lvl = this.state.level;

    //if(lvl === 3){
    //lvl === 1;
    //console.log(lvl);
    //}else{
    //lvl = lvl + 1;
    //console.log(lvl);
    //}

    const next = data[Math.floor(Math.random() * data.length)];

    this.setState({
      song_url: next.hash,
      name: next.name,
      artist: next.artist,
      discogs: "https://www.discogs.com/" + next.discogs,
      year: next.year,
      end: next.end,
      playing: true,
      transition: false,
    });
    console.log(this.state);
  };

  handlePlay = () => {
    console.log("Start playing");
    this.setState({ playing: true });
  };

  handleProgress = (state) => {
    console.log({ state }, state);
    this.setState({ state });

    console.log(this.state.end);
    console.log(state.playedSeconds);

    var rnt = this.state.runtime;

    this.setState({ runtime: rnt + 1 });

    if (state.playedSeconds > this.state.end) {
      console.log("Last 10 remaining");

      if (this.state.transition === false) {
        this.setState({ transition: true });

        //var transitionSound = new Howl({
        //  src: ["/public/static/horn.wav"],
        //  volume: 0.75,
        //  rate: 0.75,
        //});

        //const x = Math.round(100 * (2.5 - Math.random() * 5)) / 100;
        //const y = Math.round(100 * (2.5 - Math.random() * 5)) / 100;

        //transitionSound.pos(x, y);
        //transitionSound.play();
      }
    } else {
      console.log("More than 10 remaining");
      this.setState({ transition: false });
    }
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const title = "Welcome to midnight school";
    const description = "Where underground 90s hiphop happens";
    const url = "https://midnight.school/";
    const {
      song_url,
      playing,
      name,
      artist,
      year,
      discogs,
      inline,
      played,
      runtime,
    } = this.state;
>>>>>>> Stashed changes

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
        <nav css={STYLES_NAVIGATION}>Navigation</nav>
        <div css={STYLES_LAYOUT}>
          <span css={STYLES_LAYOUT_LEFT}>Left Sidebar</span>
          <span css={STYLES_LAYOUT_RIGHT}>Right Content</span>
        </div>
      </React.Fragment>
    );
  }
}
