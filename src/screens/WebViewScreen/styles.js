import {Dimensions} from 'react-native';
import {color} from 'theme';
const {width, height} = Dimensions.get('window');
const deviceHeight = height;
const deviceWidth = width;

export const full = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const mainView = () => ({
  zIndex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.white,
  height: deviceHeight,
  width: deviceWidth,
  position: 'absolute',
});
