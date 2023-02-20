import { Pressable, Text, ActivityIndicator } from 'react-native';

import { styles } from './styles';

const Submit = ({ text, onPress, loading, ...props }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} {...props}>
      {loading && <ActivityIndicator size="small" color="white" testID="spinner" />}
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

export { Submit };
