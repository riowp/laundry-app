import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ScrollView } from "react-native-gesture-handler";
import addImage from "../assets/logo/addImage.png";
import axios from "axios";
import baseUrl from "../baseUrl";

const createFormData = (image, dataInput, CategoryId = {}) => {
  const data = new FormData();
  data.append("image", {
    name: "image.jpg",
    type: "image/jpeg",
    uri: image,
  });
  Object.keys(dataInput).forEach((key) => {
    data.append(key, dataInput[key]);
  })
  data.append("CategoryId", CategoryId);
  return data;
};
const AddNewProduct = ({navigation}) => {
  const [CategoryId, setCategoryId] = useState(1);
  const [image, setImage] = useState(null);

  const [dataInput, setDataInput] = useState({
    name: "",
    description: "",
    SKU: "",
    stock: 0,
    price: 0,
  });

  const onChangeInput = (key, value) => {
    setDataInput({
      ...dataInput,
      [key]: value,
    });
  };

  const handleChooseImage = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    };
    const result = await ImagePicker.launchImageLibraryAsync(options);
    if (!result.canceled) {
      const selectedAsset = result.assets[0];
      const uri = selectedAsset.uri;
      setImage( uri );
    }
  };

  const handleSelectCategory = (value) => {
    setCategoryId(value);
  };

  const handleSubmit = async () => {
    try {
      const formData = createFormData(image, dataInput, CategoryId);
      await axios({
        method: "POST",
        url: baseUrl + "/products",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
        accept: "application/json",
      });
      navigation.navigate("Home");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container_tittle}>
          <View style={styles.blueCircle} />
          <View style={styles.redCircle} />
          <Text style={styles.title}>BeLaundry</Text>
        </View>
        <Text style={styles.addNew}>Add New Product</Text>
        <View
          style={{
            marginHorizontal: 25,
          }}
        >
          <View>
            <Text style={styles.subTitle}>Product Name</Text>
            <TextInput
              value={dataInput.name}
              style={styles.input}
              onChangeText={(value) => onChangeInput("name", value)}
            />
          </View>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text style={styles.subTitle}>Description</Text>
            <TextInput
              multiline={true}
              numberOfLines={4}
              value={dataInput.description}
              onChangeText={(value) => onChangeInput("description", value)}
              style={styles.inputDesc}
            />
          </View>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text style={styles.subTitle}>SKU</Text>
            <TextInput
              value={dataInput.SKU}
              style={styles.input}
              onChangeText={(value) => onChangeInput("SKU", value)}
            />
          </View>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text style={styles.subTitle}>Stock</Text>
            <TextInput
              value={dataInput.stock}
              style={styles.inputStock}
              onChangeText={(value) => onChangeInput("stock", value)}
              keyboardType="number-pad"
            />
          </View>
          <View
            style={{
              marginTop: 25,
            }}
          >
            <Text style={styles.subTitle}>Category</Text>
            <View>
              <TouchableOpacity
                onPress={() => handleSelectCategory(1)}
                style={{
                  backgroundColor: CategoryId === 1 ? "#3B97CB" : "#CAECFF",
                  width: 170,
                  height: 60,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: CategoryId === 1 ? "#FFF" : "#3B97CB",
                    paddingHorizontal: 5,
                    fontSize: 20,
                    fontWeight: "400",
                  }}
                >
                  Wash and Fold
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectCategory(2)}
                style={{
                  backgroundColor: CategoryId === 2 ? "#3B97CB" : "#CAECFF",
                  width: 120,
                  height: 60,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: -60,
                  left: 190,
                }}
              >
                <Text
                  style={{
                    color: CategoryId === 2 ? "#FFF" : "#3B97CB",
                    paddingHorizontal: 5,
                    fontSize: 20,
                    fontWeight: "400",
                  }}
                >
                  Dry Clean
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectCategory(3)}
                style={{
                  backgroundColor: CategoryId === 3 ? "#3B97CB" : "#CAECFF",
                  width: 120,
                  height: 60,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: -40,
                }}
              >
                <Text
                  style={{
                    color: CategoryId === 3 ? "#FFF" : "#3B97CB",
                    paddingHorizontal: 5,
                    fontSize: 20,
                    fontWeight: "400",
                  }}
                >
                  Home
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleSelectCategory(4)}
                style={{
                  backgroundColor: CategoryId === 4 ? "#3B97CB" : "#CAECFF",
                  width: 120,
                  height: 60,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  top: -100,
                  left: 140,
                }}
              >
                <Text
                  style={{
                    color: CategoryId === 4 ? "#FFF" : "#3B97CB",
                    paddingHorizontal: 5,
                    fontSize: 20,
                    fontWeight: "400",
                  }}
                >
                  Others
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: -70,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                color: "#3B97CB",
              }}
            >
              Price
            </Text>
            <TextInput
              value={dataInput.price}
              onChangeText={(value) => onChangeInput("price", value)}
              // onChangeText={(text) => setPrice(text)}
              keyboardType="number-pad"
              style={styles.inputPrice}
            />
          </View>
          <TouchableOpacity
            onPress={handleChooseImage}
            activeOpacity={0.8}
            style={styles.containerImagePicker}
          >
            {image ? (
              <Image source={{uri: image}} style={{ width: 250, height: 250 }} />
            ) : (
              <>
                <Image source={addImage} />
                <Text style={styles.pickImage}>Upload image here</Text>
              </>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.containerPublish}
          >
            <Text style={styles.textPublish}>Publish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddNewProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7F5FD",
    marginBottom: 20,
  },
  container_tittle: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 70,
  },
  blueCircle: {
    backgroundColor: "#0099EE",
    width: 30,
    height: 30,
    borderRadius: 15,
    position: "relative",
    top: 20,
    left: 20,
  },
  redCircle: {
    backgroundColor: "#F36868",
    width: 15,
    height: 15,
    borderRadius: 7.5,
    position: "relative",
    top: -20,
    left: 50,
  },
  title: {
    position: "relative",
    top: -25,
    left: 75,
    fontSize: 23,
    fontWeight: "bold",
    color: "#0099EE",
  },
  addNew: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
    color: "#303030",
    marginVertical: 25,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: "#3B97CB",
  },
  input: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#3B97CB",
  },
  inputDesc: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 100,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#3B97CB",
  },
  inputStock: {
    backgroundColor: "#FFF",
    width: "30%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#3B97CB",
  },
  inputPrice: {
    backgroundColor: "#FFF",
    width: "45%",
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#3B97CB",
  },
  containerImagePicker: {
    marginTop: 25,
    marginBottom: 25,
    backgroundColor: "#FFF",
    width: "100%",
    height: 300,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  pickImage: {
    fontSize: 25,
    fontWeight: "400",
    color: "#3B97CB",
    textDecorationLine: "underline",
    position: "relative",
    top: 40,
    fontWeight: "bold",
  },
  containerPublish: {
    backgroundColor: "#56E4A0",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textPublish: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
});
