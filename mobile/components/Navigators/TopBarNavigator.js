import * as React from "react";
import { Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DeviceList from "../../pages/DeviceList";
import UserList from "../../pages/UserList";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Users"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: "white" },
      }}
    >
      <Tab.Screen
        name="Devices"
        component={DeviceList}
        options={{ tabBarLabel: "Devices" }}
      />
      <Tab.Screen
        name="Users"
        component={UserList}
        options={{ tabBarLabel: "Users" }}
      />
    </Tab.Navigator>
  );
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
