import React, { Component } from "react";
import "./styles.css";

class Text extends React.Component {
  render(){
    return (
      <div className="text">
      <form>
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" /><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" /><br /><br />

        <p>Have you played Final Fantasy VII RE?</p>

        <input type="radio" id="Yes" name="Choice" value="Yes" />
        <label for="Yes">Yes, I love it!</label><br />
        <input type="radio" id="No" name="Choice" value="No" />
        <label for="No">No</label><br />
        <input type="radio" id="other" name="Choice" value="Will try maybe?" />
        <label for="other">Will try maybe?</label><br /><br />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Text;
