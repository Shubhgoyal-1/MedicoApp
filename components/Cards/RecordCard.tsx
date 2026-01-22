// Imported Components and Libraries
import { View, Text, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Imported Types
import { MedicalHistory } from "@/types/type";
interface Props {
    record: MedicalHistory;
}

const MedicalRecordCard = ({ record }: Props) => {
    // Destructure record details

    const {
        condition,
        doctorId,
        notes,
        treatment,
    } = record;

    return (
        <View className="bg-white border-2 border-blue-500 rounded-3xl p-5 flex-row items-start mb-2">
            <View className="mr-4 mt-1">
                <MaterialCommunityIcons
                    name="clipboard-text-outline"
                    size={40}
                    color="#2563eb"
                />
            </View>
            <View className="flex-1">

                <Text className="text-xl font-semibold text-black mb-3">
                    {condition}
                </Text>

                <Text className="text-base font-medium text-black mb-3">
                    Dr. {doctorId.firstName} {doctorId.lastName}
                </Text>

                <View className="flex-row items-center">
                    <Text
                        numberOfLines={1}
                        className="flex-1 text-sm text-gray-700"
                    >
                        Diagnosis: {notes || treatment || "No additional notes"}
                    </Text>
                    <Pressable
                        //   onPress={() => router.push()}
                        className="bg-blue-500 px-5 py-2 rounded-full shrink-0"
                    >
                        <Text className="text-white font-semibold text-sm">
                            View full →
                        </Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
};

export default MedicalRecordCard;
