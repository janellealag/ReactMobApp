import React, { Component } from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

const Presentational = props => {
  return (
    <View style={styles.container}>
      <View style={styles.redbox} />
      <View style={styles.bluebox} />
      <Text style={styles.myState} onPress={props.updateState}>
        {props.myState}
      </Text>
    </View>
  );
};

export default Presentational;

const styles = StyleSheet.create({
  myState: {
    marginTop: 20,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
    fontSize: 20
  },
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "grey",
    height: 600
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: "red"
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: "blue"
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: "black"
  }
});
