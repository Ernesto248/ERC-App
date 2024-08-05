import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet } from "react-native";

const AnimatedImage = ({ source }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: 30,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [translateY]);

  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      <Image source={source} style={styles.image} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 290,
    height: 290,
  },
});

export default AnimatedImage;
