import { StepIndicatorProps } from '@/types/type';
import { View, Text } from 'react-native';

export default function StepIndicator({ current, total }: StepIndicatorProps) {
    return (
        <View className="flex-row justify-center my-6">
            {Array.from({ length: total }).map((_, i) => (
                <View key={i} className="flex-row items-center">
                    <View
                        className={`w-16 h-16 rounded-full border items-center justify-center ${current >= i + 1 ? 'bg-green-500 border-green-500' : 'border-white'}`}
                    >
                        <Text className={`${current >= i + 1 ? 'text-black' : 'text-white'}`}>{i + 1}</Text>
                    </View>
                    {i < total - 1 && <View className={`w-6 h-[2px] bg-white ${current >= i + 1 ? 'bg-green-500' : 'border-white'}`} />}
                </View>
            ))}
        </View>
    );
}
