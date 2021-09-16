import React from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";

const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

function UserStatus({ status }) {
  const styles = {
    text: {
      backgroundColor: statusColors[status],
      paddingTop: "3px",
      paddingBottom: "3px",
      paddingLeft: "6px",
      paddingRight: "6px",
      borderRadius: "10px",
      fontSize:"12px"
    },
  };
  return <Text style={styles.text}>{status.toUpperCase()}</Text>;
}

export default UserStatus;
