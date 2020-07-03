import * as React from "react";
import * as Constants from "~/common/constants";
import { css } from "@emotion/react";
import ReactPlayer from "react-player";
import data from '~/common/songlist.json';

const STYLES_WHITE = css`
  color: ${Constants.colors.pink };
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
    }

    componentDidMount() {
      this.getData();
    }

    componentWillUnmount() {
      clearTimeout(this.intervalID);
    }

    getData = () => {
      fetch(this.url)
        .then(response => response.json())
        .then(data => {
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
    }

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
          [Title] {this.props.title}<br /><br />
          [Artist] <br /><br />
          [Album] <br /><br />
          [Links] <a href={this.props.title} target="_blank"> Discogs </a>
        </div>
      );
   }
}

const STYLES_LOGO = css`
  display: block;
  margin-left: auto;
  margin-right: auto;

  :hover{
    cursor:crosshair;
  }
`;

export class Logo extends React.Component {
   render() {
      return (
        <img
          css={STYLES_LOGO}
          height={this.props.height}
          src={this.props.url} />
      );
   }
}


export class Player extends React.Component {
   render() {
      return (
        <img
          css={STYLES_LOGO}
          height={this.props.height}
          src={this.props.url} />
      );
   }
}
