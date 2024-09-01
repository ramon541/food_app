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
  const MainTabs = () => {
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
                color={focused ? colors.orange : colors.gray}
              />
            ),
            tabBarLabel: ({ color, size, focused }) => (
              <Text
                style={{
                  color: focused ? colors.orange : colors.gray,
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
                color={focused ? colors.orange : colors.gray}
              />
            ),
            tabBarLabel: ({ color, size, focused }) => (
              <Text
                style={{
                  color: focused ? colors.orange : colors.gray,
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
  };

  //================================================================
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        header: () => <CustomHeader navigation={navigation} goBack />,
      })}
    >
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Restaurant" component={Restaurant} />
    </Stack.Navigator>
  );
}
