// Imported Components and Libraries
import { View, Text, Image } from "react-native";
import { PatientForDoctor } from "@/types/type";

interface PatientCardProps {
  patient: PatientForDoctor;
}

const PatientCard = ({ patient }: PatientCardProps) => {
  const age =
    patient.dob
      ? new Date().getFullYear() - new Date(patient.dob).getFullYear()
      : "--";

  return (
    <View className="w-full bg-white rounded-3xl border-2 border-blue-500 p-5 flex-row items-center justify-between mb-4">
      
      {/* Left Info */}
      <View className="space-y-3">
        <Text className="text-xl font-bold text-black">
          Age : <Text className="font-normal">{age}</Text>
        </Text>

        <Text className="text-xl font-bold text-black">
          Gender : <Text className="font-normal">{patient.gender ?? "--"}</Text>
        </Text>

        <Text className="text-xl font-bold text-black">
          Blood Group :{" "}
          <Text className="font-normal">{patient.bloodGroup ?? "--"}</Text>
        </Text>

        <Text className="text-xl font-bold text-black">
          Allergies :{" "}
          <Text className="font-normal">
            {patient.allergies ?? "None"}
          </Text>
        </Text>
      </View>

      {/* Avatar */}
      <Image
        source={{
          uri:
            patient.avatarUrl ??
            "https://i.pravatar.cc/150",
        }}
        className="w-28 h-28 rounded-full border-2 border-blue-400"
      />
    </View>
  );
};

export default PatientCard;
