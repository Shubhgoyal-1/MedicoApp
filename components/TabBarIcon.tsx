//Imported Components and Libraries
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import cn from 'clsx';

//Imported Types
import { TabBarIconProps } from "@/types/type";

const TabBarIcon = ({ focused, icon, title, offsetX = 0, }: TabBarIconProps) => {
    return (
        <View
            style={{
                transform: [{ translateX: offsetX }],
            }}
            className={cn("tab-icon items-center gap-1 justify-center w-[68px] h-[68px] rounded-full", focused ? "bg-white" : "")}>
            <Ionicons
                name={icon}
                size={26}
                color={focused ? "#000000ff" : "#ffffffff"}
            />
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className={cn(
                    "text-[10px] font-semibold text-center",
                    focused ? "text-black" : "text-white"
                )}
            >
                {title}
            </Text>
        </View>
    );
};

export default TabBarIcon
