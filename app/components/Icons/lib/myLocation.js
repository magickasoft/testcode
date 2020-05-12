import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export default function MyLocation({ color = '#000', ...props }) {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Path d="M126.598752,115.064591 C128.669876,116.450393 131.271554,114.283955 130.283641,111.996155 L92.2890558,24.0086949 C91.4204133,21.9971017 88.5680407,21.9971017 87.6993982,24.0086949 L49.7048133,111.996155 C48.7168995,114.283955 51.3185776,116.450393 53.3897019,115.064591 L89.994227,90.57227 L126.598752,115.064591 Z M89.994227,31.304933 L122.333277,106.195364 L91.3842868,85.487198 C90.543052,84.9243224 89.445402,84.9243224 88.6041672,85.487198 L57.6551772,106.195364 L89.994227,31.304933 Z" fill={color} fillRule="nonzero" transform="translate(89.994227, 69.000000) rotate(45.000000) translate(-89.994227, -69.000000) " />
       </G>
    </Svg>
  );
}
