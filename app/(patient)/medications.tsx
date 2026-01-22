//Imported Components and Libraries
import { View, FlatList, Text, Pressable } from "react-native";
import { useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//Imported Types and Custom Components
import MedicationCard from "@/Components/Cards/MedicationCard";
import { PatientMedication } from "@/types/type";

//Dummy Medications Data
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

  //States
  const [filter, setFilter] = useState<"current" | "all">("current");
  const [medications, setMedications] = useState(dummyMedications);
  const filteredMedications = useMemo(() => {
    if (filter === "current") {
      return medications.filter((m) => m.active);
    }
    return medications;
  }, [filter, medications]);

  //Toggle Filter Header Component
  const ListHeader = () => (
    <View className="flex-row justify-end mb-4">
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
        <Text style={{ fontSize: 40, lineHeight: 46, fontWeight: "400", color: "white" }}>
          Medications
        </Text>
      </View>

      {/*Medication Cards Container */}
      <View
        style={{
          marginTop: 100,
        }}>
          {/* Medication Cards */}
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
