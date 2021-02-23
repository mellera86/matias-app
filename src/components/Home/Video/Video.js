import React, { Component } from 'react';
import YouTube from 'react-youtube';
import classes from './Video.module.scss';

class Video extends Component {
  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        disablekb: 1,
        rel: 1,
        loop: 1,
        showinfo: 0,
        authide: 1
      },
    };

    return (
      <React.Fragment>
        <div className={classes.videoContainer}>
          <div className={classes.text}>I CAN DO COOL</div>
          <YouTube videoId="ma67yOdMQfs" opts={opts} onReady={this._onReady} />
        </div>
      </React.Fragment>
    )
  }

  _onReady(event) {
    // event.target.pauseVideo();
  }
}

export default Video;



