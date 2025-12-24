import { View, Text } from 'react-native';
import React, { useState } from 'react';
import StepIndicator from '@/Components/SignupCardsDoctor/StepIndicator';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/Components/CustomButton';
import RegisterCard1 from '@/Components/SignupCardsPatient/RegisterCard1';
import { DoctorRegistrationForm, PatientRegistrationForm } from '@/types/type';
import FormCard from '@/Components/FormCard';
import { useRouter } from 'expo-router';
import RegisterCard2 from '@/Components/SignupCardsPatient/RegisterCard2';
import RegisterCard3 from '@/Components/SignupCardsPatient/RegisterCard3';
import RegisterCard4 from '@/Components/SignupCardsPatient/RegisterCard4';


const SignUp = () => {
  const [step, setStep] = useState(1);

  const router = useRouter()

  const submit = () => {
    router.push('/(auth)/patient/sign-in')
  }


  const [form, setForm] = useState<PatientRegistrationForm>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
      phone: "",
    password: "",
    aadharNo: "",
    dob: "",
    bloodGroup: "",
    allergies: "",
    fullAddress: {
      houseNumber: "",
      address: "",
      landmark: "",
      city: "",
      state: "",
    }

  })

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => {
    if (s > 1) {
      return s - 1
    }
    return 1
  });
  return (
    <SafeAreaView className="flex-1 h-full">
      <View className='flex-1 px-4 flex-col justify-between h-full'>
        <View className='mb-8'>
          <StepIndicator current={step} total={4} />
        </View>
        <FormCard>
          {step === 1 && <RegisterCard1 form={form} setForm={setForm} />}
          {step === 2 && <RegisterCard2 form={form} setForm={setForm} />}
          {step === 3 && <RegisterCard3 form={form} setForm={setForm} />}
          {step === 4 && <RegisterCard4 form={form} setForm={setForm} />}
        </FormCard>
        <View className='flex-row mt-12 items-center justify-between'>
          <CustomButton
            title={'Previous'}
            textStyle='mx-auto'
            onPress={prevStep}
            className="mt-2 mb-4 p-8 bg-blue-500"
          />
          <CustomButton
            title={step === 4 ? 'Submit' : 'Next'}
            textStyle='mx-auto'
            onPress={step === 4 ? submit : nextStep}
            className="mt-2 mb-4 p-8 bg-blue-500"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
