// Imported Components and Libraries
import { View, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { CustomInputProps } from "@/types/type";
import cn from "clsx";

const CustomInput = ({
  placeholder = "Enter Text",
  value,
  onChangeText,
  label,
  secureTextEntry = false,
  keyboardType = "default",
  labelStyle,
  textStyle,
  rightIcon,
  editable = true,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="w-full">
      {label && (
        <Text
          className={cn(
            "text-start w-full text-gray-500 pl-2 mb-2",
            labelStyle
          )}
        >
          {label}
        </Text>
      )}

      {/* Input wrapper */}
      <View
        className={cn(
          "flex-row items-center rounded-xl border-2 px-3",
          isFocused ? "border-blue-500" : "border-gray-500",
        )}
      >
        {/* Text Input */}
        <TextInput
          editable={editable}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          placeholderTextColor="#888"
          className={cn(
            "flex-1 py-3 text-dark-100 leading-5",
            textStyle
          )}
        />

        {/* Right Icon */}
        {rightIcon && (
          <View className="ml-2">
            {rightIcon}
          </View>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
