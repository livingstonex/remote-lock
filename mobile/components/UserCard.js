import React from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";
import UserInfo from "./utilities/UserInfo";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: "10px",
    padding: "10px",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  col: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginRight: "20px",
  },

  img: {
    // borderRadius: "50%",
    width: "70px",
    height: "70px",
  },

  status: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

function UserCard({ item: { attributes } }) {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: "20px",
        backgroundColor: "white",
        marginTop: "5px",
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

      <UserInfo {...attributes} />
    </View>
  );
}
export default UserCard;
