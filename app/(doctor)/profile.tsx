import CustomInput from "@/Components/CustomInput";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Divider from "@/Components/Divider";
const doctor = {
  firstName: "Amit",
  lastName: "Verma",
  email: "amit.verma@medico.com",
  phone: "9876543211",
  specialization: "Cardiologist",
  experience: 8,
  feePerVisit: 600,
  licenseNumber: "DL-MED-123456",
  gender: "Male",
  aadharNo: "1234-5678-9999",
  avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  workplace: {
    type: "clinic",
    name: "Heart Care Clinic",
    address: "Sector 18, Noida",
    city: "Noida",
    state: "Uttar Pradesh",
  },
};


const DoctorProfileScreen = () => {
  const [editable, setEditable] = useState(false);

  const onEditAvatar = () => {
    // image picker + upload to cloudinary
  };

  function handleSignOut() {
    //add signout functionality
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        <View className="mt-20 items-center mb-6">
          <View className="relative">
            <Image
              source={{ uri: doctor.avatarUrl }}
              className="w-40 h-40 rounded-full border-4 border-white"
            />
            <Pressable
              onPress={onEditAvatar}
              className="absolute bottom-2 right-2 bg-blue-500 p-3 rounded-full border-2 border-white"
            >
              <MaterialCommunityIcons
                name="pencil-outline"
                size={20}
                color="white"
              />
            </Pressable>
          </View>
        </View>

        <View className="px-6 space-y-5">
          <Text className="text-lg font-semibold text-blue-500 mb-2">
            Personal Details
          </Text>
          <Divider />

          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="First Name" value={doctor.firstName} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Last Name" value={doctor.lastName} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Email" value={doctor.email} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Phone Number" value={doctor.phone} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Gender" value={doctor.gender} />

          <Text className="text-lg font-semibold text-blue-500 mt-6 mb-2">
            Professional Details
          </Text>
          <Divider />

          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Specialization" value={doctor.specialization} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Experience (Years)" value={String(doctor.experience)} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Fee per Visit (₹)" value={String(doctor.feePerVisit)} />
          <CustomInput labelStyle="font-bold mt-3" editable={false} label="Medical License Number" value={doctor.licenseNumber} />

          <Text className="text-lg font-semibold text-blue-500 mt-6 mb-2">
            Workplace
          </Text>
          <Divider />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Type" value={doctor.workplace.type} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Clinic / Hospital Name" value={doctor.workplace.name} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="Address" value={doctor.workplace.address} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="City" value={doctor.workplace.city} />
          <CustomInput labelStyle="font-bold mt-3" editable={editable} label="State" value={doctor.workplace.state} />

          <Text className="text-lg font-semibold text-blue-500 mt-6 mb-2">
            Identification
          </Text>
          <Divider />

          <CustomInput labelStyle="font-bold mt-3" editable={false} label="Aadhar Number" value={doctor.aadharNo} />

          <Pressable onPress={handleSignOut} className="bg-red-500 py-4 rounded-full mt-8 mb-10">
            <Text className="text-white text-lg font-semibold text-center">
              Sign Out
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default DoctorProfileScreen;
