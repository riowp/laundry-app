import React, {useEffect, useState} from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import arrow from "../assets/logo/arrow.png";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import baseUrl from "../baseUrl";
function Detail({ navigation, route }) {
  const [product, setProduct] = useState(null)
  const { id } = route.params
  const fetchProductById = async (id) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: baseUrl + "/products/" + id,
      })
      setProduct(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchProductById(id)
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image source={{uri: product?.image}} style={styles.img} />
            <LinearGradient
              colors={["rgba(0, 200, 250, 0)", "#3B97CB"]}
              start={[1, 0]}
              end={[1, 1]}
              style={styles.gradient}
            />
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image source={arrow} style={styles.arr} />
            </TouchableOpacity>
          </View>
          <View style={styles.category}>
            <Text style={styles.textCategory}>{product?.Category?.name}</Text>
          </View>
          <View style={styles.mainText}>
            <Text style={styles.title}>{product?.name}</Text>
            <Text style={styles.price}>$ {product?.price}.00/pc</Text>
            <Text style={styles.desc}>{product?.description}</Text>
          </View>
          <View style={styles.container_amount}>
            <TouchableOpacity activeOpacity={0.8} style={styles.circleMin}>
              <Text style={styles.min}>-</Text>
            </TouchableOpacity>
            <View style={styles.amount}>
              <Text style={styles.number}>0</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.circlePlus}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7F5FD",
    marginBottom: 600,
  },
  img: {
    position: "absolute",
    width: "100%",
    height: 500,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  arr: {
    marginTop: 40,
    marginLeft: 30,
  },
  category: {
    backgroundColor: "#CAECFF",
    width: 80,
    height: 30,
    borderRadius: 5,
    position: "relative",
    top: 470,
    left: 30,
  },
  textCategory: {
    textAlign: "center",
    color: "#0099EE",
    paddingTop: 5,
    paddingHorizontal: 5,
    fontWeight: "400",
  },
  mainText: {
    position: "relative",
    top: 475,
    left: 30,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#3B97CB",
  },
  price: {
    fontSize: 23,
    color: "#0099EE",
    fontWeight: "500",
    marginTop: -5,
  },
  desc: {
    marginRight: 60,
    marginTop: 10,
    fontWeight: "400",
  },
  container_amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    top: 550,
  },
  circleMin: {
    backgroundColor: "#E0E0E0",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  min: {
    textAlign: "center",
    fontSize: 80,
    color: "white",
    marginTop: -35,
  },
  amount: {
    backgroundColor: "white",
    width: 100,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  number: {
    textAlign: "center",
    fontSize: 30,
    color: "#C9C9C9",
    marginTop: 5,
  },
  circlePlus: {
    backgroundColor: "#2D9CDB",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  plus: {
    textAlign: "center",
    fontSize: 50,
    color: "white",
    marginTop: -10,
  },
  gradient: {
    width: "100%",
    height: 250,
    alignSelf: "center",
    opacity: 0.5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: "absolute",
    top: 250,
  },
});
