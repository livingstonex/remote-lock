import React from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";
import UserStatus from "./UserStatus";
import UserStartEndTime from "./UserTime";

function UserInfo({
  name,
  email,
  status,
  starts_at,
  ends_at,
  device_time_zone,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        // justifyContent: "space-between",
        alignContent: "space-between",
        // alignItems: "flex-end",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          marginTop: "3px",
          marginRight: "10px",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "" }}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
            <UserStartEndTime
              starts_at={starts_at}
              ends_at={ends_at}
              device_time_zone={device_time_zone}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
        <UserStatus status={status} />
      </View>
    </View>

    // <View style={{ flexDirection: "row" }}>
    //   <View
    //     style={{
    //       flexDirection: "column",
    //       marginTop: "3px",
    //       marginRight: "10px",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <View style={{ flexDirection: "row" }}>
    //       <View style={{ flexDirection: "column" }}>
    //         <Text>{name}</Text>
    //         <Text
    //           style={{ color: "grey", fontWeight: "200", fontSize: "11px" }}
    //         >
    //           {model_number}
    //         </Text>
    //       </View>
    //     </View>
    //     <View style={{ flexDirection: "row" }}>
    //       <Switch
    //         trackColor={{ false: "#767577", true: "#81b0ff" }}
    //         //   thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    //         //   onValueChange={toggleSwitch}
    //         //   value={isEnabled}
    //       />
    //     </View>
    //   </View>
    //   <View style={{ flexDirection: "column", justifyContent: "flex-end" }}>
    //     {/* <Text style={{ color: "green", fontWeight: "300" }}> Locked</Text> */}
    //     <DeviceLockStatus status={state} />
    //   </View>
    // </View>
  );
}

export default UserInfo;

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    color: "black",
  },

  email: {
    fontWeight: "600",
    color: "#EFEFEF",
  },
});
