import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";
import DeviceInfo from "./utilities/DeviceInfo";

const styles = StyleSheet.create({});

function DeviceCard({ item: { attributes } }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: "20px",
        backgroundColor: "white",
        marginTop: "5px",
        // marginLeft: "5px",
        // marginRight: "5px",
        width: "100%",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <View style={{ marginRight: "10px" }}>
          <Image
            source={{
              uri: "http://placekitten.com/g/30/30",
              height: "30px",
              width: "30px",
            }}
            style={{ width: "70px", height: "70px", borderRadius: "50%" }}
          />
        </View>
      </View>
      <DeviceInfo {...attributes} />
    </View>
  );
}
export default DeviceCard;

/* <UserInfo {...attributes} />; */
