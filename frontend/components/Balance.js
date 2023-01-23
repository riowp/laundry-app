import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
function Balance() {
  return (
    <View style={styles.container}>
      <View style={styles.circle_1} />
      <View style={styles.circle_2} />
      <Text style={styles.textBalance}>Your Balance</Text>
      <Text style={styles.textPrice}>$ 200.00</Text>
    </View>
  );
}

export default Balance;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginTop: 115,
    width: "75%",
    height: 152,
    backgroundColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  circle_1: {
    height: 120,
    width: 120,
    backgroundColor: "#0099EE",
    borderRadius: 60,
    position: "absolute",
    top: -40,
    left: -40,
  },
  circle_2: {
    height: 30,
    width: 30,
    backgroundColor: "#F36868",
    borderRadius: 15,
    position: "relative",
    right: -90,
    top: 20,
  },
  textBalance: {
    fontSize: 16,
    fontWeight: "400",
    position: "absolute",
    top: 65,
    left: 200,
  },
  textPrice: {
    fontSize: 32,
    fontWeight: "700",
    position: "absolute",
    top: 90,
    left: 170,
    color: "#0099EE",
  },
});
