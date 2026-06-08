import { Text, View, StyleSheet, TextInput, ActivityIndicator} from "react-native";
import {Image} from "expo-image"; 
import { Link } from "expo-router"

export default function Index() {
  return (
    <View style={styles.container}>
      <Image 
        source={{
          uri: "https://media.tenor.com/wy2zHeWyf2gAAAAe/side-eye-dog-suspicious-look.png", 
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloworldTitle: {
    color: "red"
  },
  image: {
    width: 200, 
    height: 200,
  },
});
