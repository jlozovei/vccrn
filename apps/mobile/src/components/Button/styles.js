import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
    color: colors.base.gray,
    textAlign: 'center'
  },
  buttonTextActive: {
    color: colors.brand.primary
  }
});

export { styles };
