import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { G, Circle } from "react-native-svg";
import colors from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";
export default function NextButton() {
  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth - 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" origin={center}>
          <Circle
            stroke={`rgba(${colors.accentRGB}, 0.1)`}
            strokeWidth={strokeWidth}
            cx={center}
            cy={center}
            r={radius}
          />
          <Circle
            stroke={colors.accent}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * 25) / 100}
          />
        </G>
      </Svg>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    padding: 20,
    borderRadius: 100,
    backgroundColor: colors.accent,
  },
});
