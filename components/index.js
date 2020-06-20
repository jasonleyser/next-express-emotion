import * as React from "react";
import Typist from 'react-typist';
import * as Constants from "~/common/constants";
import { css } from "@emotion/react";

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
      artist: null,
      album: null,
      link: null,
      duration: null,
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
            title: data.title,
            artist: data.artist,
            album: data.album,
            link: data.buy_link,
            duration: data.duration,
           });
          // call getData() again in 10 seconds
          this.intervalID = setTimeout(this.getData.bind(this), 10000);
        });
    }

   render() {
     const title = this.state.title;
     const artist = this.state.artist;
     const album = this.state.album;
     const link = this.state.link;
     const duration = this.state.duration;

      return (
        <DisplayData
          title={title}
          artist={artist}
          album={album}
          link={link}
          duration={duration}
        />
      );

   }
}

export class DisplayData extends React.Component {
   render() {
      return (
        <div key="displayData">
          [Title] {this.props.title}<br /><br />
          [Artist] {this.props.artist}<br /><br />
          [Album] {this.props.album}<br /><br />
          [Links] <a href={this.props.link} target="_blank"> Discogs </a>
        </div>
      );
   }
}

export class Logo extends React.Component {
   render() {
      return (
        <div key="logo">
          <Typist cursor='true'>
            <span>[> <div css={STYLES_WHITE}> MIDNIGHT RADIO </div> ] </span>
            <Typist.Backspace count={18} delay={2000} />
            <span><div css={STYLES_WHITE}> OLD IS GOLD </div> ] </span>
            <Typist.Backspace count={15} delay={2000} />
            <span><div css={STYLES_WHITE}> MIDNIGHT RADIO </div> ] </span>
          </Typist>
        </div>
      );
   }
}
