import { View, FlatList, Text, Pressable } from "react-native";
import React, { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import MedicationCard from "@/Components/Cards/MedicationCard";
import { PatientMedication } from "@/types/type";

export const dummyMedications: PatientMedication[] = [
  {
    medicationId: {
      name: "Paracetamol",
      sideEffects: "nausea",
      notRecommendedFor: "liver disease",
    },
    dosage: "650 mg",
    frequency: "twice a day",
    time: "before_meals",
    startDate: "2025-01-01",
    endDate: "2025-01-12",
    active: true,
  },
  {
    medicationId: {
      name: "Azithromycin",
      sideEffects: "stomach pain",
      notRecommendedFor: "heart patients",
    },
    dosage: "500 mg",
    frequency: "once a day",
    time: "after_meals",
    startDate: "2025-01-03",
    endDate: "2025-01-07",
    active: true,
  },
  {
    medicationId: {
      name: "Vitamin D3",
      sideEffects: "none",
      notRecommendedFor: "none",
    },
    dosage: "60,000 IU",
    frequency: "once a week",
    time: "morning",
    startDate: "2025-01-01",
    endDate: "2025-03-01",
    active: true,
  },
  {
    medicationId: {
      name: "Metformin",
      sideEffects: "diarrhea",
      notRecommendedFor: "kidney disease",
    },
    dosage: "500 mg",
    frequency: "twice a day",
    time: "morning-evening",
    startDate: "2024-12-15",
    endDate: "2025-06-15",
    active: false,
  },
  {
    medicationId: {
      name: "Metformin",
      sideEffects: "diarrhea",
      notRecommendedFor: "kidney disease",
    },
    dosage: "500 mg",
    frequency: "twice a day",
    time: "morning-evening",
    startDate: "2024-12-15",
    endDate: "2025-06-15",
    active: false,
  },
  {
    medicationId: {
      name: "Metformin",
      sideEffects: "diarrhea",
      notRecommendedFor: "kidney disease",
    },
    dosage: "500 mg",
    frequency: "twice a day",
    time: "morning-evening",
    startDate: "2024-12-15",
    endDate: "2025-06-15",
    active: false,
  },
  {
    medicationId: {
      name: "Metformin",
      sideEffects: "diarrhea",
      notRecommendedFor: "kidney disease",
    },
    dosage: "500 mg",
    frequency: "twice a day",
    time: "morning-evening",
    startDate: "2024-12-15",
    endDate: "2025-06-15",
    active: false,
  },
  {
    medicationId: {
      name: "Metformin",
      sideEffects: "diarrhea",
      notRecommendedFor: "kidney disease",
    },
    dosage: "500 mg",
    frequency: "twice a day",
    time: "morning-evening",
    startDate: "2024-12-15",
    endDate: "2025-06-15",
    active: false,
  },
];

const Medications = () => {
  const [filter, setFilter] = useState<"current" | "all">("current");
  const medications = dummyMedications
  const filteredMedications = useMemo(() => {
    if (filter === "current") {
      return medications.filter((m) => m.active);
    }
    return medications;
  }, [filter, medications]);


  const ListHeader = () => (
    <View className="flex-row justify-end mb-2">
      <Pressable
        onPress={() => setFilter("current")}
        className={`px-6 py-2 border-2  border-blue-500  ${filter === "current"
          ? "bg-blue-500 border-blue-500"
          : ""}`}
      >
        <Text
          className={`font-semibold ${filter === "current" ? "text-white" : "text-gray-700"
            }`}
        >
          Current
        </Text>
      </Pressable>

      <Pressable
        onPress={() => setFilter("all")}
        className={`px-6 py-2 border-2 border-blue-500 ${filter === "all"
          ? "bg-blue-500"
          : ""
          }`}
      >
        <Text
          className={`font-semibold ${filter === "all" ? "text-white" : "text-gray-700"
            }`}
        >
          All
        </Text>
      </Pressable>
    </View>
  );



  return (
    <SafeAreaView className="flex-1">

      <View className="px-4 flex-row items-center justify-center">
        <Text style={{ fontSize: 40, lineHeight: 46, fontWeight: "900", color: "white" }}>
          Medications
        </Text>
      </View>

      <View
        style={{
          marginTop: 100,
        }}>
        <FlatList
          data={filteredMedications}
          keyExtractor={(_, index) => index.toString()}
          ListHeaderComponent={ListHeader}
          renderItem={({ item }) => (
            <View className="mb-4">
              <MedicationCard item={item} />
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
export default Medications;
