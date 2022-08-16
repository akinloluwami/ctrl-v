import React from "react";
import {
  Text,
  View,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import colors from "../../utils/colors";

export default OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={[
        styles.container,
        {
          width: width,
        },
      ]}
    >
      <Image
        source={item.image}
        style={[
          styles.image,
          {
            width: width - 200,
            resizeMode: "contain",
          },
        ]}
      />
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.3,
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    fontWeight: "800",
    color: colors.accent,
    textAlign: "center",
  },
  description: {
    fontSize: 20,
    fontWeight: "400",
    color: colors.text,
    textAlign: "center",
  },
});
