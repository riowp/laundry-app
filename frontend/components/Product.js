import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
function Product({ navigation, product }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", {id: product.id})}
      activeOpacity={0.8}
    >
      <Image source={{uri: product.image}} style={styles.img} />
      <LinearGradient
        colors={["rgba(0, 200, 250, 0)", "#3B97CB"]}
        style={styles.gradient}
        start={[1, 0]}
        end={[1, 1]}
      />
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 10,
          backgroundColor: "red",
          position: "absolute",
          top: 256,
          left: 40,
        }}
      />
      <Text style={styles.category}>{product.Category.name}</Text>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>$ {product.price}.00/pc</Text>
    </TouchableOpacity>
  );
}

export default Product;

const styles = StyleSheet.create({
  img: {
    top: 100,
    marginLeft: 25,
    height: 270,
    width: 200,
    borderRadius: 10,
  },
  category: {
    fontSize: 13,
    fontWeight: "400",
    position: "relative",
    left: 55,
    top: -150,
    color: "#FFF",
  },
  title: {
    fontSize: 40,
    fontWeight: "700",
    position: "relative",
    left: 40,
    top: -150,
    color: "#FFF",
  },
  price: {
    fontSize: 25,
    fontWeight: "400",
    position: "relative",
    left: 40,
    top: -155,
    color: "#FFF",
  },
  gradient: {
    width: 200,
    height: 130,
    position: "relative",
    marginLeft: 25,
    opacity: 0.5,
    top: -30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
