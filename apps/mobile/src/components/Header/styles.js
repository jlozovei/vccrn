import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: colors.base.white,
    borderBottomWidth: 4,
    borderColor: colors.brand.primary
  },
  logo: {
    width: 80,
    height: 26
  }
});

export { styles };
