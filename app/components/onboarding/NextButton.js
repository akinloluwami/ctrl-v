import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import Svg, { G, Circle } from "react-native-svg";
import colors from "../../utils/colors";
import { AntDesign } from "@expo/vector-icons";

export default function NextButton({ percentage, scrollTo }) {
  const size = 100;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth - 2;
  const circumference = 2 * Math.PI * radius;
  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = (toValue) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 500,
      useNativeDriver: btrue,
    }).start();
  };
  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      (value) => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;

        if (progressRef.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage]
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

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
            ref={progressRef}
            stroke={colors.accent}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={scrollTo}
      >
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
