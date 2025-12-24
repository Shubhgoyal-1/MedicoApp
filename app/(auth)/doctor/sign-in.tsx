import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomInput from '@/Components/CustomInput';
import { Link, useRouter } from 'expo-router';
import CustomButton from '@/Components/CustomButton';

const SignIn = () => {
  const router = useRouter()
  const submit = () => {
    router.push('/(doctor)/dashboard')
  }
  
  return (
    <SafeAreaView className="flex-1 justify-center px-6">
      <View className='bg-white rounded-2xl p-6 gap-5 shadow-lg shadow-black'>
        <Text className='text-center text-3xl font-bold'>Sign In Doctor</Text>
        <CustomInput
          label='Email'
          placeholder='Enter Your Email' />
        <CustomInput
          label='Password'
          placeholder='Enter Your Password'
          secureTextEntry={true} />
        <CustomButton
          title='Sign In'
          className='bg-blue-500 mt-5'
          textStyle='mx-auto'
          onPress={submit}
        />
        <View className={"flex flex-row self-center mt-5 gap-2"}>
          <Text className={"font-regular text-black"}>
            Don't have an Account?{" "}
          </Text>
          <Link className={"font-bold text-blue-500"} href={"/(auth)/doctor/sign-up"}>Sign Up</Link>
        </View>
      </View>

    </SafeAreaView>
  );
};
export default SignIn;
