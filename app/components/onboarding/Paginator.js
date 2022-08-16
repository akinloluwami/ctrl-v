import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../utils/colors";

export default Paginator = ({ data, scrollX }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
      }}
    >
      {data.map((_, i) => {
        return <View key={i.toString()} style={[styles.dot, { width: 12 }]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 12,
    borderRadius: 100,
    margin: 8,
    backgroundColor: colors.dots,
  },
});
