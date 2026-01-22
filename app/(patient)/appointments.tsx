//Imported Components and Libraries

import { View, FlatList, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

//Imported Types and Custom Components
import AppointmentCard from "@/Components/Cards/AppointmentCard";
import { Appointment } from "@/types/type";

//Dummy Appointments Data
export const dummyAppointments: Appointment[] = [
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Nishu",
            lastName: "Gupta",
            specialization: "Cardiology",
        },
        date: "2025-01-22T00:00:00.000Z",
        time: "12:00 PM",
        number: 1,
        status: "Confirmed",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Amit",
            lastName: "Sharma",
            specialization: "Dermatology",
        },
        date: "2025-01-24T00:00:00.000Z",
        time: "10:30 AM",
        number: 2,
        status: "Pending",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Priya",
            lastName: "Mehta",
            specialization: "Neurology",
        },
        date: "2025-01-18T00:00:00.000Z",
        time: "04:15 PM",
        number: 3,
        status: "Cancelled",
        isFinished: true,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Rahul",
            lastName: "Verma",
            specialization: "Orthopedics",
        },
        date: "2025-02-01T00:00:00.000Z",
        time: "09:00 AM",
        number: 4,
        status: "Confirmed",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Rahul",
            lastName: "Verma",
            specialization: "Orthopedics",
        },
        date: "2025-02-01T00:00:00.000Z",
        time: "09:00 AM",
        number: 4,
        status: "Confirmed",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Rahul",
            lastName: "Verma",
            specialization: "Orthopedics",
        },
        date: "2025-02-01T00:00:00.000Z",
        time: "09:00 AM",
        number: 4,
        status: "Confirmed",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Rahul",
            lastName: "Verma",
            specialization: "Orthopedics",
        },
        date: "2025-02-01T00:00:00.000Z",
        time: "09:00 AM",
        number: 4,
        status: "Confirmed",
        isFinished: false,
    },
    {
        patientId: "patient_001",
        doctorId: {
            firstName: "Rahul",
            lastName: "Verma",
            specialization: "Orthopedics",
        },
        date: "2025-02-01T00:00:00.000Z",
        time: "09:00 AM",
        number: 4,
        status: "Confirmed",
        isFinished: false,
    },
];

const Appointments = () => {

    //States
    const [appointments,setAppointments] = useState<Appointment[]>(dummyAppointments);

    const addAppointment = () => { }

    return (
        <SafeAreaView className="flex-1">
            <View className="px-4 flex-row items-center justify-center">
                <Text style={{ fontSize: 40, lineHeight: 46, fontWeight: "400" }}
                    className="text-white"
                >
                    Appointments
                </Text>
            </View>

            {/* Appointments Cards Container */}
            <View
                style={{
                    marginTop: 100,
                }}>
                {/* Appointment Cards */}
                <FlatList
                    data={appointments}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View className="mb-4">
                            <AppointmentCard appointment={item} />
                        </View>
                    )}
                    contentContainerStyle={{
                        paddingHorizontal: 16,
                        paddingBottom: 140,
                    }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            {/* Add Appointment Button */}
            <Pressable
                onPress={addAppointment}
                className=" absolute bottom-28 right-6 bg-[#4aa6b5] w-20 h-20 rounded-full items-center justify-center elevation-6 active:opacity-80
        "
            >
                <Ionicons name="add" size={28} color="white" />
            </Pressable>
        </SafeAreaView>
    );
};

export default Appointments;
