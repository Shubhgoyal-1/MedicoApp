// Imported Components and Libraries
import { useState } from 'react';
import { View, Text } from 'react-native';

// Imported Types and Custom Components
import CustomInput from '../CustomInput';
import EnumDropdown from '../EnumDropdown';
import { states } from '@/constants/states';
import { DoctorRegistrationForm, HospitalProps } from '@/types/type';
import { WorkplaceType } from '@/types/enums';

// Imported Utility Function
import { getCitiesByState } from '@/lib/utils';

type RegisterCard3Props = {
    form: DoctorRegistrationForm;
    setForm: React.Dispatch<React.SetStateAction<DoctorRegistrationForm>>;
};

// Dummy Hospitals Data
export const DUMMY_HOSPITALS: HospitalProps[] = [
    {
        name: "Apollo Hospitals",
        address: "Health City, Arilova",
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        phone: 9876543210,
        pincode: 530040,
    },
    {
        name: "Care Hospitals",
        address: "Benz Circle",
        city: "Vijayawada",
        state: "Andhra Pradesh",
        phone: 9123456789,
        pincode: 520010,
    },
    {
        name: "KIMS-Ushalakshmi Centre",
        address: "Seethammadhara",
        city: "Visakhapatnam",
        state: "Andhra Pradesh",
        phone: 9988776655,
        pincode: 530013,
    },
    {
        name: "AIIMS Guwahati",
        address: "Changsari",
        city: "Guwahati",
        state: "Assam",
        phone: 9012345678,
        pincode: 781101,
    },
    {
        name: "GNRC Hospitals",
        address: "Dispur",
        city: "Guwahati",
        state: "Assam",
        phone: 9090909090,
        pincode: 781006,
    },
];

export default function RegisterCard3({
    form,
    setForm,
}: RegisterCard3Props) {
    
    // const [hospitals, setHospitals] = useState<HospitalProps[]>([])
    // setHospitals(DUMMY_HOSPITALS)
    const hospitalNames = DUMMY_HOSPITALS.map((hospital) => hospital.name);

    // useEffect(() => {

    //     //api call to get the hospitals 

    // }, [form.workplace.state, form.workplace.city])


    const [workplaceType, setWorkplaceType] = useState("hospital");
    const cities = getCitiesByState(form.workplace.state || "")
    return (
        <View className="gap-6">
            <Text className="text-white text-center text-2xl font-semibold">
                WorkPlace Details
            </Text>
            <View>
                <Text className="text-white mb-1 text-sm">State</Text>
                <EnumDropdown
                    value={form.workplace.state || ""}
                    onChange={(value) => {
                        setForm((prev) => ({
                            ...prev, workplace: {
                                ...prev.workplace,
                                state: value,
                                city: "",
                            },
                        }))
                    }
                    }
                    options={states}
                />
            </View>
            {form.workplace.state !== "" &&
                <View>
                    <Text className="text-white mb-1 text-sm">City</Text>
                    <EnumDropdown
                        value={form.workplace.city || ""}
                        onChange={(value) => {
                            setForm((prev) => ({
                                ...prev, workplace: {
                                    ...prev.workplace,
                                    city: value,
                                },
                            }))
                        }
                        }
                        options={Object.values(cities)}
                    />
                </View>
            }
            <View>
                <Text className="text-white mb-1 text-sm">Workplace Type</Text>
                <EnumDropdown
                    value={form.workplace.type || ""}
                    onChange={(value) => {
                        setForm((prev) => ({
                            ...prev, workplace: {
                                ...prev.workplace,
                                type: value,
                            },
                        }))
                        setWorkplaceType(value)
                    }
                    }
                    options={Object.values(WorkplaceType)}
                />
            </View>
            {workplaceType === "clinic" && (
                <>
                    <CustomInput
                        label="Clinic Name"
                        placeholder="Clinic Name"
                        value={form.workplace.name}
                        onChangeText={(text) =>
                            setForm((prev) => ({
                                ...prev, workplace: {
                                    ...prev.workplace,
                                    name: text,
                                },
                            }))
                        }
                        labelStyle='text-white'
                        textStyle='text-white'
                    />
                    <CustomInput
                        label="Full Address"
                        placeholder="Full Address"
                        value={form.workplace.address}
                        onChangeText={(text) =>
                            setForm((prev) => ({
                                ...prev, workplace: {
                                    ...prev.workplace,
                                    address: text,
                                },
                            }))
                        }
                        labelStyle='text-white'
                        textStyle='text-white'
                    />
                </>
            )}
            {workplaceType === "hospital" && (
                <>
                    <View>
                        <Text className="text-white mb-1 text-sm">Hospital</Text>
                        <EnumDropdown
                            value={form.workplace.hospitalId || ""}
                            onChange={(value) => {
                                setForm((prev) => ({
                                    ...prev, workplace: {
                                        ...prev.workplace,
                                        hospitalId: value,
                                    },
                                }))
                            }
                            }
                            options={Object.values(hospitalNames)}
                        />
                    </View>
                </>
            )}
            
            <CustomInput
                label="Patient Limit"
                placeholder="Patient Limit"
                keyboardType='numeric'
                value={form.patientLimit === 0 ? "" : String(form.patientLimit)}
                onChangeText={(text) =>
                    setForm((prev) => ({ ...prev, patientLimit: Number(text) || 0 }))
                }
                labelStyle='text-white'
                textStyle='text-white'
            />


        </View>
    );
}
