import {Dimensions, Platform} from 'react-native';

export const {width: DEVICE_WIDTH, height: DEVICE_HEIGHT} = Dimensions.get(
  'window',
);
export const IS_SMALL_DEVICE = DEVICE_WIDTH < 375;

export const isIphoneX = () =>
  // This has to be iOS
  Platform.OS === 'ios' &&
  // Check either, iPhone X or XR
  (isIPhoneXSize() || isIPhoneXrSize());

export const isIPhoneXSize = () => DEVICE_HEIGHT == 812 || DEVICE_WIDTH == 812;
export const isIPhoneXrSize = () => DEVICE_HEIGHT == 896 || DEVICE_WIDTH == 896;
// the width of images we show in our grids.
export const GRID_WIDTH = DEVICE_WIDTH * 0.95;

export const BOTTOM_TAB_PADDING = 60;

export const CALENDAR_WIDTH = DEVICE_WIDTH * 0.9;
