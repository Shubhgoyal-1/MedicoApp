import React from 'react';
import { View, Text } from 'react-native';
import { DoctorRegistrationForm } from '@/types/type';
import CustomInput from '../CustomInput';
import EnumDropdown from '../EnumDropdown';
import { Gender } from '@/types/enums';

type RegisterCard1Props = {
    form: DoctorRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<DoctorRegistrationForm>>;
};

export default function RegisterCard1({
    form,
    setForm,
}: RegisterCard1Props) {
    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                Personal Details
            </Text>
            <CustomInput
                label="First Name"
                placeholder="Enter your first name"
                value={form.firstName}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, firstName: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Last Name"
                placeholder="Enter your last name"
                value={form.lastName}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, lastName: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />

            <View>
                <Text className="text-white mb-1 text-sm">Gender</Text>
                <EnumDropdown
                    value={form.gender}
                    onChange={(value) =>
                        setForm((prev) => ({ ...prev, gender: value }))
                    }
                    options={Object.values(Gender)}
                />
            </View>

            <CustomInput
                label="Email"
                placeholder="Enter your email"
                keyboardType="email-address"
                value={form.email}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, email: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Phone no."
                placeholder="Enter your number"
                keyboardType="numeric"
                value={form.phone}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, phone: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
        </View>
    );
}
