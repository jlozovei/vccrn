import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    padding: 12,
    backgroundColor: colors.brand.primary,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  buttonText: {
    fontSize: 16,
    color: colors.base.white,
    textAlign: 'center'
  }
});

export { styles };
