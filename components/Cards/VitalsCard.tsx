// Imported Components and Libraries
import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Imported Types
import { Vital } from "@/types/type";

interface Props {
  vitals: Vital[];
}

const VitalsCards = ({ vitals }: Props) => {
  return (
    <View className="flex-row flex-wrap justify-between mt-8 mb-12 px-2">
      {vitals.map((vital) => (
        <View
          key={vital.id}
          className="w-[48%] bg-white border-2 border-blue-500 rounded-3xl px-5 py-6 mb-4"
        >
          <Text className="text-xl font-semibold text-black mb-4">
            {vital.label}
          </Text>

          <Text
            className={`text-3xl font-extrabold mb-6 ${
              vital.valueColor || "text-green-400"
            }`}
          >
            {vital.value}
            {vital.unit ? ` ${vital.unit}` : ""}
          </Text>

          <MaterialCommunityIcons
            name={vital.icon}
            size={42}
            color={vital.iconColor || "#111"}
          />
        </View>
      ))}
    </View>
  );
};

export default VitalsCards;
