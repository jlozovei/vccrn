import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative'
  },
  label: {
    marginBottom: 2,
    fontSize: 14,
    lineHeight: 22,
    color: colors.brand.primary
  },
  input: {
    padding: 12,
    fontSize: 14,
    borderWidth: 1,
    borderColor: colors.base.gray,
    borderRadius: 4
  },
  borderError: {
    borderColor: colors.context.error
  },
  errorMessage: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.context.error
  },
  showPasswordButton: {
    position: 'absolute',
    top: 32,
    right: 8,
    width: 24,
    height: 24,
    padding: 0
  },
  showPasswordIcon: {
    width: 24,
    height: 24
  }
});

export { styles };
