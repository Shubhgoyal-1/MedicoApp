import { View, Text } from "react-native";
import React from "react";
import { Appointment } from "@/types/type";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
    appointment: Appointment;
}

const AppointmentCard = ({ appointment }: Props) => {
    const { doctorId, date, time } = appointment;

    const formattedDate = new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

    return (
        <View className="bg-white border-2 border-blue-500 rounded-3xl px-5 py-4 w-full flex-row items-center">
            <View className="mr-4">
                <MaterialCommunityIcons
                    name="doctor"
                    size={42}
                    color="#2563eb"
                />
            </View>
            <View className="flex-1">
                <View className="flex-row justify-between items-center mb-3">
                    <Text className="text-xl font-bold text-black">
                        Dr. {doctorId.firstName} {doctorId.lastName}
                    </Text>
                    <Text numberOfLines={1} className="text-base font-semibold text-black">
                        {time}
                    </Text>
                </View>

                <Text className="text-lg font-semibold text-black uppercase mb-2">
                    {doctorId.specialization}
                </Text>

                <Text className="text-sm font-medium text-gray-600">
                    {formattedDate}
                </Text>
            </View>
        </View>
    );
};

export default AppointmentCard;
