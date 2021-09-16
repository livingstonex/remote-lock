import React from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";

const statusColors = { locked: "green", unlocked: "red" };

function DeviceLockStatus({ status }) {
  const styles = {
    text: {
      color: statusColors[status],
      fontWeight: "300",
    },
  };
  return <Text style={styles.text}> {status}</Text>;
}

export default DeviceLockStatus;
