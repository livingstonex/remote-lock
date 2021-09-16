import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserList from "pages/UserList";
import DeviceList from "./pages/DeviceList";
import TopBarNavigator from "./components/Navigators/TopBarNavigator";

export default function App() {
  const [page, setPage] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable
            onPress={() => setPage(1)}
            style={{
              padding: 4,
              margin: 12,
              borderRadius: 10,
              backgroundColor: page === 1 ? "white" : "#eee",
            }}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View>
              <Text>Devices</Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => setPage(2)}
            style={{
              padding: 4,
              margin: 12,
              borderRadius: 10,
              backgroundColor: page === 2 ? "white" : "#eee",
            }}
            android_ripple={{ borderless: true, radius: 50 }}
          >
            <View>
              <Text>Users</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.body}>
        {page === 1 ? <DeviceList /> : <UserList />}
      </View>
      {/* <Text>Text {page}</Text> */}
      {/* <UserList /> */}
      {/* <DeviceList /> */}
      {/* <StatusBar style="auto" /> */}
      {/* <TopBarNavigator /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },

  NavContainer: {
    position: "absolute",
    alignItems: "center",
    top: 20,
  },

  NavBar: {
    flexDirection: "row",
    backgroundColor: "#eee",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 20,
    padding: "5px",
  },

  IconBehave: {
    padding: 4,
    margin: 12,
    borderRadius: 10,
    backgroundColor: "white",
  },

  body: {
    marginTop: 100,
  },
});
