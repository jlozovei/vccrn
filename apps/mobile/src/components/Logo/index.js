import { View, Image } from 'react-native';
import vittudeLogo from '@vccrn/assets/logo-vittude.svg';

const Logo = ({ style }) => {
  return <Image source={vittudeLogo} style={style} alt="Vittude" testID="logo" />;
};

export { Logo };
