import Animated from 'react-native-reanimated';
import Color from 'color';

const {
  cond,
  multiply,
  divide,
  round,
  lessThan,
  sub,
  abs,
  add,
  modulo,
  color,
  interpolate,
  Extrapolate
} = Animated;

function rgb2hsv(arg) { // eslint-disable-line
  let rr; let gg; let bb;
  const r = arg[0] / 255; // eslint-disable-line
  const g = arg[1] / 255; // eslint-disable-line
  const b = arg[2] / 255; // eslint-disable-line

  let h; let s;

  const v = Math.max(r, g, b);

  const diff = v - Math.min(r, g, b);

  const diffc = function (c) {
    return (v - c) / 6 / diff + 1 / 2;
  };

  if (diff === 0) {
    h = s = 0; // eslint-disable-line
  } else {
    s = diff / v;
    rr = diffc(r);
    gg = diffc(g);
    bb = diffc(b);

    if (r === v) {
      h = bb - gg;
    } else if (g === v) {
      h = (1 / 3) + rr - bb;
    } else if (b === v) {
      h = (2 / 3) + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s,
    v
  };
}

const match = (condsAndResPairs, offset = 0) => {
  if (condsAndResPairs.length - offset === 1) {
    return condsAndResPairs[offset];
  } else if (condsAndResPairs.length - offset === 0) {
    return undefined;
  }
  return cond(
    condsAndResPairs[offset],
    condsAndResPairs[offset + 1],
    match(condsAndResPairs, offset + 2)
  );
};

const colorHSV = (h, s, v) => {
  const c = multiply(v, s);
  const hh = divide(h, 60);
  const x = multiply(c, sub(1, abs(sub(modulo(hh, 2), 1))));

  const m = sub(v, c);

  const colorRGB = (r, g, b) => color(
    round(multiply(255, add(r, m))),
    round(multiply(255, add(g, m))),
    round(multiply(255, add(b, m)))
  );

  return match([
    lessThan(h, 60),
    colorRGB(c, x, 0),
    lessThan(h, 120),
    colorRGB(x, c, 0),
    lessThan(h, 180),
    colorRGB(0, c, x),
    lessThan(h, 240),
    colorRGB(0, x, c),
    lessThan(h, 300),
    colorRGB(x, 0, c),
    colorRGB(c, 0, x) /* else */
  ]);
};

const createAnimatedColor = (col, transparent = 1) => {
  const [r, g, b] = Color(col).rgb().array();

  return Animated.color(r, g, b, transparent);
};

const interpolateColor = (value, config) => {
  const {
    inputRange,
    outputRange
  } = config;

  const hsv = rgb2hsv(Color(outputRange[0]).rgb().array());
  const hsv2 = rgb2hsv(Color(outputRange[1]).rgb().array());

  const H = interpolate(value, {
    inputRange,
    outputRange: [hsv.h, hsv2.h],
    extrapolate: Extrapolate.CLAMP
  });

  const S = interpolate(value, {
    inputRange,
    outputRange: [hsv.s, hsv2.s],
    extrapolate: Extrapolate.CLAMP
  });

  const V = interpolate(value, {
    inputRange,
    outputRange: [hsv.v, hsv2.v],
    extrapolate: Extrapolate.CLAMP
  });

  return colorHSV(H, S, V);
};

export {
  createAnimatedColor,
  interpolateColor,
  colorHSV
};
