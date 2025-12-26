import { Stack } from "expo-router";
import "./global.css";
import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";
import { images } from "@/constants";
import AppBackground from "../assets/Background.png";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../assets/Logo.png'
export default function RootLayout() {
  return (
    <ImageBackground
      source={AppBackground}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View className="flex-row items-center justify-between mt-0 mb-4 px-6">
          <Text
            allowFontScaling={false}
            className="text-3xl font-bold tracking-wider text-white"
          >
            MEDICO
          </Text>
          <Image
            source={logo}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />

        </View>
        <Stack screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' }
        }} />
      </SafeAreaView>
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
