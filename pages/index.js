import * as React from "react";
import * as Constants from "~/common/constants";
import * as System from "~/components";
import ReactPlayer from "react-player";

import data from "~/common/songlist.json";

import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_LAYOUT_LEFT = css`
  width: 100%;
  background-color: ${Constants.colors.black};
  background-image: url("paper.gif");
  font-size: 2rem;
  color: ${Constants.colors.grey};
  padding-top: 48px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  cursor: crosshair;
`;

const STYLES_CENTER = css`
  vertical-align: middle;
  horizontal-align: middle;
  text-align: center;
`;

const STYLES_LAYOUT = css`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const STYLES_MENU = css`
  :hover {
    cursor: pointer;
    color: ${Constants.colors.red};
    text-shadow: 0 0 1px ${Constants.colors.red};
  }
`;

const STYLES_GREEN = css`
  color: ${Constants.colors.green_secondary};
`;

const STYLES_OVERLAY = css`
  pointer-events: none;
  position: absolute;
  width: 100%;
  background: repeating-linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  background-size: auto 4px;
  z-index: 1;
`;

const STYLES_HR = css`
  border: 1px solid ${Constants.colors.green_secondary};
`;

function display(seconds) {
  const format = (val) => `0${Math.floor(val)}`.slice(-2);
  const hours = seconds / 3600;
  const minutes = (seconds % 3600) / 60;

  return [hours, minutes, seconds % 60].map(format).join(":");
}

export default class IndexPage extends React.Component {
  songDataInit = data[Math.floor(Math.random() * data.length)];

  constructor(props) {
    super(props);

    this.state = {
      started: true,
      playing: true,
      song_url: "https://ipfs.io/ipfs/" + this.songDataInit.hash,
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
      song_url: "https://ipfs.io/ipfs/" + next.hash,
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
    const title = "Midnight Radio - Home of the 90s";
    const description = "";
    const url = "";
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
        <System.Logo url="/static/neon2.gif" height="200px" />
        <div css={STYLES_LAYOUT}>
          <ReactPlayer
            ref={this.ref}
            url={song_url}
            onPlay={this.handlePlay}
            playing={playing}
            onEnded={this.handleEnded}
            width="0"
            height="0"
            playsinline={inline}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
            onBuffer={this.handlePlay}
          />

          <span css={STYLES_LAYOUT_LEFT}>
            <div css={STYLES_CENTER}>
              <div css={STYLES_MENU} onClick={this.handleEnded}>
                >> next song
              </div>
              {this.state.playing ? (
                <div css={STYLES_MENU} onClick={this.handlePlayPause}>
                  || stop stream
                </div>
              ) : (
                <div css={STYLES_MENU} onClick={this.handlePlayPause}>
                  >> start stream
                </div>
              )}
              <br />
              {name === null ? (
                <div css={STYLES_GREEN}>
                  <span>Couldn't get the song...</span>
                </div>
              ) : (
                <div>
                  <div css={STYLES_GREEN}>run time: {display(runtime)}</div>
                  <br />
                  {name} ({year})<br />
                  [Artist] {artist} <br />
                </div>
              )}
            </div>
          </span>
        </div>
      </React.Fragment>
    );
  }
}
