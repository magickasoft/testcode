import Animated from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';

const {
  neq,
  eq,
  and,
  or,
} = Animated;

export const isMoveEnd = state => and(
  neq(state, State.ACTIVE),
  neq(state, State.BEGAN),
);

export const isEventEnd = state => or(
  eq(state, State.END),
  eq(state, State.FAILED),
  eq(state, State.CANCELLED),
);

export const isBegan = (state, absoluteX) => and(
  neq(absoluteX, 0),
  or(
    eq(state, State.BEGAN),
    eq(state, State.UNDETERMINED),
  )
);
