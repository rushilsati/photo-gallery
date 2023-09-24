import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import TabNavigation from "./navigation/TabNavigation";
import EventProvider from "./context/EventContext";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <EventProvider>
        <TabNavigation />
      </EventProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
