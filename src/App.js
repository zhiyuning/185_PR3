import React, { Component } from "react";
import "./styles.css";
import Tabs from "./tab";
import TabPane from "./tab-pane";
import Text from "./Text";
import Image from "./Image";
import Video from "./Video"
import Table from "./Table"
import Email from "./Email"
import ScrollTop from "./ScrollTop"


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">Website with React Tab Component</div>
        <div className="container">
          <Tabs>
            <TabPane name="Text" key="1">
              <Text />
            </TabPane>
            <TabPane name="Images" key="2">
              <Image />
            </TabPane>
            <TabPane name="Video" key="3">
              <Video />
            </TabPane>
            <TabPane name="Table" key="4">
              <Table />
            </TabPane>
            <TabPane name="Email" key="5">
              <Email />
            </TabPane>
          </Tabs>
        </div>
        <footer>
        <ScrollTop />
        </footer>
      </div>
    );
  }
}

export default App;
