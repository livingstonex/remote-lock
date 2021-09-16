import React from "react";
import { View, StyleSheet, Image, Text, TextBase } from "react-native";
import { formatDateTime } from "./date.utils";

function UserStartEndTime({ starts_at, ends_at, device_time_zone }) {
  return (
    <Text>
      {starts_at ? formatDateTime(starts_at) : "22/07/2019"}
      {` - `}
      {ends_at ? formatDateTime(ends_at) : "29/07/2019"}
    </Text>
  );
}

export default UserStartEndTime;
