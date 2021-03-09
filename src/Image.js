/* global closeImg */
/* global showImg */

import React from "react";
import Cloud from "./Resources/Cloud.jpg";
import Tifa from "./Resources/Tifa.jpg";
import Aerith from "./Resources/Aerith.jpg";
import Barret from "./Resources/Barret.jpg";
import Jess from "./Resources/Jess.jpg";
import Lude from "./Resources/Lude.jpg";
import Reno from "./Resources/Reno.jpg";
import Sephiroth from "./Resources/Sephiroth.jpg";


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
        <img onClick={this.showImg} src={Cloud} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Tifa} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Aerith} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Barret} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Jess} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Lude} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Reno} alt="HTML5 Icon" width="192" height="100"/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img onClick={this.showImg} src={Sephiroth} alt="HTML5 Icon" width="192" height="100"/>
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
