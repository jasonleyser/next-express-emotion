import * as React from "react";
import * as Constants from "~/common/constants";
import { css } from "@emotion/react";
import ReactPlayer from "react-player";
import Link from 'next/link';

import data from '~/common/songlist.json';

export class Radio extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      started: false,
      playing: false,
      song_url: 'https://ipfs.io/ipfs/' + this.props.hash,
      name: null,
      artist: null,
      year: null,
      discogs: null,
      inline: true,
      played: null,
      end: null,
      runtime: 0,
      transition: false,
      level: 0,
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

    //const lvl = this.state.level;

    //if(lvl === 3){
      //lvl === 1;
      //console.log(lvl);
    //}else{
      //lvl = lvl + 1;
      //console.log(lvl);
    //}

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
      console.log('Last 10 remaining');

      if(this.state.transition === false) {
        this.setState({ transition: true })

        //var transitionSound = new Howl({
        //  src: ['/public/static/horn.wav'],
        //  volume: 0.75,
        //  rate: 0.75,
        //});

        //const x = Math.round(100 * (2.5 - (Math.random() * 5))) / 100;
        //const y = Math.round(100 * (2.5 - (Math.random() * 5))) / 100;

        //transitionSound.pos(x, y);
        //transitionSound.play();

      }

    }else{

      console.log('More than 10 remaining');
      this.setState({ transition: false })

    }
  }

  ref = player => {
    this.player = player
  }

   render() {

     const { song_url, playing, name, artist, year, discogs, inline, played, runtime } = this.state;

      return (
        <React.Fragment>
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
          />

            {this.state.playing ?
              <div  onClick={this.handlePlayPause}>
              || STOP STREAM
              </div>
              :
              <div  onClick={this.handlePlayPause}>
                >> START STREAM
              </div>
            }
          </React.Fragment>
      );
   }
}
