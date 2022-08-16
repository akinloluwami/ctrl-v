import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import onboardingData from "../../utils/onborading";
export default Onboarding = () => {
  return (
    <View style={styles.container}>
      <FlatList data={onboardingData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
