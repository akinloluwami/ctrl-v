import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  DevSettings,
} from "react-native";
import onboardingData from "../../utils/onborading";
import NextButton from "./NextButton";
import OnboardingItem from "./OnboardingItem";
import Paginator from "./Paginator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../utils/colors";

export default Onboarding = ({ navigation }) => {
  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem("viewedOnboarding");
        if (value) {
          //setOnboardingViewed(true);
          navigation.navigate("Auth", { screen: "Login" });
          //console.log("onboardingViewed yen yen ");
        }
      } catch (err) {
        console.log("Error @checkOnboarding", err);
      }
    })();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if (currentIndex < onboardingData.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      try {
        await AsyncStorage.setItem("viewedOnboarding", "viewed");
        navigation.navigate("Auth", { screen: "Login" });
        console.log("omo e dn end oo");
      } catch (err) {
        console.log("Error @scrollTo", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={onboardingData}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => onboardingData.indexOf(item).toString()}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          scrollEventThrottle={32}
          ref={slidesRef}
        />
      </View>
      <Paginator data={onboardingData} scrollX={scrollX} />
      <NextButton
        percentage={(currentIndex + 1) * (100 / onboardingData.length)}
        scrollTo={scrollTo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
});
