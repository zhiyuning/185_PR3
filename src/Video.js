/* global closeVideo */
/* global showVideo */


import React from "react";
import Sample from "./Video/V.mp4"


class Video extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Video",
        renderDiv:false,
        largeSrc:'/Resources/Pic_2.jpg'
      };
    }

    closeVideo= () => {
        this.setState({ renderDiv:false });
    }

    showVideo = (source) => {
        this.setState({
            renderDiv:true,
            largeSrc:source.target.getElementsByTagName("source")[0].src
        });
      }

  render() {

    const vids =
    <div>
        <h4>Youtube video does not work, so I use my own videos, which is taken from Hokkadio, Japan</h4>
        <video onClick={this.showVideo} className="videos" width="320" height="240" controls loop>
            <source src={Sample} type="video/mp4"/>
        </video>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <video onClick={this.showVideo} className="videos" width="320" height="240" controls loop>
            <source src={Sample} type="video/mp4"/>
        </video>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <video onClick={this.showVideo} className="videos" width="320" height="240" controls loop>
            <source src={Sample} type="video/mp4"/>
        </video>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <video onClick={this.showVideo} className="videos" width="320" height="240" controls loop>
            <source src={Sample} type="video/mp4"/>
        </video>
    </div>

    const largeVid =
    <div>
      <div id="popWindow" onClick={this.closeVideo} className={"popWindow"} />
      <div id="maskLayer"  className={"maskLayer"} >
        <video id="enlargedpic" width="1280" height="960" controls loop>
          <source src={this.state.largeSrc} type="video/mp4"/>
        </video>
      </div>
      {vids}
    </div>


    if (this.state.renderDiv === false) {
      return vids;
    }
    else {
      return largeVid;
    }
  }
}

export default Video;
