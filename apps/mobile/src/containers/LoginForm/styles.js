import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  loginForm: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 48,
    paddingBottom: 48
  },
  title: {
    width: 150,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formContainer: {
    padding: 12,
    borderColor: colors.base.gray,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  formRow: {
    marginBottom: 16
  },
  profilesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileButton: {
    flex: 1,
    padding: 12
  }
});

export { styles };
