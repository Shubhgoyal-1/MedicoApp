import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs, usePathname } from 'expo-router';
import cn from 'clsx';
import { TabBarIconProps } from '@/types/type';
import { Ionicons } from "@expo/vector-icons";

import { Pressable } from "react-native";
import { useRouter } from "expo-router";

const FloatingAppointmentButton = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = pathname === "/appointments";

  return (
    <Pressable
      onPress={() => {
        router.push("/appointments")
      }}
      style={{
        position: "absolute",
        bottom: 50,
        alignSelf: "center",
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: isActive ? "#ffffff" : "#4aa6b5",
        justifyContent: "center",
        alignItems: "center",
        elevation: 8,
      }}
    >
      <Ionicons name="add" size={36} color={isActive ? "#4aa6b5" : "#ffffff"} />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className={cn(
          "text-[11px] font-semibold text-center text-white",
          isActive ? "text-[#4aa6b5]" : "text-white"
        )}
      >
        Appointments
      </Text>
    </Pressable>
  );
};


const TabBarIcon = ({ focused, icon, title, offsetX = 0, }: TabBarIconProps & { offsetX?: number }) => {
  return (
    <View
      style={{
        transform: [{ translateX: offsetX }],
      }}
      className={cn("tab-icon items-center gap-1 justify-center w-20 h-20 rounded-full", focused ? "bg-white" : "")}>
      <Ionicons
        name={icon}
        size={26}
        color={focused ? "#000000ff" : "#ffffffff"}
      />
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        className={cn(
          "text-[11px] font-semibold text-center",
          focused ? "text-black" : "text-white"
        )}
      >
        {title}
      </Text>
    </View>
  );
};


export default function PatientLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          sceneStyle: {
            backgroundColor: "transparent"
          },
          tabBarStyle: {
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            marginHorizontal: 12,
            height: 71,
            position: 'absolute',
            bottom: 24,
            backgroundColor: '#0492ffff',
            shadowColor: '#2196f3',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5
          },
          tabBarItemStyle: {
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 16,
          },
        }}
      >
        <Tabs.Screen
          name="dashboard"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon="home-outline"
                title="Dashboard"
                offsetX={-4}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="medications"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon="medkit-outline"
                title="Medicines"
                offsetX={-6}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="appointments"
          options={{
            tabBarIcon: () => null,
          }}
        />

        <Tabs.Screen
          name="records"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon="folder-outline"
                title="Records"
                offsetX={6}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="report"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon="bar-chart-outline"
                title="Reports"
                offsetX={4}
              />
            ),
          }}
        />
      </Tabs>
      <FloatingAppointmentButton />
    </>

  );
}
