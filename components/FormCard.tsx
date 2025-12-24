import { View } from "react-native";
import React from "react";

export default function FormCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <View
      className="bg-[#1e1e1e] rounded-2xl p-6"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 8,
      }}
    >
      {children}
    </View>
  );
}
