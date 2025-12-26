import { View, FlatList, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MedicalRecordCard from "@/Components/Cards/RecordCard";
import { MedicalHistory } from "@/types/type";

const dummyRecords: MedicalHistory[] = [
  {
    condition: "Cardiology Consultation",
    diagnosisDate: "2024-12-10",
    notes: "Stable cardiovascular health. Blood pressure within normal range.",
    treatment: "Continue current medication and regular exercise.",
    resolved: false,
    doctorId: {
      firstName: "B.N.",
      lastName: "Ghosh",
    },
  },
  {
    condition: "General Physician Visit",
    diagnosisDate: "2024-11-02",
    notes: "Seasonal viral infection with mild fever and fatigue.",
    treatment: "Rest, hydration, and paracetamol for 3 days.",
    resolved: true,
    doctorId: {
      firstName: "Anita",
      lastName: "Verma",
    },
  },
  {
    condition: "Orthopedic Consultation",
    diagnosisDate: "2024-10-18",
    notes: "Knee joint pain due to early-stage osteoarthritis.",
    treatment: "Physiotherapy and calcium supplements.",
    resolved: false,
    doctorId: {
      firstName: "Rahul",
      lastName: "Mehta",
    },
  },
  {
    condition: "Dermatology Checkup",
    diagnosisDate: "2024-09-05",
    notes: "Mild allergic dermatitis due to dust exposure.",
    treatment: "Topical ointment for 7 days.",
    resolved: true,
    doctorId: {
      firstName: "Neha",
      lastName: "Kapoor",
    },
  },
]

const Records = () => {
  const records = dummyRecords
  return (
    <SafeAreaView className="flex-1">

      <View className="px-4 flex-row items-center justify-center">
        <Text style={{ fontSize: 40, lineHeight: 46, fontWeight: "900", color: "white" }}>
          Records
        </Text>
      </View>

      <View
        style={{
          marginTop: 100,
        }}>
        <FlatList
          data={records}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="mb-4">
              <MedicalRecordCard record={item} />
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 140,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default Records;
