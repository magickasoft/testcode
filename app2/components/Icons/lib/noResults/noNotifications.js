import React from 'react';
import * as SVG from 'react-native-svg';

export default function NoNotifications({ ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 198 191" {...rest}>
      <SVG.G fill="none" fillRule="nonzero" stroke="#A0A0A0">
        <SVG.Path fill="#A0A0A0" d="M117.3 137c20.774-2.734 44.292 16.017 64.847 0 20.555-16.019 14.949-61.075-3.942-76.051-18.89-14.977-29.862-4.379-53.82-6.13-23.956-1.752-23.903-21.069-54.348-21.069S36.224 47.525 20.44 67.822c-15.784 20.298-22.513 44.54 4.822 57.033 27.335 12.493 20.917 28.162 44.775 28.162 23.858 0 26.49-13.284 47.263-16.018z" opacity=".1" />
        <SVG.G opacity=".7" transform="translate(-2 35)">
          <SVG.Circle cx="43" cy="113" r="2" strokeWidth="2" />
          <SVG.Circle cx="146" cy="23" r="2" strokeWidth="2" />
          <SVG.Circle cx="27" cy="55" r="3" strokeWidth="2" />
          <SVG.Circle cx="166" cy="74" r="3" strokeWidth="2" />
          <SVG.G strokeLinecap="round" strokeWidth="2">
            <SVG.Path d="M9.828 92.172l-5.656 5.656M9.828 97.828l-5.656-5.656" />
          </SVG.G>
          <SVG.G strokeLinecap="round" strokeWidth="2">
            <SVG.Path d="M186.828 24.172l-5.656 5.656M186.828 29.828l-5.656-5.656" />
          </SVG.G>
          <SVG.G strokeLinecap="round" strokeWidth="3">
            <SVG.Path d="M73.156 88.568a3.548 3.548 0 0 0-.14 1.787c.956 3.939 3.702 7.333 7.57 8.74 3.867 1.408 8.153.574 11.065-1.958a3.889 3.889 0 0 0 1.1-1.492" />
            <SVG.Path strokeLinejoin="round" d="M98.818 20.396c-.455-1.35-.12-2.926 1.176-4.026 2.913-2.532 7.198-3.366 11.065-1.959 3.868 1.408 6.614 4.802 7.57 8.741.246 1.447-.366 2.674-1.343 3.452 8.294 7.128 11.258 19.179 7.368 29.868l-.898 2.467c-3.335 9.162-3.728 18.995-.796 28.443l.765 2.274c.095.832.062 2.018-.675 2.947-1.857 2.915-5.44 4.006-8.604 2.854L58.192 74.983c-3.164-1.152-5.207-4.29-5.107-7.846-.095-.832.77-2.114 1.729-2.563l2.047-1.25c8.32-5.352 14.338-13.138 17.673-22.3l1.283-3.524c3.656-10.047 12.937-16.502 23.001-17.104z" />
          </SVG.G>
        </SVG.G>
      </SVG.G>
    </SVG.Svg>
  );
}