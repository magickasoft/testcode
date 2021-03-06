import React from 'react';
import * as SVG from 'react-native-svg';

export default function CardExpDate({ color, textColor, ...rest }) {
  return (
    <SVG.Svg viewBox="0 0 96 55" {...rest}>
      <SVG.G fill="none" fillRule="evenodd">
        <SVG.Rect width="94" height="53" x="1" y="1" stroke={color || '#BBBBBF'} strokeWidth="2" rx="4" />
        <SVG.Rect width="25" height="5" x="8" y="10" fill={color || '#BBBBBF'} fillRule="nonzero" rx="2" />
        <SVG.Path fill={color || '#BBBBBF'} fillRule="nonzero" d="M10 29h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z" />
        <SVG.Rect width="25" height="5" x="8" y="41" fill={color || '#BBBBBF'} fillRule="nonzero" rx="2" />
        <SVG.Rect width="8" height="8" x="70" y="38" fill={color || '#BBBBBF'} fillRule="nonzero" rx="2" />
        <SVG.Rect width="8" height="8" x="80" y="38" fill={color || '#BBBBBF'} fillRule="nonzero" rx="2" />
        <SVG.Path fill={color || '#BBBBBF'} fillRule="nonzero" d="M31 29h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H31a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM53 29h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H53a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2zM75 29h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H75a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2z" />
        <SVG.Path fill={textColor || '#373737'} d="M40.56 46h-.909v-6.02l-1.82.668v-.82l2.587-.972h.142V46zm7.304 0h-4.658v-.65l2.461-2.734c.365-.413.616-.75.754-1.008.139-.259.208-.527.208-.803 0-.371-.112-.676-.337-.913-.225-.238-.524-.357-.898-.357-.45 0-.799.128-1.048.383-.249.256-.373.612-.373 1.067h-.904c0-.654.211-1.183.633-1.587.421-.403.985-.605 1.692-.605.66 0 1.183.173 1.567.52.384.347.576.808.576 1.384 0 .7-.446 1.533-1.338 2.5l-1.904 2.066h3.57V46zm1.23.61h-.776l2.97-7.72h.77l-2.963 7.72zm8.507-.61h-4.659v-.65l2.461-2.734c.365-.413.616-.75.755-1.008.138-.259.207-.527.207-.803 0-.371-.112-.676-.337-.913-.224-.238-.524-.357-.898-.357-.45 0-.798.128-1.047.383-.25.256-.374.612-.374 1.067h-.903c0-.654.21-1.183.632-1.587.422-.403.985-.605 1.692-.605.66 0 1.183.173 1.567.52.384.347.576.808.576 1.384 0 .7-.446 1.533-1.337 2.5l-1.905 2.066h3.57V46zm5.415-3.032c0 1.058-.181 1.844-.542 2.358-.362.514-.926.772-1.695.772-.758 0-1.32-.252-1.684-.755-.365-.503-.554-1.254-.567-2.253v-1.206c0-1.045.181-1.821.542-2.33.362-.507.928-.761 1.7-.761.765 0 1.328.245 1.689.735s.547 1.246.557 2.268v1.172zm-.904-1.236c0-.765-.107-1.322-.322-1.672-.215-.35-.555-.525-1.02-.525-.463 0-.8.174-1.011.523-.212.348-.32.883-.327 1.606v1.445c0 .769.111 1.336.334 1.702.223.366.56.55 1.013.55.446 0 .777-.173.994-.518.216-.345.33-.889.34-1.631v-1.48z" />
      </SVG.G>
    </SVG.Svg>
  );
}
