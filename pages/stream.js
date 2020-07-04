import * as React from "react";
import * as Constants from "~/common/constants";
import * as System from "~/components";
import ReactPlayer from "react-player";
import Typist from 'react-typist';
import {Howl, Howler} from 'howler';

import data from '~/common/songlist.json';



import Head from "next/head";

import { css } from "@emotion/react";

const STYLES_LAYOUT_LEFT = css`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #070606, #0d0b0c, #121011, #1a181a, #212022, #28282b, #2e3034);
  font-size: 2rem;
  color: ${Constants.colors.grey};

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
`;

const STYLES_CENTER = css`
  vertical-align: middle;
  horizontal-align: middle;
  text-align:center;
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
  background-image: url("/static/static.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  opacity: .01;
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
    color: ${Constants.colors.red};
    text-shadow: 0 0 1px ${Constants.colors.red};
  }
`;

const STYLES_GREEN = css`
  color: ${Constants.colors.green_secondary};
`;

function display (seconds) {
  const format = val => `0${Math.floor(val)}`.slice(-2)
  const hours = seconds / 3600
  const minutes = (seconds % 3600) / 60

  return [hours, minutes, seconds % 60].map(format).join(':')
}

export default class StreamPage extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      started: false,
      playing: false,
      song_url: 'https://ipfs.io/ipfs/QmNgddwXi14sB1brV4R1URriAKirYXXGg3FAyG5zBxKReu',
      name: null,
      artist: null,
      year: null,
      discogs: null,
      inline: true,
      played: null,
      end: null,
      runtime: 0,
      transition: false,
    }
  }

  handlePlayPause = () => {
    console.log('Play/pause')
    this.setState({
      playing: !this.state.playing,
    })
  }

  handleEnded = () => {
    console.log('The song has ended')

    const next = data[Math.floor(Math.random()*data.length)];

    this.setState({
      song_url: "https://ipfs.io/ipfs/" + next.hash,
      name: next.name,
      artist: next.artist,
      discogs: "https://www.discogs.com/" + next.discogs,
      year: next.year,
      end: next.end,
      playing: true,
      transition: false,
    })
    console.log(this.state);
  }

  handlePlay = () => {
    console.log('Start playing')
    this.setState({ playing: true })
  }

  handleProgress = (state) => {
    console.log({state}, state);
    this.setState({ state });

    console.log(this.state.end);
    console.log(state.playedSeconds);

    var rnt = this.state.runtime

    this.setState({ runtime: rnt + 1 });

    if(state.playedSeconds > this.state.end)  {
      console.log('its time!!!');

      if(this.state.transition === false) {
        this.setState({ transition: true })

        var transitionSound = new Howl({
          src: ['/public/static/horn.wav'],
          volume: 0.75,
          rate: 0.75,
        });

        const x = Math.round(100 * (2.5 - (Math.random() * 5))) / 100;
        const y = Math.round(100 * (2.5 - (Math.random() * 5))) / 100;

        //transitionSound.pos(x, y);
        //transitionSound.play();

      }

    }else{

      console.log('its not time...');
      this.setState({ transition: false })

    }
  }

  ref = player => {
    this.player = player
  }


  render() {
    const title = "next-express-emotion";
    const description =
      "minimal example for a full client server web application with next, express, and emotion.";
    const url = "https://github.com/jimmylee/next-express-emotion";
    const { song_url, playing, name, artist, year, discogs, inline, played, runtime } = this.state;

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

        <div css={STYLES_LAYOUT}>

          <ReactPlayer
            ref={this.ref}
            url={song_url}
            onPlay={this.handlePlay}
            playing={playing}
            onEnded={this.handleEnded}
            width="800"
            height="800"
            playsinline={inline}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
            controls
          />

          <span css={STYLES_LAYOUT_LEFT}>

            <div css={STYLES_CENTER}>
              <System.Logo height="236px" url="/static/window.png" />

              <br />

              <br />

              {this.state.playing ?
                <div css={STYLES_MENU} onClick={this.handlePlayPause}>
                || STOP STREAM
                </div>
                :
                <div css={STYLES_MENU} onClick={this.handlePlayPause}>
                  >> START STREAM
                </div>
              }

              <br />

              {name === null ?
                <div css={STYLES_GREEN}>
                  <Typist>
                      <span>Stream has initilized</span>
                  </Typist>
                </div>
             :
                <div>
                  <div css={STYLES_GREEN}>
                    Run time: { display(runtime) }
                  </div>
                  <br /><br />
                  {name} ({year})<br />
                  [Artist] {artist} <br />
                  <a target="_blank" href={discogs}>Discogs</a>
                </div>
              }
            </div>

          </span>

          <div css={STYLES_NOISE}></div>

        </div>

      </React.Fragment>
    );
  }
}
