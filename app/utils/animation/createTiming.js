import Animated, { Easing } from 'react-native-reanimated';

const {
  set,
  cond,
  multiply,
  startClock,
  stopClock,
  clockRunning,
  timing,
  Value,
} = Animated;

const createTiming = (duration, clock, value, dest) => {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration,
    toValue: new Value(0),
    easing: Easing.out(Easing.ease),
    useNativeDriver: true,
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, multiply(value, 1)),
      set(state.frameTime, 0),
      set(config.toValue, multiply(dest, 1)),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
};

export default createTiming;
