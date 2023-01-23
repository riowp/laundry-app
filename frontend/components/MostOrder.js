import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import image1 from "../assets/image/image1.png";
import { LinearGradient } from "expo-linear-gradient";
function MostOrder() {
  return (
    <View>
      <Image source={image1} style={styles.img} />
      <LinearGradient 
      style={styles.gradient}
      colors={["rgba(0, 200, 250, 0)", "#3B97CB"]}
      start={[1, 0]}
      end={[1, 1]}
      />
        <Text style={styles.title}>Dry Cleaning</Text>
        <Text style={styles.amount}>12x | total of $ 4.000</Text>
   
    </View>
  );
}

export default MostOrder;

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 270,
    position: "relative",
    top: 100,
    marginHorizontal: 50,
    borderRadius: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    fontSize: 29,
    fontWeight: "700",
    position: "relative",
    left: 65,
    color: "#FFF",
    top: 20,
  },
  amount: {
    fontSize: 18,
    fontWeight: "500",
    position: "relative",
    left: 65,
    top: 20,
    color: "#FFF",
  },
  gradient: {
    width: 300,
    height: 135,
    position: "absolute",
    marginHorizontal: 50,
    top: 235,
    opacity: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
