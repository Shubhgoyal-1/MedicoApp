import { Stack } from "expo-router";
import "./global.css";
import { ImageBackground, View, StyleSheet } from "react-native";
import { images } from "@/constants";
import AppBackground from "../assets/Background.png";

export default function RootLayout() {
  return (
    <ImageBackground
      source={AppBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Stack screenOptions={{ 
          headerShown: false, 
          contentStyle: { backgroundColor: 'transparent' } 
          }} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "red",
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
