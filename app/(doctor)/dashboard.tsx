import { View, Text, ScrollView, Pressable, Modal } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppointmentDoctor } from "@/types/type";
import PatientCard from '@/Components/Cards/PatientCard';
import QueueCard from '@/Components/Cards/QueueCard';
import MedicationCard from '@/Components/Cards/MedicationCard';
import MedicalRecordCard from '@/Components/Cards/RecordCard';
import MedicalReportCard from '@/Components/Cards/ReportCard';
import AppointmentsModal from '@/Components/AppoinmentsModal';
export const dummyDoctorAppointments: AppointmentDoctor[] = [
  {
    date: "2025-01-12",
    time: "10:30 AM",
    status: "Confirmed",
    isFinished: false,

    patientId: {
      firstName: "Rahul",
      lastName: "Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "9876543210",
      dob: "1998-05-12",
      gender: "Male",
      bloodGroup: "O+",
      allergies: "Dust",
      avatarUrl: "https://i.pravatar.cc/150?img=12",

      fullAddress: {
        houseNumber: "221B",
        address: "MG Road",
        landmark: "Near Metro Station",
        city: "Delhi",
        state: "Delhi",
      },

      medications: [
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
        {
          medicationId: {
            name: "Paracetamol",
            sideEffects: "Nausea",
            notRecommendedFor: "Liver patients",
          },
          dosage: "500mg",
          frequency: "Twice a day",
          time: "morning-evening",
          startDate: "2025-01-10",
          endDate: "2025-01-15",
          active: true,
        },
      ],

      medicalReports: [
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
        {
          reportUniqueId: "rep_001",
          reportName: "Blood Test",
          reportDate: "2025-01-09",
          reportFileUri: "https://example.com/reports/blood-test.pdf",
          doctorName: "Dr. Amit Verma",
          attentionNeed: "Normal",
        },
      ],

      medicalHistory: [
        {
          condition: "Hypertension",
          diagnosisDate: "2023-06-20",
          notes: "Regular monitoring required",
          resolved: false,
          doctorId: {
            firstName: "Amit",
            lastName: "Verma",
          },
        },
        {
          condition: "Hypertension",
          diagnosisDate: "2023-06-20",
          notes: "Regular monitoring required",
          resolved: false,
          doctorId: {
            firstName: "Amit",
            lastName: "Verma",
          },
        },
        {
          condition: "Hypertension",
          diagnosisDate: "2023-06-20",
          notes: "Regular monitoring required",
          resolved: false,
          doctorId: {
            firstName: "Amit",
            lastName: "Verma",
          },
        },
        {
          condition: "Hypertension",
          diagnosisDate: "2023-06-20",
          notes: "Regular monitoring required",
          resolved: false,
          doctorId: {
            firstName: "Amit",
            lastName: "Verma",
          },
        },
      ],
    },
  },

  {
    date: "2025-01-13",
    time: "01:00 PM",
    status: "Pending",
    isFinished: false,

    patientId: {
      firstName: "Sneha",
      lastName: "Gupta",
      email: "sneha.gupta@gmail.com",
      phone: "9123456780",
      dob: "2001-02-18",
      gender: "Female",
      bloodGroup: "A+",
      allergies: "None",
      avatarUrl: "https://i.pravatar.cc/150?img=47",

      fullAddress: {
        houseNumber: "18",
        address: "Sector 62",
        city: "Noida",
        state: "Uttar Pradesh",
      },

      medications: [],

      medicalReports: [
        {
          reportUniqueId: "rep_002",
          reportName: "X-Ray Chest",
          reportDate: "2025-01-08",
          reportFileUri: "https://example.com/reports/xray.pdf",
          attentionNeed: "Minor",
        },
      ],

      medicalHistory: [
        {
          condition: "Seasonal Allergy",
          diagnosisDate: "2024-03-15",
          resolved: true,
          doctorId: {
            firstName: "Neha",
            lastName: "Singh",
          },
        },
      ],
    },
  },
];
const TabButton = ({
  title,
  active,
  onPress,
}: {
  title: string;
  active: boolean;
  onPress: () => void;
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-1 mx-1 py-2  border border-blue-500 rounded-3xl ${active ? "bg-blue-500" : "bg-gray-100"
        }`}
    >
      <Text
        className={`text-center font-semibold ${active ? "text-white" : "text-gray-700"
          }`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

type TabType = "medications" | "history" | "reports";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>("medications");
  const [showQueue, setShowQueue] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [finishStep, setFinishStep] = useState<1 | 2>(1);

  const appointment = dummyDoctorAppointments[currentIndex];
  return (
    <>
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 120 }}>
        <View className="p-4 space-y-4">

          <QueueCard
            name={`${appointment.patientId.firstName} ${appointment.patientId.lastName}`}
            time={appointment.time}
            token={43}
            onPress={() => setShowQueue(true)}
          />

          {/* Patient Card */}
          <PatientCard patient={appointment.patientId} />

          {/* Tabs */}
          <View className="flex-row justify-between rounded-xl p-2 mb-2">
            <TabButton
              title="Medications"
              active={activeTab === "medications"}
              onPress={() => setActiveTab("medications")}
            />
            <TabButton
              title="History"
              active={activeTab === "history"}
              onPress={() => setActiveTab("history")}
            />
            <TabButton
              title="Reports"
              active={activeTab === "reports"}
              onPress={() => setActiveTab("reports")}
            />
          </View>
          <View className="bg-white rounded-xl p-4 shadow-sm">
            {activeTab === "medications" && (
              <>
                {appointment.patientId.medications.length === 0 ? (
                  <Text className="text-gray-500 text-center">
                    No medications prescribed
                  </Text>
                ) : (
                  appointment.patientId.medications.map((med, index) => (
                    <MedicationCard key={index} item={med} />
                  ))
                )}
              </>
            )}

            {activeTab === "history" && (
              <>
                {appointment.patientId.medicalHistory.map((history, index) => (
                  <MedicalRecordCard key={index} record={history} />
                ))}
              </>
            )}

            {activeTab === "reports" && (
              <>
                {appointment.patientId.medicalReports.map((report, index) => (
                  <MedicalReportCard key={index} report={report} />
                ))}
              </>
            )}
          </View>

        </View>
      </ScrollView>
      <View className="absolute bottom-28 left-0 right-0 px-6">
        <Pressable
          onPress={() => {
            setFinishStep(1);
            setShowFinishModal(true);
          }}
          className="bg-green-500 py-4 rounded-2xl shadow-lg"
        >
          <Text className="text-white text-center text-lg font-bold">
            Finish Appointment
          </Text>
        </Pressable>
      </View>

      <AppointmentsModal
        visible={showQueue}
        onClose={() => setShowQueue(false)}
        appointments={dummyDoctorAppointments}
      />
      <Modal visible={showFinishModal} transparent animationType="fade">
        <View className="flex-1 bg-black/50 items-center justify-center px-6">
          <View className="bg-white rounded-2xl p-6 w-full">

            <Text className="text-xl font-bold mb-2 text-center">
              {finishStep === 1
                ? "Finish this appointment?"
                : "Move to next patient?"}
            </Text>

            <Text className="text-gray-600 text-center mb-6">
              {finishStep === 1
                ? "Please confirm before finishing."
                : "This action cannot be undone."}
            </Text>

            <View className="flex-row space-x-3">
              <Pressable
                onPress={() => setShowFinishModal(false)}
                className="flex-1 py-3 rounded-xl bg-gray-200 mx-4"
              >
                <Text className="text-center font-semibold">Cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  if (finishStep === 1) {
                    setFinishStep(2);
                  } else {
                    // move to next appointment
                    setShowFinishModal(false);
                    setFinishStep(1);
                    setActiveTab("medications");

                    setCurrentIndex((prev) =>
                      prev < dummyDoctorAppointments.length - 1 ? prev + 1 : prev
                    );
                  }
                }}
                className={`flex-1 py-3 rounded-xl ${finishStep === 1 ? "bg-green-500" : "bg-red-500"
                  }`}
              >
                <Text className="text-white text-center font-semibold">
                  {finishStep === 1 ? "Yes, Finish" : "Yes, Next"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

    </>
  );
};

export default Dashboard;
