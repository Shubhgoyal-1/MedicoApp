// Imported Components and Libraries
import { View, Text, Pressable } from "react-native";

interface QueueCardProps {
  name: string;
  time: string;
  token: number;
  onPress?: () => void;
}

const QueueCard = ({ name, time, token, onPress }: QueueCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className="w-full rounded-3xl border-2 border-blue-500 bg-white px-6 py-5 flex-row items-center justify-between mb-6"
    >
      <View className="space-y-2">
        <Text className="text-lg text-gray-600">Current Patient</Text>
        <Text className="text-2xl font-bold text-black">{name}</Text>
      </View>

      <View className="items-end space-y-2">
        <Text numberOfLines={1} className="text-base font-semibold text-black">{time}</Text>
        <Text className="text-4xl font-extrabold text-black">{token}</Text>
      </View>
    </Pressable>
  );
};

export default QueueCard;
