import { Pressable, Text } from 'react-native';

import { styles } from './styles';

const Button = ({ text, onPress, active, style, ...props }) => {
  return (
    <Pressable style={style} onPress={onPress} testID={`${text}--pressable`} {...props}>
      <Text style={[styles.buttonText, !!active && styles.buttonTextActive]}>{text}</Text>
    </Pressable>
  );
};

export { Button };
