// Imported Components and Libraries
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

type EnumDropdownProps<T extends string> = {
    value: T | "";
    onChange: (value: T | "") => void;
    options: readonly T[];
};

export default function EnumDropdown<T extends string>({
    value,
    onChange,
    options,
}: EnumDropdownProps<T>) {
    return (
        <View className="border-2 border-gray-500 rounded-xl overflow-hidden">
            <Picker
                selectedValue={value}
                onValueChange={(itemValue) => {
                    onChange(itemValue as T | "");
                }}
                dropdownIconColor="gray"
                style={{ color: value === "" ? "#aaa" : "white" }}
            >
                <Picker.Item
                    label="Select an option"
                    value=""
                    color="#504c4cff"
                />

                {options.map((option) => (
                    <Picker.Item
                        key={option}
                        label={option}
                        value={option}
                        color="black"
                    />
                ))}
            </Picker>
        </View>
    );
}
