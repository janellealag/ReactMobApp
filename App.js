import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Presentational from "./components/Presentational";
import { Lists } from "./components/Lists";

export default class App extends React.Component {
  state = {
    myState: "Lorem ipsum dolor sit amet,"
  };
  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };
  render() {
    return (
      <View>
        {/* <Presentational
          myState={this.state.myState}
          updateState={this.updateState}
        /> */}
        <Lists />
      </View>
    );
  }
}
