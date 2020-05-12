import React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export default function AddCart({ color = '#000', ...props }) {
  return (
    <Svg viewBox="0 0 160 160" {...props}>
      <G stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <Path
          d="M45.9733178,121.766753 C46.3619398,121.510338 46.6614509,121.159561 46.8546093,120.759801 C46.7022201,121.187366 46.4282161,121.466609 45.9733178,121.766753 Z M47.0202772,119.011244 C47.039461,119.082967 47.0553572,119.15498 47.0680357,119.227099 C48.6858831,124.820096 54.4901653,128.108386 60.1313841,126.584285 C61.4754426,126.221158 62.85939,127.01636 63.2225173,128.360419 C63.5856445,129.704477 62.7904426,131.088424 61.4463841,131.451552 C53.0447843,133.72143 44.3987888,128.738407 42.1419021,120.330692 C42.1413964,120.313474 42.1409177,120.296378 42.1404665,120.279405 L26.5332232,61.9277459 C24.3005361,53.5255542 29.2829138,44.8958159 37.6721098,42.629269 L58.0973104,37.0779356 C59.4408206,36.7127851 60.8259638,37.5059023 61.1911143,38.8494125 C61.5562649,40.1929226 60.7631477,41.5780658 59.4196375,41.9432164 L38.9907794,47.4955409 C33.278156,49.0389481 29.8862159,54.9139653 31.4048456,60.6289832 L47.0202772,119.011244 Z M77.4295026,28.0087658 L119.714313,29.4853839 C127.506153,29.757481 133.602108,36.2945931 133.330011,44.0864326 L130.761062,117.651522 C130.488965,125.443362 123.951852,131.539317 116.160013,131.26722 L73.8752025,129.790602 C66.0833631,129.518505 59.9874074,122.981393 60.2595044,115.189554 L62.828454,41.6244639 C63.100551,33.8326245 69.6376631,27.7366688 77.4295026,28.0087658 Z M77.2535471,33.0474706 C72.2445075,32.8725511 68.0420783,36.7913797 67.8671587,41.8004194 L65.2982092,115.365509 C65.1232897,120.374549 69.0421183,124.576978 74.051158,124.751897 L116.335968,126.228516 C121.345008,126.403435 125.547437,122.484606 125.722357,117.475567 L128.291306,43.9104771 C128.466226,38.9014375 124.547397,34.6990082 119.538358,34.5240887 L77.2535471,33.0474706 Z M99.8138792,77.2988931 L108.808397,77.6129885 C110.188267,77.6611747 111.267811,78.8188436 111.219625,80.1987143 C111.171439,81.5785851 110.01377,82.6581288 108.633899,82.6099427 L99.6393817,82.2958472 L99.3252863,91.2903646 C99.2771001,92.6702354 98.1194312,93.7497791 96.7395604,93.701593 C95.3596897,93.6534068 94.280146,92.4957379 94.3283321,91.1158672 L94.6424276,82.1213497 L85.6479101,81.8072542 C84.2680394,81.7590681 83.1884957,80.6013992 83.2366818,79.2215284 C83.284868,77.8416577 84.4425368,76.762114 85.8224076,76.8103001 L94.8169251,77.1243956 L95.1310205,68.1298781 C95.1792067,66.7500074 96.3368756,65.6704637 97.7167463,65.7186498 C99.0966171,65.766836 100.176161,66.9245048 100.127975,68.3043756 L99.8138792,77.2988931 Z"
          fill={color}
          fillRrule="nonzero"
        />
      </G>
    </Svg>
  );
}
