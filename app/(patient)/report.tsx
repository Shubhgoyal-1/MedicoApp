import { View, FlatList, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MedicalReportCard from "@/Components/Cards/ReportCard";
import { MedicalReport } from "@/types/type";
const reports: MedicalReport[] = [
  {
    reportUniqueId: "REP-001",
    reportName: "Blood Sugar (HbA1c)",
    reportDate: "2025-01-18",
    reportFileUri: "https://example.com/reports/hba1c.pdf",
    doctorName: "Dr. Santosh Shukla",
    attentionNeed: "Critical",
    notes: "HbA1c levels are above normal range.",
  },
  {
    reportUniqueId: "REP-002",
    reportName: "Complete Blood Count (CBC)",
    reportDate: "2025-01-10",
    reportFileUri: "https://example.com/reports/cbc.pdf",
    doctorName: "Dr. Rakesh Sharma",
    attentionNeed: "Minor",
    notes: "Hemoglobin slightly low.",
  },
  {
    reportUniqueId: "REP-003",
    reportName: "Lipid Profile",
    reportDate: "2024-12-22",
    reportFileUri: "https://example.com/reports/lipid-profile.pdf",
    doctorName: "Dr. Anita Verma",
    attentionNeed: "Normal",
    notes: "Cholesterol levels are within normal range.",
  },
  {
    reportUniqueId: "REP-004",
    reportName: "Thyroid Function Test (TFT)",
    reportDate: "2024-12-05",
    reportFileUri: "https://example.com/reports/tft.pdf",
    doctorName: "Dr. Neha Kapoor",
    attentionNeed: "Minor",
    notes: "TSH slightly elevated. Follow-up advised.",
  },
]
const Report = () => {

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
          data={reports}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="mb-4">
              <MedicalReportCard report={item} />
            </View>
          )}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 140,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Pressable
        onPress={() => {
        }}
        className=" absolute bottom-28 right-6 bg-[#4aa6b5] w-20 h-20 rounded-full items-center justify-center elevation-6 active:opacity-80
        "
      >
        <Ionicons name="add" size={28} color="white" />
      </Pressable>
    </SafeAreaView>
  );
};
export default Report;
