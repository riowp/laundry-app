import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import invoice from "../assets/logo/invoice.png";
import image2 from "../assets/image/image2.png";
function PreviousOrder({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.devide_1}>
        <Image source={image2} style={styles.img} />
        <Text style={styles.title}>Bag of Laundry</Text>
        <Text style={styles.totalOrder}>Total Order</Text>
        <Text style={styles.price}>$ 180.00</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Invoice")}
        activeOpacity={0.8}
        style={styles.devide_2}
      >
        <Image source={invoice} style={styles.logo} />
        <Text style={styles.textInvoice}>INVOICE</Text>
      </TouchableOpacity>
    </View>
  );
}

export default PreviousOrder;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    width: "75%",
    backgroundColor: "#E7F5FD",
    position: "relative",
    marginHorizontal: 50,
    top: 40,
  },
  devide_1: {
    flex: 2,
    backgroundColor: "#FFF",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  img: {
    width: 75,
    height: 75,
    position: "absolute",
    marginVertical: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    position: "absolute",
    top: 15,
    left: 80,
    color: "#525252",
  },
  totalOrder: {
    fontSize: 12,
    fontWeight: "400",
    position: "absolute",
    top: 45,
    left: 80,
  },
  price: {
    fontSize: 15,
    fontWeight: "700",
    position: "absolute",
    top: 65,
    left: 80,
    color: "#0099EE",
  },
  devide_2: {
    flex: 1,
    backgroundColor: "#0099EE",
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
    position: "absolute",
    marginTop: 15,
    marginHorizontal: 25,
  },
  textInvoice: {
    fontSize: 11,
    fontWeight: "500",
    position: "absolute",
    color: "#FFF",
    top: 80,
    marginHorizontal: 25,
  },
});
