import { Dimensions, Platform, StatusBar } from 'react-native';

// 屏幕宽高
const { width, height } = Dimensions.get('window');
// 状态栏高度
const statusHeight = StatusBar.currentHeight || 0;
// 是否为Ios
export const isIos = Platform.OS === 'ios';
// 是否为IphoneXX
export const isIphoneX = isIos && height >= 812;
// 设计稿宽高
export const [baseWidth, baseHeight] = [375, 667];
// 屏幕与设计稿的宽高比
export const [wRatio, hRatio] = [width / baseWidth, height / baseHeight];
// 宽度适配
export const pixelX = w => Math.round(w * wRatio);
// 高度适配
export const pixelY = h => Math.round(h * hRatio);
// 状态栏高度
export const statusBarHeight = isIos ? (height >= 812 ? 44 : 20) : statusHeight;

export default {
  windowW: width,
  windowH: height,
  isIos,
  isIphoneX,
  pixelX,
  pixelY,
  statusBarHeight,
};
