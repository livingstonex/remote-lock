import React, { useState } from "react";
import { View, StyleSheet, Switch, Image, Text, TextBase } from "react-native";
import DeviceLockStatus from "./DeviceLockStatus";
import UserStartEndTime from "./UserTime";

function DeviceInfo({ name, state, model_number }) {
  const [lockState, setlockState] = useState(state);
  const toggleSwitch = () =>
    setlockState((previousState) => {
      if (previousState === "locked") {
        return "unlocked";
      }

      return "locked";
    });

  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{
          flexDirection: "column",
          marginTop: "3px",
          marginRight: "10px",
          justifyContent: "space-between",
          //   width: "100%",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <Text>{name}</Text>
            <Text
              style={{ color: "grey", fontWeight: "200", fontSize: "11px" }}
            >
              {model_number}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Switch
            trackColor={{ false: "red", true: "green" }}
            thumbTintColor={lockState === "locked" ? "white" : "white"}
            onValueChange={toggleSwitch}
            value={lockState === "locked" ? true : false}
          />
        </View>
      </View>
      <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
        {/* <Text style={{ color: "green", fontWeight: "300" }}> Locked</Text> */}
        <DeviceLockStatus status={lockState} />
      </View>
    </View>
  );
}

export default DeviceInfo;

const styles = StyleSheet.create({});
