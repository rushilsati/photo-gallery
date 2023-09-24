import "react-native-gesture-handler";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { GALLERY, HOME } from "../Types";
import Gallery from "../screens/Gallery";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={GALLERY} component={Gallery} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
