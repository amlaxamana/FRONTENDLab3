import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "../style";
export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/registration/api/users/")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          </View>
        )}
      />
    </View>
  );
}
