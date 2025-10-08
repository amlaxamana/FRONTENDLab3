import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Homepage from "./pages/Homepage";
import Registerpage from "./pages/registerpage";
import ReviewPage from "./pages/reviewpage";
import UserListPage from "./pages/userlistpage";
import EditUserPage from "./pages/edituserpage";

const stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component={Homepage} />
        <stack.Screen name="Register" component={Registerpage} />
        <stack.Screen name="Review" component={ReviewPage} />
        <stack.Screen name="UserList" component={UserListPage} />
        <stack.Screen name="Edituser" component={EditUserPage} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
