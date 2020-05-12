import React from 'react';
import * as SVG from 'react-native-svg';

export default function PartlyCloudy({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 33 33" {...rest}>
      <SVG.G fill="none" fillRule="nonzero">
        <SVG.Path fill={color || '#FDB924'} d="M27.412 17.01l-1.302-.747a3.83 3.83 0 0 0 .394-.98c.507-2.032-.714-4.084-2.722-4.584a3.739 3.739 0 0 0-3.542.983l-1.056-1.066a5.238 5.238 0 0 1 4.961-1.373c2.815.702 4.52 3.57 3.814 6.403a5.33 5.33 0 0 1-.547 1.364zM25.887 5.376a.75.75 0 0 1 .481.945l-.523 1.61a.75.75 0 1 1-1.426-.463l.523-1.61a.75.75 0 0 1 .945-.482zm5.414 4.648a.75.75 0 0 1-.327 1.009l-1.51.769a.75.75 0 0 1-.68-1.337l1.509-.769a.75.75 0 0 1 1.008.328zm.545 7.152a.75.75 0 0 1-.945.482l-1.611-.524a.75.75 0 1 1 .464-1.426l1.61.523a.75.75 0 0 1 .482.945zM18.774 5.954a.75.75 0 0 1 1.009.328l.769 1.509a.75.75 0 1 1-1.337.68l-.768-1.509a.75.75 0 0 1 .327-1.008z" />
        <SVG.Path fill={color || '#D8D8D8'} d="M7.505 13.915C4.423 14.169 2 16.773 2 19.947 2 23.29 4.686 26 8 26c.202 0 .403-.01.6-.03l13.2.03c.197-.011.397 0 .6 0 2.982 0 5.4-2.439 5.4-5.447 0-3.009-2.418-5.448-5.4-5.448-.634 0-1.242.11-1.807.313a6.83 6.83 0 0 0 .007-.313c0-3.677-2.955-6.658-6.6-6.658-3.242 0-5.939 2.359-6.495 5.468zM14 6.947c3.972 0 7.272 2.878 7.966 6.672.144-.01.289-.014.434-.014 3.814 0 6.9 3.114 6.9 6.948 0 3.527-2.612 6.444-6 6.888L7.1 27.5C3.38 26.998.5 23.81.5 19.947c0-3.559 2.455-6.574 5.792-7.356 1.06-3.306 4.14-5.644 7.708-5.644z" />
      </SVG.G>
    </SVG.Svg>
  );
}