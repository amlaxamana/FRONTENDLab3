import { View, Text, FlatList, Alert } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style";
import { Button } from "react-native-web";
export default function UserListPage({ navigation }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://192.168.20.216:8000/registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEdit = (user) => {
    navigation.navigate("Edituser", { user });
  };

  const handleDelete = (id) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this user?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            axios
              .delete(
                `http://192.168.20.216:8000/registration/api/users/${id}/`
              )
              .then(() => {
                Alert.alert("Success", "User deleted successfully");
                // Optionally refresh the user list here
              })
              .catch((err) => {
                Alert.alert("Error", "Failed to delete user");
              });
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titlelist}>Registered Users</Text>
      <FlatList
        data={users}
        s
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.uselist}>
            <Text style={styles.info}>Firstname: {item.first_name}</Text>
            <Text style={styles.info}>Lastname: {item.last_name}</Text>
            <Text style={styles.info}>email: {item.email}</Text>
            <View>
              <Button
                color="#7DDA58"
                title="Edit"
                onPress={() => handleEdit(item)}
              />
              <Button
                color="#D20103"
                title="Delete"
                onPress={() => handleDelete(item)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
