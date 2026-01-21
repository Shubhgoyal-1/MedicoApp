import { View, Text, Pressable } from "react-native";
import { MedicalReport } from "@/types/type";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
    report: MedicalReport;
}

const getAttentionStyles = (attention?: string) => {
    switch (attention) {
        case "Critical":
            return "text-red-500";
        case "Minor":
            return "text-yellow-500";
        case "Normal":
            return "text-green-600";
        default:
            return "text-gray-500";
    }
};

const MedicalReportCard = ({ report }: Props) => {
    const {
        reportName,
        doctorName,
        attentionNeed,
    } = report;

    return (
        <View className="bg-white border-2 border-blue-500 rounded-3xl px-6 py-5 mb-4">

            <View className="flex-row justify-between items-center mb-4">
                <Text
                    numberOfLines={1}
                    className="text-xl font-semibold text-black flex-1 mr-3"
                >
                    {reportName}
                </Text>

                <Pressable className="bg-blue-500 px-4 py-2 rounded-full flex-row items-center shrink-0">
                    <MaterialCommunityIcons
                        name="download"
                        size={16}
                        color="white"
                    />
                    <Text className="text-white font-semibold ml-2">
                        Export
                    </Text>
                </Pressable>
            </View>

            <Text className="text-base text-black mb-3">
                Reviewed by :{" "}
                <Text className="font-semibold">
                    {doctorName || "Doctor"}
                </Text>
            </Text>

            {/* Attention + Button */}
            <View className="flex-row items-center justify-between">
                <Text
                    numberOfLines={1}
                    className={`text-base font-semibold ${getAttentionStyles(
                        attentionNeed
                    )}`}
                >
                    {attentionNeed === "Critical"
                        ? "Needs Attention !"
                        : attentionNeed === "Minor"
                            ? "Minor Attention"
                            : "Normal"}
                </Text>

                <Pressable className="bg-blue-500 px-5 py-2 rounded-full shrink-0">
                    <Text className="text-white font-semibold">
                        View full →
                    </Text>
                </Pressable>
            </View>

        </View>
    );
};

export default MedicalReportCard;
