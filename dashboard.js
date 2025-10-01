import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./pages/Homepage";
import Registerpage from "./pages/registerpage";
import ReviewPage from "./pages/reviewpage";
const stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Homepage} />
        <stack.Screen name="Register" component={Registerpage} />
        <stack.Screen name="Review" component={ReviewPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
