import * as React from "react";
import { css } from "@emotion/react";

export class GetData extends React.Component {
    intervalID;

    url = this.props.url;

    state = {
      data: [],
      title: null,
      artist: null,
      album: null,
      link: null,
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

      return (
        <DisplayData
          title={title}
          artist={artist}
          album={album}
          link={link}
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
          [Links] <a href={this.props.link} target="_blank">Discogs</a>
        </div>
      );
   }
}
