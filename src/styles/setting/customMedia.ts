// defaultと同じ

import { generateMedia } from 'styled-media-query';
import { FlattenSimpleInterpolation } from 'styled-components';

type BreakPoint = {
  huge: string;
  large: string;
  medium: string;
  small: string;
};

export const customMedia = generateMedia<BreakPoint>({
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px'
});

// 指定サイズ以下
export const customLessThan = (
  breakPoint: keyof BreakPoint,
  style: FlattenSimpleInterpolation
): any => customMedia.lessThan(breakPoint)`${style}`;

// 指定サイズ以上
export const customGreaterThan = (
  breakPoint: keyof BreakPoint,
  style: FlattenSimpleInterpolation
): any => customMedia.greaterThan(breakPoint)`${style}`;

// 2つのブレイクポイントの間
export const customBetween = (
  breakPoint1: keyof BreakPoint,
  breakPoint2: keyof BreakPoint,
  style: FlattenSimpleInterpolation
): any => customMedia.between(breakPoint1, breakPoint2)`${style}`;
