//Imported Components and Libraries
import { View, Text } from "react-native";

//Used in Dashboard
const Section = ({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) => (
    <View className="mb-6">
        <Text className="text-2xl font-bold text-black mb-2">
            {title}
        </Text>
        <View className="border-b border-black mb-4" />
        {children}
    </View>
);
export default Section