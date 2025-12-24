import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { DoctorRegistrationForm, HospitalProps, PatientRegistrationForm } from '@/types/type';
import CustomInput from '../CustomInput';
import EnumDropdown from '../EnumDropdown';
import { WorkplaceType } from '@/types/enums';
import { states } from '@/constants/states';
import { getCitiesByState } from '@/lib/utils';
type RegisterCard3Props = {
    form: PatientRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<PatientRegistrationForm>>;
};

export default function RegisterCard2({
    form,
    setForm,
}: RegisterCard3Props) {

    const [workplaceType, setWorkplaceType] = useState("hospital");
    const cities = getCitiesByState(form.fullAddress.state || "")

    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                Address Details
            </Text>
            <CustomInput
                label="House Number"
                placeholder="House Number"
                value={form.fullAddress.houseNumber}
                onChangeText={(text) =>
                    setForm((prev) => ({
                        ...prev, fullAddress: {
                            ...prev.fullAddress,
                            houseNumber: text,
                        },
                    }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Full Address"
                placeholder="Full Address"
                value={form.fullAddress.address}
                onChangeText={(text) =>
                    setForm((prev) => ({
                        ...prev, fullAddress: {
                            ...prev.fullAddress,
                            address: text,
                        },
                    }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <CustomInput
                label="Landmark"
                placeholder="Landmark"
                value={form.fullAddress.landmark}
                onChangeText={(text) =>
                    setForm((prev) => ({
                        ...prev, fullAddress: {
                            ...prev.fullAddress,
                            landmark: text,
                        },
                    }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />
            <View>
                <Text className="text-white mb-1 text-sm">State</Text>
                <EnumDropdown
                    value={form.fullAddress.state || ""}
                    onChange={(value) => {
                        setForm((prev) => ({
                            ...prev, fullAddress: {
                                ...prev.fullAddress,
                                state: value,
                                city: "",
                            },
                        }))
                    }
                    }
                    options={states}
                />
            </View>
            {form.fullAddress.state !== "" &&
                <View>
                    <Text className="text-white mb-1 text-sm">City</Text>
                    <EnumDropdown
                        value={form.fullAddress.city || ""}
                        onChange={(value) => {
                            setForm((prev) => ({
                                ...prev, fullAddress: {
                                    ...prev.fullAddress,
                                    city: value,
                                },
                            }))
                        }
                        }
                        options={Object.values(cities)}
                    />
                </View>
            }

        </View>
    );
}
