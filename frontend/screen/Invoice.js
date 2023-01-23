import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import arrow from "../assets/logo/arrow.png";
import wa from "../assets/logo/wa.png";
import image2 from "../assets/image/image2.png";
function Invoice({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container_1}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image source={arrow} style={styles.arr} />
          </TouchableOpacity>
          <View style={styles.container_2}>
            <View style={styles.container_title}>
              <Text style={styles.title}>ORDER SUMMARY</Text>
            </View>
            <View style={styles.container_detail}>
              <Text style={styles.invoiceNumber}>ORDER #21340</Text>
              <Text style={styles.person}>John Doe</Text>
              <Text style={styles.address_1}>1234 Pasir Ris,</Text>
              <Text style={styles.address_2}>13810, Singapore</Text>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image2} style={styles.imgList} />
                  <Text style={styles.titleList}>Bag of Laundry</Text>
                  <Text style={styles.qty}>Qty: 2</Text>
                  <Text style={styles.subTotal}>Total</Text>
                  <Text style={styles.subPrice}>$ 180.00</Text>
                  <View style={styles.line} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image2} style={styles.imgList} />
                  <Text style={styles.titleList}>Dry Cleaning</Text>
                  <Text style={styles.qty}>Qty: 3</Text>
                  <Text style={styles.detailTotal2}>Total</Text>
                  <Text style={styles.detailPrice2}>$ 10.00</Text>
                  <View style={styles.line} />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image source={image2} style={styles.imgList} />
                  <Text style={styles.titleList}>Rug</Text>
                  <Text style={styles.qty}>Qty: 1</Text>
                  <Text style={styles.detailTotal3}>Total</Text>
                  <Text style={styles.detailPrice3}>$ 14.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.container_total}>
              <Text style={styles.totalOrder}>TOTAL ORDER</Text>
              <Text style={styles.totalPrice}>$ 204.00</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.7} style={styles.container_wa}>
            <Image source={wa} style={styles.logoWa} />
            <Text style={styles.wa}>WHATSAPP US</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Invoice;

const styles = StyleSheet.create({
  container_1: {
    backgroundColor: "#E7F5FD",
  },
  arr: {
    marginTop: 40,
    marginLeft: 30,
  },
  container_2: {
    display: "flex",
    flexDirection: "column",
    width: 300,
    height: 470,
    marginHorizontal: 56,
    marginTop: 30,
    borderRadius: 20,
  },
  container_title: {
    flex: 1.1,
    backgroundColor: "#0099EE",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "white",
  },
  container_detail: {
    flex: 5,
    backgroundColor: "white",
  },
  invoiceNumber: {
    textAlign: "right",
    marginRight: 20,
    marginTop: 20,
    color: "#0099EE",
  },
  person: {
    marginLeft: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
  },
  address_1: {
    marginLeft: 20,
    marginTop: 5,
  },
  address_2: {
    marginLeft: 20,
  },
  imgList: {
    marginTop: 20,
    width: 46,
    height: 50,
    marginLeft: 20,
  },
  titleList: {
    marginLeft: 5,
    marginTop: 30,
    position: "relative",
  },
  qty: {
    position: "absolute",
    left: 70,
    top: 50,
    fontSize: 10,
    color: "#0099EE",
  },
  subTotal: {
    postion: "relative",
    top: 30,
    left: 60,
    fontSize: 12,
  },
  subPrice: {
    postion: "relative",
    top: 45,
    left: 20,
    fontWeight: "bold",
    color: "#0099EE",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#3B97CB",
    position: "absolute",
    top: 75,
  },
  container_total: {
    flex: 1,
    backgroundColor: "#0099EE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  totalOrder: {
    marginLeft: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  totalPrice: {
    marginRight: 20,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container_wa: {
    width: 300,
    height: 60,
    marginHorizontal: 56,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: "#56E4A0",
  },
  logoWa: {
    left: 80,
    top: 15,
  },
  wa: {
    textAlign: "center",
    left: 20,
    fontSize: 15,
    bottom: 12,
    fontWeight: "bold",
    color: "white",
  },
  detailTotal2: {
    postion: "relative",
    top: 30,
    left: 76,
    fontSize: 12,
  },
  detailPrice2: {
    postion: "relative",
    top: 45,
    left: 36,
    fontWeight: "bold",
    color: "#0099EE",
  },
  detailTotal3: {
    postion: "relative",
    top: 30,
    left: 131,
    fontSize: 12,
  },
  detailPrice3: {
    postion: "relative",
    top: 45,
    left: 90,
    fontWeight: "bold",
    color: "#0099EE",
  },
});
