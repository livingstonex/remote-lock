import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import DeviceCard from "../components/DeviceCard";
import { fetchDevices } from "lib/api";

function DeviceList() {
  const [devices, setDevices] = useState([]);
  useEffect(() => {
    fetchDevices().then((res) => setDevices(res.data));
  }, []);

  return (
    <FlatList
      style={{
        backgroundColor: "#EEEEEE",
        padding: "3px",
        // marginLeft: "5px",
        // marginRight: "5px",
        width: "100%",
      }}
      data={devices}
      renderItem={DeviceCard}
      keyExtractor={(x) => x.id}
    />
  );
}

export default DeviceList;
