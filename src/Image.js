/* global closeImg */
/* global showImg */
/* global largePic */

import React from "react";


class Image extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        Tab_Id: "Images",
        renderDiv:false,
        largeSrc:'/Resources/Pic_2.jpg'
      };
    }

  closeImg = () => {
    this.setState({
      renderDiv:false
    });
  }

  showImg = (source) => {
    this.setState({
      renderDiv:true,
      largeSrc:source.target.src
    });
  }

  render(){

      const pics =
      <div>
        <img onClick={this.showImg} src={"./Resources/Cloud.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Tifa.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Aerith.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Barret.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Jess.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Lude.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Reno.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={"./Resources/Sephiroth.jpg"} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </div>

      const largeView =
      <div>
        <div id="popWindow" onClick={this.closeImg} className={"popWindow"} />
        <div id="maskLayer"  className={"maskLayer"} >
            <img id="enlargedpic" className={"pimg"} src={this.state.largeSrc} alt="large" width="768" height="400" />
        </div>
        {pics}
      </div>


      if (this.state.renderDiv === false) {
          return pics;
      }
      else {return largeView;}
  }
}

export default Image;
