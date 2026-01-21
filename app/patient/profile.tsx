import CustomInput from "@/Components/CustomInput";
import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
} from "react-native";
import { PatientDetails } from "@/types/type";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const patient: PatientDetails = {
    firstName: "Shubh",
    lastName: "Goyal",
    email: "shubh@email.com",
    phone: "9876543210",
    dob: "2000-01-01",
    gender: "Male",
    bloodGroup: "O+",
    allergies: "None",
    aadharNo: "1234-5678-9012",
    avatarUrl: "https://example.com/avatar.jpg",
    fullAddress: {
        houseNumber: "221B",
        address: "Baker Street",
        city: "Delhi",
        state: "Delhi",
    },
};

const ProfileScreen = () => {
    const [editable, setEditable] = useState(false)
    const originalAllergies = patient.allergies ?? "";
    const [allergies, setAllergies] = useState(originalAllergies);
    const [allergiesEditable, setAllergiesEditable] = useState(false);

    const handleSaveAllergies = async () => {
        const trimmed = allergies.trim();

        if (trimmed === originalAllergies.trim()) {
            setAllergiesEditable(false);
            return;
        }

        // 🔥 API CALL HERE
        console.log(allergies)
        setAllergiesEditable(false);
    };

    const onEditAvatar = () => {

    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>

            <ScrollView
                className="flex-1"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 40 }}
            >

                <View className="mt-20 items-center mb-6">
                    <View className="relative">
                        <Image
                            source={{
                                uri: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
                            }}
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

                    <CustomInput labelStyle="font-bold" editable={editable} label="First Name" value={patient.firstName} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Last Name" value={patient.lastName} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Email" value={patient.email} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Phone Number" value={patient.phone} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Date of Birth" value={patient.dob} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Gender" value={patient.gender} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Blood Group" value={patient.gender} />
                    <CustomInput editable={allergiesEditable} labelStyle="font-bold"
                        rightIcon={
                            <Pressable
                                onPress={() =>
                                    allergiesEditable
                                        ? handleSaveAllergies()
                                        : setAllergiesEditable(true)
                                }
                            >
                                <MaterialCommunityIcons
                                    name={allergiesEditable ? "check" : "pencil-outline"}
                                    size={20}
                                    color={allergiesEditable ? "green" : "#2563eb"}
                                />
                            </Pressable>
                        }
                        label="Allergies (comma separated)"
                        value={allergies}
                        onChangeText={(text) => setAllergies(text)}
                    />

                    <CustomInput labelStyle="font-bold" editable={editable} label="Aadhar Number" value={patient.aadharNo} />

                    <Text className="text-lg font-semibold text-black mt-6">
                        Address
                    </Text>

                    <CustomInput labelStyle="font-bold" editable={editable} label="House Number" value={patient.fullAddress.houseNumber} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Street / Address" value={patient.fullAddress.address} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="Landmark" value={patient.fullAddress.landmark || " "} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="City" value={patient.fullAddress.city} />
                    <CustomInput labelStyle="font-bold" editable={editable} label="State" value={patient.fullAddress.state} />

                    {/* Button */}
                    <Pressable className="bg-red-500 py-4 rounded-full mt-8 mb-10">
                        <Text className="text-white text-lg font-semibold text-center">
                            Sign Out
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default ProfileScreen;
