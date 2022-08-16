import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";
import React from "react";
import colors from "../../utils/colors";

export default Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { width: dotWidth }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 100,
    margin: 8,
    backgroundColor: colors.dots,
  },
});
