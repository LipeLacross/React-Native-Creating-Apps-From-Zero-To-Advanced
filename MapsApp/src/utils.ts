import { Platform, PixelRatio } from 'react-native';

export function getPixel(pixel: number): number {
  return Platform.select({
    ios: pixel,
    android: PixelRatio.getPixelSizeForLayoutSize(pixel)
  }) || pixel;
}

