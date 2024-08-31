import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Restaurant from "../screens/Restaurant";
import { colors } from "../styles";
import { Text } from "react-native";
import { CustomHeader } from "../components";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Tab.Navigator screenOptions={{ header: () => <CustomHeader /> }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="home"
              size={size}
              color={focused ? colors.green : colors.gray}
            />
          ),
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? colors.green : colors.gray,
                fontSize: 12,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Início
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name="person"
              size={size}
              color={focused ? colors.green : colors.gray}
            />
          ),
          tabBarLabel: ({ color, size, focused }) => (
            <Text
              style={{
                color: focused ? colors.green : colors.gray,
                fontSize: 12,
                fontWeight: focused ? "bold" : "normal",
              }}
            >
              Meu perfil
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
