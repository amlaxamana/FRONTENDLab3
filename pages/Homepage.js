import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../style.js";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Homepage</Text>
      <View style={styles.Button}>
        <Button
          title="Register"
          color="#116586ff"
          onPress={() => navigation.navigate("Register")}
        />
      </View>

      <View>
        <Button
          title="User List"
          color="#116586ff"
          onPress={() => navigation.navigate("UserList")}
        />
      </View>
    </View>
  );
}
