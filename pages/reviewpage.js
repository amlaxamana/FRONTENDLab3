import { View, Text, Button, Alert } from "react-native";
import styles from "../style";
import axios from "axios";

export default function ReviewPage({ route, navigation }) {
  const { formData } = route.params;

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/registration/api/register/",
        formData
      );
      Alert.alert("Success!", "User Regesitered!");
      navigation.getBack();
    } catch (error) {
      Alert.alert(
        "Error",
        JSON.stringify(error.response?.data || "Something went wrong")
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text1}>Review Information</Text>

      <Text style={styles.inputreview}>Firstname: {formData.first_name}</Text>
      <Text style={styles.inputreview}>Lastname: {formData.last_name}</Text>
      <Text style={styles.inputreview}>Email: {formData.email}</Text>
      <Text style={styles.inputreview}>Password: {formData.password}</Text>
      <Text style={styles.inputreview}>Gender: {formData.gender}</Text>

      <Button
        color="#116586ff"
        title="Go Back to edit"
        onPress={() => navigation.goBack("Register")}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
