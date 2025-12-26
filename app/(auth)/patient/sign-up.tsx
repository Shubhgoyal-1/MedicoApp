import FormCard from '@/Components/Cards/FormCard';
import CustomButton from '@/Components/CustomButton';
import StepIndicator from '@/Components/SignupCardsDoctor/StepIndicator';
import RegisterCard1 from '@/Components/SignupCardsPatient/RegisterCard1';
import RegisterCard2 from '@/Components/SignupCardsPatient/RegisterCard2';
import RegisterCard3 from '@/Components/SignupCardsPatient/RegisterCard3';
import RegisterCard4 from '@/Components/SignupCardsPatient/RegisterCard4';
import { PatientRegistrationForm } from '@/types/type';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


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
    <View className="flex-1 h-full pt-0">
      <View className='flex-1 px-4 flex-col justify-between h-full'>
        <View className='mb-4'>
          <StepIndicator current={step} total={4} />
        </View>
        <FormCard>
          {step === 1 && <RegisterCard1 form={form} setForm={setForm} />}
          {step === 2 && <RegisterCard2 form={form} setForm={setForm} />}
          {step === 3 && <RegisterCard3 form={form} setForm={setForm} />}
          {step === 4 && <RegisterCard4 form={form} setForm={setForm} />}
        </FormCard>
        <View className='flex-row mt-8 items-center justify-between'>
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
    </View>
  );
};
export default SignUp;
