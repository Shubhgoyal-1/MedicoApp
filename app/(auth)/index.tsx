import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '@/Components/CustomButton';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-6 ">
      <Text className="text-2xl font-bold ">Continue as</Text>
      {/*<View className={'bg-red-500 h-10 w-10 '}></View>*/}
      <CustomButton
        title="Patient"
        onPress={() => router.push('/(auth)/patient/sign-in')}
        className="bg-blue-500 w-3/4"
        IconLeft={() => (
          <FontAwesome5 name="user-injured" size={20} color="white" />
        )}
        IconRight={() => (
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        )}
      />
      <CustomButton
        title="Doctor"
        onPress={() => router.push('/(auth)/doctor/sign-in')}
        className="bg-blue-500 w-3/4"
        IconLeft={() => <FontAwesome5 name="user-md" size={24} color="white" />}
        IconRight={() => (
          <MaterialIcons name="arrow-forward" size={24} color="white" />
        )}
      />
    </View>
  );
}
