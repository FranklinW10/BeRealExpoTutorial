import { Text, View, StyleSheet, TextInput, ActivityIndicator,} from "react-native";
import {Button, Host} from '@expo/ui/swift-ui'; 
import { Link, useRouter } from "expo-router"

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.helloworldTitle}>Hello World</Text>
      <TextInput placeholder="Email"/>
      <ActivityIndicator size={"large"}/>
      <Link href={"/about"}>Go to about screen</Link>
      <Host>
      <Button onPress={() => router.push("/about")}>
        <Text> Navigate</Text>
      </Button>
      </Host>
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