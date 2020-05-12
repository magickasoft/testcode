import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export default function Image({ color = '#000', ...props }) {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Path d="M42.1346154,27 L118.865385,27 C126.671717,27 133,33.9862234 133,42.6041667 L133,118.395833 C133,127.013777 126.671717,134 118.865385,134 L42.1346154,134 C34.3282829,134 28,127.013777 28,118.395833 L28,42.6041667 C28,33.9862234 34.3282829,27 42.1346154,27 Z M42.1346154,32 C37.20608,32 33,36.6433788 33,42.6041667 L33,118.395833 C33,124.356621 37.20608,129 42.1346154,129 L118.865385,129 C123.79392,129 128,124.356621 128,118.395833 L128,42.6041667 C128,36.6433788 123.79392,32 118.865385,32 L42.1346154,32 Z" fill={color} fillRule="nonzero" />
        <Path d="M79.1406588,100.410897 C80.1173525,101.267385 81.5872717,101.233141 82.5230219,100.332101 L107.09021,76.6761764 L118.458949,87.3246232 C119.46666,88.268489 121.048726,88.2167318 121.992592,87.2090202 C122.936458,86.2013086 122.884701,84.6192426 121.876989,83.6753768 L108.775426,71.4038924 C107.804288,70.4942826 106.29084,70.5047322 105.332354,71.427665 L80.7098925,95.1368119 L68.7531161,84.6516035 C67.7075152,83.7346888 66.1146255,83.8473055 65.2084315,84.9022113 L41.1036264,112.962758 C40.2039331,114.010096 40.3236231,115.588477 41.3709613,116.48817 C42.4182995,117.387864 43.9966804,117.268174 44.8963736,116.220836 L67.355426,90.0761192 L79.1406588,100.410897 Z" fill={color} fillRule="nonzero" />
        <Path d="M91,73 C95.9705627,73 100,68.9705627 100,64 C100,59.0294373 95.9705627,55 91,55 C86.0294373,55 82,59.0294373 82,64 C82,68.9705627 86.0294373,73 91,73 Z M91,68 C88.790861,68 87,66.209139 87,64 C87,61.790861 88.790861,60 91,60 C93.209139,60 95,61.790861 95,64 C95,66.209139 93.209139,68 91,68 Z" fill={color} fillRule="nonzero" />
      </G>
    </Svg>
  );
}