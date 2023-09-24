import { Image, Pressable, StyleSheet, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

const ImageViewer = ({ images, image, close }) => {
  const [imageIndex, setImageIndex] = useState(image);

  const moveLeft = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };

  const moveRight = () => {
    setImageIndex(imageIndex - 1 === -1 ? images.length - 1 : imageIndex - 1);
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.closeButton} onPress={close}>
        <FontAwesome name="close" size={30} color="#fff" />
      </Pressable>
      <Image
        source={{ uri: images[imageIndex] }}
        style={styles.image}
        resizeMode="cover"
      />
      <Pressable style={styles.leftArrow} onPress={moveLeft}>
        <AntDesign name="caretleft" size={24} color="white" />
      </Pressable>
      <Pressable style={styles.rightArrow} onPress={moveRight}>
        <AntDesign name="caretright" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default ImageViewer;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  closeButton: {
    top: "6%",
    right: "8%",
    zIndex: 1,
    position: "absolute",
  },
  leftArrow: {
    top: "50%",
    left: "8%",
    zIndex: 1,
    position: "absolute",
  },
  rightArrow: {
    top: "50%",
    right: "8%",
    zIndex: 1,
    position: "absolute",
  },
  image: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    resizeMode: "contain",
  },
});
