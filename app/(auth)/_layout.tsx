import React from "react";
import { Navigator, Slot, Stack } from "expo-router";
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import appBackground from "../../assets/Background.png";

export default function AuthLayout() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "transparent" },
          }}
        />
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
