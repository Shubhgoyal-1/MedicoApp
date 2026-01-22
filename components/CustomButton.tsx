// Imported Components and Libraries
import { TouchableOpacity, Text } from 'react-native';
import { ButtonProps } from '@/types/type';

const CustomButton = ({
  onPress,
  title,
  textStyle,
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.8}
    className={`p-3 rounded-full flex-row items-center justify-between bg-amber-500 ${className}`}
    {...props}
  >
    {IconLeft && <IconLeft />}

    <Text className={`font-bold text-lg text-white ${textStyle}`}>{title}</Text>

    {IconRight && <IconRight />}
  </TouchableOpacity>
);

export default CustomButton;
