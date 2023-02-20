import { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import { useForm } from 'react-hook-form';

import { isValidEmail, isValidDocument } from '@vccrn/validators';
import { strings } from '@vccrn/strings';
import { documentMask } from '@vccrn/masks';

import { login } from '@/services';

import { Button, TextField, Submit } from '@/components';
import { base } from '@/styles';
import { styles } from './styles';

const LoginForm = () => {
  const [profile, setProfile] = useState('user');
  const [loading, setLoading] = useState(false);
  const [documentValue, setDocumentValue] = useState('');

  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      document: '',
      password: ''
    }
  });

  const resetForm = () => {
    setValue('email', '');
    setValue('document', '');
    setValue('password', '');

    reset();
  };

  const updateProfile = (profile) => {
    resetForm();
    setProfile(profile);
  };

  const alertUserInfo = (userInfo) => {
    Alert.alert('Sucesso!', `Bem-vindo, ${userInfo.firstName}`, [
      {
        text: 'Sair',
        onPress: () => resetForm()
      }
    ]);
  };

  const onSubmit = async (credentials) => {
    setLoading(true);

    try {
      const response = await login(credentials);

      if (response?.data) {
        setLoading(false);
        alertUserInfo(response.data);
        resetForm();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.loginForm}>
      <View style={base.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 48 }}>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
          <View>
            <Text style={styles.title}>Faça seu login</Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
        </View>

        <View style={styles.profilesWrapper}>
          <Button
            text="Psicólogo"
            style={styles.profileButton}
            active={profile === 'psychologist'}
            onPress={() => updateProfile('psychologist')}
          />
          <Button
            text="Paciente"
            style={styles.profileButton}
            active={profile === 'user'}
            onPress={() => updateProfile('user')}
          />
        </View>

        <View style={styles.formContainer}>
          {profile === 'user' && (
            <View style={styles.formRow}>
              <TextField
                label={strings.labels.email}
                placeholder={strings.placeholders.email}
                required={true}
                keyboardType="email-address"
                textContentType="emailAddress"
                error={errors?.email}
                onChangeText={(text) => setValue('email', text)}
                {...register('email', {
                  required: {
                    value: profile === 'user',
                    message: strings.errors.required
                  },
                  validate: (value) => isValidEmail(value) || strings.errors.email
                })}
              />
            </View>
          )}

          {profile !== 'user' && (
            <View style={styles.formRow}>
              <TextField
                label={strings.labels.document}
                placeholder={strings.placeholders.document}
                required={true}
                keyboardType="number-pad"
                maxLength={18}
                value={documentValue}
                error={errors?.document}
                onChangeText={(text) => {
                  setValue('document', documentMask(text));
                  setDocumentValue(documentMask(text));
                }}
                {...register('document', {
                  required: {
                    value: profile !== 'user',
                    message: strings.errors.required
                  }
                })}
              />
            </View>
          )}

          <View style={styles.formRow}>
            <TextField
              label={strings.labels.password}
              placeholder={strings.placeholders.password}
              required={true}
              autoComplete="off"
              textContentType="password"
              password={true}
              error={errors?.password}
              onChangeText={(text) => setValue('password', text)}
              {...register('password', {
                required: true && strings.errors.required,
                minLength: { value: 3, message: strings.errors.password }
              })}
            />
          </View>
        </View>

        <View>
          <Submit text="Entrar" onPress={handleSubmit(onSubmit)} loading={loading} />
        </View>
      </View>
    </View>
  );
};

export { LoginForm };
