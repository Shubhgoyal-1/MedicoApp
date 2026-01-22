// Imported Components and Libraries
import React from 'react';
import { View, Text } from 'react-native';

// Imported Types and Custom Components
import { DoctorRegistrationForm } from '@/types/type';
import CustomInput from '../CustomInput';

type RegisterCard2Props = {
    form: DoctorRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<DoctorRegistrationForm>>;
};

export default function RegisterCard2({
    form,
    setForm,
}: RegisterCard2Props) {
    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                Professional Details
            </Text>
            <CustomInput
                label="Specialization"
                placeholder="Specialization"
                value={form.specialization}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, specialization: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Aadhar No."
                placeholder="Aadhar number"
                value={form.aadharNo}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, aadharNo: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />

            <CustomInput
                label="Experience"
                placeholder="Enter your Experience"
                keyboardType='numeric'
                value={form.experience === 0 ? "" : String(form.experience)}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, experience: Number(text) || 0 }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Fees Per Consultation"
                placeholder="Fees Per Consultation(in ruppees)"
                keyboardType='numeric'
                value={form.feePerVisit === 0 ? "" : String(form.feePerVisit)}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, feePerVisit: Number(text) || 0 }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="License No."
                placeholder="License number"
                value={form.licenseNumber}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, licenseNumber: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />

        </View>
    );
}
