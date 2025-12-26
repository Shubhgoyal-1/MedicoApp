import { View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PatientMedication } from "@/types/type";

interface Props {
    item: PatientMedication;
}

const MedicationCard = ({ item }: Props) => {
    const { medicationId, dosage, time, startDate, endDate } = item;

    return (
        <View className="bg-white border-blue-500 border-2 rounded-3xl p-4 flex-row items-center">

            <View className="mr-4">
                <MaterialCommunityIcons
                    name="pill"
                    size={42}
                    color="#2563eb"
                />
            </View>

            <View className="flex-1">

                <View className="flex-row justify-between items-center">
                    <Text className="text-2xl font-extrabold text-black">
                        {medicationId.name} {dosage}
                    </Text>

                    <Text className="text-sm font-semibold text-black lowercase">
                        {time.replace("_", " ")}
                    </Text>
                </View>
                <View className="flex-row justify-between mt-4">
                    <View>
                        <Text className="text-gray-500 text-sm">
                            Start Date
                        </Text>
                        <Text className="text-base font-bold text-black">
                            {startDate
                                ? new Date(startDate).toLocaleDateString()
                                : "-"}
                        </Text>
                    </View>

                    <View>
                        <Text className="text-gray-500 text-sm">
                            End Date
                        </Text>
                        <Text className="text-base font-bold text-black">
                            {endDate
                                ? new Date(endDate).toLocaleDateString()
                                : "-"}
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default MedicationCard;
