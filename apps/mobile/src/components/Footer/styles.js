import { colors } from '@vccrn/tokens';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  disclaimer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
    paddingBottom: 24,
    backgroundColor: '#313a4d'
  },
  responsibleTitle: {
    marginBottom: 16,
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.base.white,
    textAlign: 'center'
  },
  responsibleText: {
    marginBottom: 12,
    fontSize: 16,
    color: colors.base.white,
    textAlign: 'center',
    lineHeight: 24
  },
  noticeWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 16,
    borderTopWidth: 1,
    borderColor: colors.base.white
  },
  noticeText: {
    fontSize: 14,
    color: colors.base.white,
    lineHeight: 24,
    textAlign: 'center'
  },
  noticeImage: {
    width: 24,
    height: 24,
    marginBottom: 24
  },
  copy: {
    paddingTop: 24,
    paddingBottom: 24
  },
  copyWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  copyText: {
    fontSize: 14
  },
  copyLogo: {
    width: 60,
    height: 20,
    marginLeft: 16
  }
});

export { styles };
