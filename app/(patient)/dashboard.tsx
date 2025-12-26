import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { dummyMedications } from './medications';
import { dummyAppointments } from './appointments';
import MedicationCard from '@/Components/Cards/MedicationCard';
import AppointmentCard from '@/Components/Cards/AppointmentCard';
import VitalsCards from '@/Components/Cards/VitalsCard';
import Section from '@/Components/Section';
import Divider from '@/Components/Divider';

const vitalsData = [
  {
    id: "hr",
    label: "Heart Rate",
    value: "72",
    unit: "bpm",
    icon: "heart-pulse",
    valueColor: "text-green-400",
    iconColor: "#c81e1e",
  },
  {
    id: "bp",
    label: "Blood Pressure",
    value: "120/80",
    icon: "blood-bag",
    valueColor: "text-green-400",
    iconColor: "#111",
  },
];

const Dashboard = () => {
  const activeMedications = dummyMedications.filter((m) => m.active);
  const upcomingAppointments = dummyAppointments.filter(
    (a) => a.status !== "Cancelled"
  );

  return (
    <ScrollView className="flex-1"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: 120
      }}
    >

      {/* Header */}
      <View className="px-6 pt-4 pb-12 mb-2">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-3xl font-semibold text-white">
              Welcome, Shubh
            </Text>
            <Text className="text-white mt-2">
              Your Health, Your History
            </Text>
            <Text className="text-white">
              Secure, Simple, Smart
            </Text>
          </View>

          <Image
            source={{
              uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
            }}
            className="w-32 h-32 rounded-full border-2 border-blue-500"
          />
        </View>
      </View>

      <View className="px-5 mt-6">
        <Section title="Next Medications">
          <FlatList
            horizontal
            data={activeMedications}
            keyExtractor={(_, i) => i.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            renderItem={({ item }) => (
              <View className="mr-4 w-[300px]">
                <MedicationCard item={item} />
              </View>
            )}
          />
        </Section>
        <Section title="Appointments">
          <FlatList
            horizontal
            data={upcomingAppointments}
            keyExtractor={(_, i) => i.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 20 }}
            renderItem={({ item }) => (
              <View className="mr-4 w-[320px]">
                <AppointmentCard appointment={item} />
              </View>
            )}
          />
        </Section>

      </View>
      <Divider />
      <View className='p-3'>
        <VitalsCards vitals={vitalsData} />
      </View>

    </ScrollView>
  );
};
export default Dashboard;
