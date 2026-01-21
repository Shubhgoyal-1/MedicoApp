import { View, Text, Modal, Pressable, FlatList } from "react-native";
import { AppointmentDoctor } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  visible: boolean;
  onClose: () => void;
  appointments: AppointmentDoctor[];
}

const AppointmentsModal = ({ visible, onClose, appointments }: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/40 justify-end">

        {/* Floating Close Button */}
        <View className="items-center mb-3">
          <Pressable
            onPress={onClose}
            className="bg-blue-500 w-20 h-20 rounded-full items-center justify-center"
            hitSlop={10}
          >
            <Ionicons name="close" size={26} color="white" />
          </Pressable>
        </View>

        {/* Bottom Sheet */}
        <View className="bg-white rounded-t-3xl p-4 max-h-[70%]">

          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-xl font-bold">Today’s Queue</Text>
            <Pressable onPress={onClose}>
              <Text className="text-blue-500 font-semibold">Close</Text>
            </Pressable>
          </View>

          {/* Queue List */}
          <FlatList
            data={appointments}
            keyExtractor={(_, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <View className="border-b py-3 flex-row justify-between items-center">
                <View>
                  <Text className="font-semibold text-lg">
                    {item.patientId.firstName} {item.patientId.lastName}
                  </Text>
                  <Text className="text-gray-500">
                    {item.time} • {item.status}
                  </Text>
                </View>

                <Text className="text-xl font-bold text-blue-500">
                  {index + 1}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default AppointmentsModal;
