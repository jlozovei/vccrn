import { View } from 'react-native';

import { Logo } from '@/components/Logo';

import { base } from '@/styles';
import { styles } from './styles';

const Header = () => {
  return (
    <View>
      <View style={styles.header}>
        <Logo style={styles.logo} />
      </View>
    </View>
  );
};

export { Header };
