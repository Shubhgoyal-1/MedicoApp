//Imported Components and Libraries
import { Stack } from "expo-router";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";

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
