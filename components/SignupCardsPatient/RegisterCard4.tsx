// Imported Components and Libraries
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Imported Types and Custom Components
import { PatientRegistrationForm } from '@/types/type';
import CustomInput from '../CustomInput';

type RegisterCard4Props = {
    form: PatientRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<PatientRegistrationForm>>;
};

export default function RegisterCard4({
    form,
    setForm,
}: RegisterCard4Props) {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                Password Details
            </Text>
            <CustomInput
                label="Password"
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={form.password}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, password: text }))
                }
                labelStyle='text-white'
                textStyle='text-white'
                rightIcon={
                    <Pressable onPress={() => setShowPassword((prev) => !prev)}>
                        <Ionicons
                            name={showPassword ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#888"
                        />
                    </Pressable>
                }
            />
            <CustomInput
                label="Confirm Password"
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                value={confirmPassword}
                onChangeText={(text) =>
                    setConfirmPassword(text)
                }
                labelStyle='text-white'
                textStyle='text-white'
                rightIcon={
                    <Pressable onPress={() => setShowConfirmPassword((prev) => !prev)}>
                        <Ionicons
                            name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                            size={22}
                            color="#888"
                        />
                    </Pressable>
                }
            />

        </View>
    );
}
