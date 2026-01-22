// Imported Components and Libraries
import { useState } from 'react';
import { View, Text, Pressable, Platform } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker";

// Imported Types and Custom Components
import { PatientRegistrationForm } from '@/types/type';
import CustomInput from '../CustomInput';
import EnumDropdown from '../EnumDropdown';
import { BloodGroup } from '@/types/enums';

type RegisterCard3Props = {
    form: PatientRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<PatientRegistrationForm>>;
};
export default function RegisterCard3({
    form,
    setForm,
}: RegisterCard3Props) {
    // States
    const [date, setDate] = useState<Date | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const onChange = (_: any, selectedDate?: Date) => {
        setShowPicker(false);
        if (selectedDate) setDate(selectedDate);
    };
    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                More Details
            </Text>
            <View>
                <Text className="text-white mb-1 text-sm">Blood Group</Text>
                <EnumDropdown
                    value={form.bloodGroup || ""}
                    onChange={(value) => {
                        setForm((prev) => ({
                            ...prev, bloodGroup: value
                        }))
                    }
                    }
                    options={Object.values(BloodGroup)}
                />
            </View>
            <CustomInput
                label="Allergies  ( If any )"
                placeholder="Enter your Allergies (comma separate them if multiple)"
                value={form.allergies}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, allergies: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Aadhar Number"
                placeholder="Enter your Aadhar Number"
                value={form.aadharNo}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, aadharNo: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />

            <Pressable onPress={() => setShowPicker(true)}>
                <View pointerEvents="none">
                    <CustomInput
                        label="Date of Birthr"
                        placeholder="Date Of Birth"
                        value={date ? date.toLocaleString().split(',')[0] : ""}
                        onChangeText={(text) =>
                            setForm((prev) => ({ ...prev, dob: text }))
                        }
                        labelStyle='text-white'
                        textStyle='text-white'
                    />
                </View>
            </Pressable>
            {showPicker && (
                <DateTimePicker
                    value={date || new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={onChange}
                    maximumDate={new Date()}
                />
            )}


        </View>
    );
}
