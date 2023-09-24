import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Constants from "expo-constants";
import { EventContext } from "../context/EventContext";
import ImageViewer from "./ImageViewer";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [offset, setOffset] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isTruncated, setIsTruncated] = useState(true);
  const [showImageViewer, setShowImageViewer] = useState(false);

  const { eventId } = useContext(EventContext);

  const loadMoreItem = () => setOffset(offset + 1);

  const getImages = () => {
    const data = {
      offset: 2,
      size: 5,
      eventId: "images",
    };

    axios
      .post(
        "https://qcxkmq3366.execute-api.us-east-2.amazonaws.com/ImageLibraryDev",
        {
          eventId,
          offset: 1,
          size: 10,
        }
      )
      .then((response) => {
        setIsTruncated(response.data.isTruncated);
        setImages((prevData) => [...prevData, ...response.data.imageURLs]);
      });
  };

  useEffect(() => {
    if (!isTruncated) return;
    getImages();
  }, [offset]);

  const handlePress = (image) => {
    setActiveImage(image);
    setShowImageViewer(true);
  };

  const close = () => {
    setShowImageViewer(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={images}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <Pressable onPress={() => handlePress(index)}>
              <Image
                source={{ uri: item }}
                height={170}
                width={170}
                style={styles.images}
              />
            </Pressable>
          );
        }}
        keyExtractor={(item, index) => index}
        onEndReached={loadMoreItem}
      />
      {showImageViewer && (
        <ImageViewer images={images} image={activeImage} close={close} />
      )}
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Constants.statusBarHeight,
  },
  images: {
    marginTop: 10,
    marginRight: 10,
    borderRadius: 10,
  },
});
