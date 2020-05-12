import Animated from 'react-native-reanimated';

const y = (Y, useNativeDriver = true) => Animated.event(
  [{ nativeEvent: { contentOffset: { y: Y } } }],
  { useNativeDriver },
);

const velocityY = (Y, useNativeDriver = true) => Animated.event(
  [{ nativeEvent: { velocity: { y: Y } } }],
  { useNativeDriver },
);

export { y, velocityY };
