/* global checkEmail */

import React from "react";

class Email extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Tab_Id: "Email"
    };
  }

  checkEmail = () => {
    var email = document.getElementById("inputemail").value;
    var sc = email.slice(email.length - 4);
    if(email.includes("@") && (sc == ".edu") || sc == ".com")
    {
      document.getElementById("result").innerHTML = "Input email valid!";
    }else{
      document.getElementById("result").innerHTML = "Invalid email addres";
    }
  }

  render() {
    return(
      <div style={{paddingLeft: 20}}>
        <br/>
        <label for="inputemail">Email:</label> <br/>
        <input type="text" id="inputemail" name="inputemail" placeholder="Enter your email" /><br/>
        <p id="result"></p>
        <br/>

        <button onClick={this.checkEmail} >Validate</button>
      </div>
    );
  }
}

export default Email;
