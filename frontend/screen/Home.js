import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Balance from "../components/Balance";
import PreviousOrder from "../components/PreviousOrder";
import MostOrder from "../components/MostOrder";
import Product from "../components/Product";
import axios from "axios";
import baseUrl from "../baseUrl";
function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios({
        method: "GET",
        url: baseUrl + "/products",
      });
      setProducts(data);
    } catch (err) {
      console.log(err)
    } 
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const content = () => {
    return isLoading ? (
      <ActivityIndicator size="large"/>
    ) : (
      <>
        {
          products?.map(product=> {
            return <Product key={product.id} navigation={navigation} product={product}/>
          })
        }
      </>
    )
  };
  return (
    <>
      <SafeAreaView>
        <ScrollView
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchProducts} />
        }
        >
          <View style={styles.container}>
            <View style={styles.bigCicle} />
            <View>
              <Text style={styles.jhon}>Welcome, John</Text>
            </View>
            <Balance />
            <Text style={styles.prevOrder}>PREVIOUS ORDER</Text>
            {/* SEMENTARA START */}
            <TouchableOpacity
              onPress={() => navigation.navigate("AddProduct")}
              style={{
                position: "absolute",
                alignSelf: "center",
                top: 20,
                width: 50,
                height: 50,
                backgroundColor: "#FFF",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontSize: 50,
                  textAlign: "center",
                  top: -10,
                }}
              >
                +
              </Text>
            </TouchableOpacity>
            {/* SEMENTARA END */}
            <PreviousOrder navigation={navigation} />
            <Text style={styles.order}>YOUR MOST ORDERED</Text>
            <MostOrder />
            <Text style={styles.order}>OUR LATEST PRODUCT</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
              {content()}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7F5FD",
    height: 1200,
  },
  bigCicle: {
    right: -200,
    top: -560,
    width: 800,
    height: 800,
    backgroundColor: "#F36868",
    borderRadius: 400,
    overflow: "hidden",
    position: "absolute",
  },
  jhon: {
    fontSize: 16,
    fontWeight: "500",
    color: "#FFF",
    position: "absolute",
    top: 80,
    left: 50,
  },
  prevOrder: {
    fontSize: 16,
    fontWeight: "700",
    position: "relative",
    top: 30,
    left: 50,
    color: "#3B97CB",
  },
  order: {
    fontSize: 16,
    fontWeight: "700",
    position: "relative",
    top: 80,
    left: 50,
    color: "#3B97CB",
  },
});
