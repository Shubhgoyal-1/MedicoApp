//IMported Components and Libraries
import { View, Text, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

//Imported the Charts for Stats
import { PieChart, BarChart } from "react-native-gifted-charts";

//Imported Custom Components
import Divider from "@/Components/Divider";

//Dropdown Options
const STAT_OPTIONS = [
  { label: "Gender Ratio", value: "gender" },
  { label: "Appointment Status", value: "status" },
  { label: "New vs Returning", value: "patientType" },
];

//Dummy Data for Pie Charts
const DATA_MAP: any = {
  gender: {
    pie: [
      { value: 60, text: "Male", color: '#3b82f6' },
      { value: 40, text: "Female", color: '#9ac6ff' },
    ],
  },
  status: {
    pie: [
      { value: 72, text: "Completed", color: '#3b82f6' },
      { value: 18, text: "Cancelled", color: '#9ac6ff' },
    ],
  },
  patientType: {
    pie: [
      { value: 45, text: "New", color: '#3b82f6' },
      { value: 55, text: "Returning", color: '#9ac6ff' },
    ],
  },
};


const BAR_DATA = [
  { value: 12, label: "Day 1", frontColor: "#3b82f6" },
  { value: 18, label: "Day 2", frontColor: "#3b82f6" },
  { value: 9, label: "Day 3", frontColor: "#3b82f6" },
];

const DoctorStatistics = () => {
  //States
  const [selectedStat, setSelectedStat] = useState("gender");
  const [showDropdown, setShowDropdown] = useState(false);

  //Extracting the dummy data for piechart
  const pieData = DATA_MAP[selectedStat].pie;
  const total = pieData.reduce((sum: any, i: any) => sum + i.value, 0);

  //Converting the data into individual percentage
  const pieWithPercent = pieData.map((item: { value: number; }) => ({
    ...item,
    percent: Math.round((item.value / total) * 100),
  }));

  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        <View className="p-4 space-y-4">

          <Text className="text-3xl self-center mb-8 font-bold text-white">
            Statistics Overview
          </Text>

          {/* Dropdown for showing the stats option */}
          <View className="mb-4">
            <Pressable
              onPress={() => setShowDropdown(!showDropdown)}
              className="flex-row items-center justify-between bg-white border border-blue-500 px-4 py-3 rounded-xl shadow-lg"
            >
              <Text className="text-gray-700 font-semibold">
                {STAT_OPTIONS.find(opt => opt.value === selectedStat)?.label}
              </Text>
              <Ionicons
                name={showDropdown ? "chevron-up" : "chevron-down"}
                size={20}
                color="#555"
              />
            </Pressable>

            {showDropdown && (
              <View className="absolute top-14 left-0 right-0 bg-white rounded-xl shadow-lg z-10">
                {STAT_OPTIONS.map(option => (
                  <Pressable
                    key={option.value}
                    onPress={() => {
                      setSelectedStat(option.value);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-3 border-b border-gray-100"
                  >
                    <Text className="text-gray-700">
                      {option.label}
                    </Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
          {/* Pie Chart */}

          <View className="p-6">
            <View className="rounded-2xl overflow-hidden mb-6 shadow-sm">
              <LinearGradient
                colors={["#60A5FA", "#2563EB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="flex-row py-2 items-center justify-center"
                >
                <Ionicons name="pie-chart" size={24} color="white" />
                <Text className="text-xl ml-2 font-bold text-white">
                  Distribution
                </Text>
              </LinearGradient>
            </View>

            <View className="items-center">
              <PieChart
                data={pieData}
                donut
                radius={120}
                innerRadius={70}
                labelsPosition="outward"
                />
              <View className="mt-4 space-y-2 absolute top-24">
                {pieWithPercent.map((item: { color: any; text: any; percent: any }, index: any) => (
                  <View key={index} className="flex-row items-center">
                    <View
                      style={{ backgroundColor: item.color }}
                      className="w-3 h-3 rounded-full mr-2"
                      />
                    <Text className="text-gray-700">
                      {item.text} – {item.percent}%
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>

          <Divider />

          {/* Bar Chart */}
          
          <View className="p-4">
            <View className="rounded-2xl overflow-hidden mb-4 shadow-sm">
              <LinearGradient
                colors={["#60A5FA", "#2563EB"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="flex-row py-2 items-center justify-center"
              >
                <Ionicons name="bar-chart" size={24} color="white" />
                <Text className="text-xl ml-2 font-bold text-white">
                  Patient Visits Over Days
                </Text>
              </LinearGradient>
            </View>

            <BarChart
              data={BAR_DATA}
              barWidth={40}
              spacing={30}
              yAxisThickness={0}
              xAxisThickness={0}
              yAxisTextStyle={{ color: "#0077ff" }}
              xAxisLabelTextStyle={{ color: "#0077ff", fontSize: 12 }}
              showValuesAsTopLabel
              topLabelTextStyle={{ color: "#0077ff" }}
            />
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorStatistics;
