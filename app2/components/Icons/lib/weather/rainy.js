import React from 'react';
import * as SVG from 'react-native-svg';

export default function Rainy({ color, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 33 33" {...rest}>
      <SVG.G fill="none" fillRule="nonzero">
        <SVG.Path fill={color || '#D8D8D8'} d="M7.42 12.166a4.66 4.66 0 0 0-.64.058c-2.142.343-3.728 2.137-3.728 4.244 0 2.37 1.995 4.303 4.468 4.303.276 0 .549-.024.816-.072l.262 1.477a6.164 6.164 0 0 1-1.078.095c-3.29 0-5.968-2.593-5.968-5.803 0-2.783 2.027-5.146 4.777-5.687 1.337-3.863 5.085-6.531 9.367-6.531 3.426 0 6.547 1.708 8.343 4.45a6.805 6.805 0 0 1 1.794.046c3.606.571 6.088 3.876 5.531 7.39-.556 3.516-3.939 5.891-7.544 5.32l.234-1.481c2.798.443 5.403-1.387 5.829-4.073.425-2.686-1.487-5.231-4.285-5.674-1.853-.294-3.68.41-4.81 1.796a4.816 4.816 0 0 0-.51.765l-1.322-.71c.19-.354.414-.69.669-1.002a6.54 6.54 0 0 1 2.837-2.01c-1.555-2.055-4.045-3.317-6.766-3.317-3.763 0-7.03 2.415-8.054 5.848l-.06.143c.02-.036-.016.158-.043.437l-.119-.012z" />
        <SVG.Path fill={color || '#1D94F7'} d="M9.166 25.02a.75.75 0 1 1 1.388.568L9.361 28.51a.75.75 0 0 1-1.389-.567l1.194-2.922zm2.538-6.124a.75.75 0 1 1 1.387.571l-1.075 2.612a.75.75 0 1 1-1.387-.571l1.075-2.612zm1.906 6.125a.75.75 0 1 1 1.389.567l-1.194 2.922a.75.75 0 0 1-1.388-.567l1.193-2.922zm2.539-6.125a.75.75 0 0 1 1.387.571L16.46 22.08a.75.75 0 0 1-1.388-.571l1.076-2.612zm1.906 6.125a.75.75 0 1 1 1.388.567L18.25 28.51a.75.75 0 0 1-1.389-.567l1.194-2.922zm2.673-6.127a.75.75 0 1 1 1.387.571l-1.075 2.612a.75.75 0 1 1-1.387-.571l1.075-2.612z" />
      </SVG.G>
    </SVG.Svg>
  );
}