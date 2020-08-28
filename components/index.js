import * as React from "react";
import * as Constants from "~/common/constants";
import { css } from "@emotion/react";
import ReactPlayer from "react-player";
import Link from "next/link";

import data from "~/common/songlist.json";

const STYLES_WHITE = css`
  color: ${Constants.colors.pink};
  display: inline-block;
`;

export class GetData extends React.Component {
  intervalID;

  url = this.props.url;

  state = {
    data: [],
    title: null,
    //artist: null,
    //album: null,
    //link: null,
    //duration: null,
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  getData = () => {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.current_track.title,
          // artist: data.artist,
          // album: data.album,
          // link: data.buy_link,
          // duration: data.duration,
        });
        // call getData() again in 10 seconds
        this.intervalID = setTimeout(this.getData.bind(this), 10000);
      });
  };

  render() {
    const title = this.state.title;

    //const artist = this.state.artist;
    //const album = this.state.album;
    //const link = this.state.link;
    //const duration = this.state.duration;

    return (
      <DisplayData
        title={title}
        //artist={artist}
        //album={album}
        //link={link}
        //duration={duration}
      />
    );
  }
}

export class DisplayData extends React.Component {
  render() {
    return (
      <div key="displayData">
        [Title] {this.props.title}
        <br />
        <br />
        [Artist] <br />
        <br />
        [Album] <br />
        <br />
        [Links]{" "}
        <a href={this.props.title} target="_blank">
          {" "}
          Discogs{" "}
        </a>
      </div>
    );
  }
}

const STYLES_LOGO = css`
  display: absolute;
  margin-left: auto;
  margin-right: auto;

  @keyframes spinHorizontal {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

export class Logo extends React.Component {
  render() {
    return (
      <img css={STYLES_LOGO} height={this.props.height} src={this.props.url} />
    );
  }
}

const STYLES_NEON_CONTAINER = css`
  text-align: center;
  vertical-align: middle;
  horizontal-align: middle;
  margin-top: 5vw;

  @font-face {
    font-family: moon;
    src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/moon.ttf);
  }

  @font-face {
    font-family: clipneon;
    src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/clip.ttf);
  }

  @font-face {
    font-family: lasenter;
    src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/lasenter.ttf);
  }
`;

const STYLES_RESTAURANT = css`
  -ms-transform: rotate(-10deg); /* IE 9 */
  -webkit-transform: rotate(-10deg); /* Chrome, Safari, Opera */
  color: #28d7fe;
  font-family: lasenter;
  font-size: 7.5vw;
  transform: rotate(-10deg);
  text-shadow: 0.1vw 0vw 0.25vw #28d7fe, 0.2vw 0vw 0.25vw #28d7fe,
    0.4vw 0vw 0.25vw #28d7fe, 0.1vw 0vw 0.1vw #1041ff, 0.2vw 0vw 0vw #1041ff,
    0.4vw 0vw 0vw #1041ff, 0.1vw 0vw 0.1vw #1041ff, 0.2vw 0vw 0.1vw #1041ff,
    0.4vw 0vw 0vw #1041ff, 0.1vw 0vw 0.8vw #1041ff, 0.2vw 0vw 0.8vw #1041ff,
    0.4vw 0vw 0.8vw #1041ff, 0.2vw 0vw 0.5vw #1041ff, 0.1vw 0vw 0.5vw #1041ff,
    0.2vw 0vw 0.5vw #1041ff, 0.4vw 0vw 0.5vw #1041ff, 0.1vw 0vw 10vw #1041ff,
    0.2vw 0vw 10vw #1041ff, 0.4vw 0vw 10vw #1041ff;
`;

const STYLES_BAR = css`
  color: #a9ffdc;
  font-family: clipneon;
  font-size: 3vw;
  margin-left: 15vw;
  margin-top: -0.15vw;
  text-shadow: -0.1vw 0vw 0.25vw #a9ffdc, -0.2vw 0vw 0.25vw #a9ffdc,
    -0.4vw 0vw 0.25vw #a9ffdc, -0.1vw 0vw 0.1vw #00cc2a,
    -0.2vw 0vw 0.1vw #00cc2a, -0.4vw 0vw 0.1vw #00cc2a, -0.1vw 0vw 0.8vw #00cc2a,
    -0.2vw 0vw 0.8vw #00cc2a, -0.4vw 0vw 0.8vw #00cc2a, 0.2vw 0vw 0.5vw #00cc2a,
    -0.1vw 0vw 0.5vw #00cc2a, -0.2vw 0vw 0.5vw #00cc2a, -0.4vw 0vw 0.5vw #00cc2a,
    -0.1vw 0vw 10vw #16fa19, -0.2vw 0vw 10vw #16fa19, -0.4vw 0vw 10vw #16fa19;
`;

const STYLES_FLICKER = css`
  animation: letter-flicker 0.95s 0s ease infinite;
  display: inline;

  @keyframes letter-flicker {
    0%,
    100% {
      /* Enable hardware acceleration to fix laggy transitions */
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
      color: #a9ffdc;
      text-shadow: -0.1vw 0vw 0.25vw #a9ffdc, -0.2vw 0vw 0.25vw #a9ffdc,
        -0.4vw 0vw 0.25vw #a9ffdc, -0.1vw 0vw 1vw #00cc2a,
        -0.2vw 0vw 0.8vw #00cc2a, -0.4vw 0vw 0.8vw #00cc2a,
        0.2vw 0vw 0.5vw #00cc2a, -0.1vw 0vw 10vw #16fa19,
        -0.2vw 0vw 10vw #16fa19, -0.4vw 0vw 10vw #16fa19;
    }
    50% {
      /* Enable hardware acceleration to fix laggy transitions */
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -o-transform: translateZ(0);
      transform: translateZ(0);
      color: #28d7fe;
      text-shadow: -0.1vw 0vw 0.25vw #28d7fe, -0.2vw 0vw 0.25vw #28d7fe,
        -0.4vw 0vw 0.25vw #28d7fe, -0.1vw 0vw 0.8vw #1041ff,
        -0.2vw 0vw 0.8vw #1041ff, -0.4vw 0vw 0.8vw #1041ff,
        0.2vw 0vw 0.5vw #1041ff, -0.1vw 0vw 3vw #1041ff, -0.2vw 0vw 3vw #1041ff,
        -0.4vw 0vw 3vw #1041ff;
    }
  }
`;

export class Neon extends React.Component {
  render() {
    return (
      <div css={STYLES_NEON_CONTAINER}>
        <div css={STYLES_RESTAURANT}>midnight</div>
        <div css={STYLES_BAR}>
          EST.199<div css={STYLES_FLICKER}>X</div>
        </div>
      </div>
    );
  }
}
