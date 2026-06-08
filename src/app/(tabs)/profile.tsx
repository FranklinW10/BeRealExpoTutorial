import { Text, View, StyleSheet, TextInput, ActivityIndicator,} from "react-native";
import {Image} from "expo-image"; 
import { Link, useRouter } from "expo-router";
import {Host, VStack, Button, BottomSheet, ColorPicker} from "@expo/ui/swift-ui";
import {useState} from "react";
import ColorPickerIOS from "@/components/Color-Picker.ios";
import {Platform} from "react-native";

export default function Profile() {
  const [color, setColor] = useState("#FF6347")
  return (
    <View style={styles.container}>

      <Host>
        {Platform.OS=="ios"&& <ColorPickerIOS/>}
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
