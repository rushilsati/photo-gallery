import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { EventContext } from "../context/EventContext";
import { GALLERY } from "../Types";

const Home = () => {
  const { eventId, setEventId } = useContext(EventContext);

  const navigation = useNavigation();

  const handleChangeText = (text) => {
    setEventId(text);
  };

  const handleSubmit = async () => {
    if (eventId.trim().length === 0) return;

    navigation.navigate(GALLERY);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.helperText}>ENTER THE EVENT ID:</Text>
        <TextInput
          value={eventId}
          onChangeText={handleChangeText}
          placeholder="Event Id..."
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>GET IMAGES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 20,
    width: "80%",
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "white",
  },
  helperText: {
    fontSize: 18,
    color: "black",
    marginBottom: 30,
    fontWeight: "800",
  },
  textInput: {
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "black",
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0087ff",
  },
  buttonText: {
    color: "white",
    fontWeight: "800",
  },
});
