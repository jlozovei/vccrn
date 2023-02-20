import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

import Eye from '@vccrn/assets/eye.png';
import EyeSlash from '@vccrn/assets/eye-slash.png';

import { styles } from './styles';

const TextField = React.forwardRef(
  ({ label, error, required = false, password = false, ...props }, ref) => {
    const labelText = `${label}${required ? '*' : ''}`;
    const [secureMode, setSecureMode] = useState(password);

    const togglePasswordDisplay = () => {
      setSecureMode(!secureMode);
    };

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{labelText}</Text>
        <TextInput
          style={[styles.input, !!error && styles.borderError]}
          {...props}
          ref={ref}
          secureTextEntry={secureMode}
          testID={`${label}--input`}
        />

        {password && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.showPasswordButton}
            onPress={() => togglePasswordDisplay()}
            testID={`${label}--touchable`}
          >
            <Image source={secureMode ? Eye : EyeSlash} style={styles.showPasswordIcon} />
          </TouchableOpacity>
        )}

        {!!error && <Text style={styles.errorMessage}>{error.message}</Text>}
      </View>
    );
  }
);

export { TextField };
