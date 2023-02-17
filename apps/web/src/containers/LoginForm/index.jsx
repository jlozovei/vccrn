import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { strings } from '@vccrn/strings';
import { isValidEmail, isValidDocument } from '@vccrn/validators';
import userIcon from '@vccrn/assets/user.svg';
import psychologistIcon from '@vccrn/assets/psychologist.svg';

import { login } from '@/services';
import { documentMask } from '@/utils';
import { FormRow, FormField, FormSubmit } from '@/components';
import { StyledContainer } from '@/styled';
import {
  StyledSection,
  StyledProfile,
  StyledProfileItem,
  StyledFormContainer,
  StyledForgotPassword,
  StyledCreateAccount,
  StyledUserInfo
} from './styled';

const LoginForm = () => {
  const [profile, setProfile] = useState('user');
  const [loading, setLoading] = useState(false);
  const [documentValue, setDocumentValue] = useState('');
  const [userLogged, setUserLogged] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    onChange,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      document: '',
      password: ''
    }
  });

  const updateProfile = (profile) => {
    reset();
    setProfile(profile);
  };

  const onSubmit = async (credentials) => {
    setLoading(true);

    try {
      const response = await login(credentials);

      if (response?.data) {
        setLoading(false);
        setUserLogged(response.data);
        reset();
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
      setUserLogged(null);
    }
  };

  return (
    <StyledSection>
      <StyledContainer>
        <h2>Faça seu login</h2>

        <form onSubmit={handleSubmit(onSubmit)} data-testid="login-form">
          <StyledFormContainer>
            <FormRow>
              <StyledProfile data-testid="login-profile">
                <StyledProfileItem
                  onClick={() => updateProfile('psychologist')}
                  active={profile !== 'user'}
                >
                  <img src={psychologistIcon} alt="Psicólogo" />
                  Psicólogo
                </StyledProfileItem>

                <StyledProfileItem
                  onClick={() => updateProfile('user')}
                  active={profile === 'user'}
                >
                  <img src={userIcon} alt="Paciente" />
                  Paciente
                </StyledProfileItem>
              </StyledProfile>
            </FormRow>

            {profile === 'user' && (
              <FormField
                label="Email"
                name="email"
                placeholder={strings.placeholders.email}
                type="text"
                aria-invalid={errors.email ? 'true' : 'false'}
                error={errors.email?.message}
                required={profile === 'user'}
                {...register('email', {
                  required: {
                    value: profile === 'user',
                    message: strings.errors.required
                  },
                  validate: (value) => isValidEmail(value) || strings.errors.email
                })}
              />
            )}

            {profile === 'psychologist' && (
              <FormField
                label="CPF/CNPJ"
                name="document"
                placeholder={strings.placeholders.document}
                type="text"
                aria-invalid={errors.document ? 'true' : 'false'}
                error={errors.document?.message}
                required={profile !== 'user'}
                inputmode="numeric"
                maxLength={18}
                value={documentValue}
                {...register('document', {
                  maxLength: {
                    value: 18,
                    message: strings.errors.document
                  },
                  required: {
                    value: profile !== 'user',
                    message: strings.errors.required
                  },
                  validate: (value) => isValidDocument(value) || strings.errors.document,
                  onChange: (event) => setDocumentValue(documentMask(event.target.value))
                })}
              />
            )}

            <FormField
              label="Senha"
              name="password"
              placeholder={strings.placeholders.password}
              type="password"
              aria-invalid={errors.password ? 'true' : 'false'}
              error={errors.password?.message}
              required={true}
              {...register('password', {
                required: true && strings.errors.required,
                minLength: { value: 3, message: strings.errors.password }
              })}
            />

            <StyledForgotPassword>
              <a>Esqueci minha senha!</a>
            </StyledForgotPassword>
          </StyledFormContainer>
          <FormRow>
            <FormSubmit text={strings.labels.login} isLoading={loading} />
          </FormRow>
        </form>

        <StyledCreateAccount>
          Não é cadastrado? <a>Crie uma conta</a>
        </StyledCreateAccount>

        {userLogged && (
          <StyledUserInfo data-testid="user-info">
            Bem-vindo, {userLogged.firstName}.{' '}
            <a onClick={() => setUserLogged(null)}>{strings.labels.logout}</a>
          </StyledUserInfo>
        )}
      </StyledContainer>
    </StyledSection>
  );
};

export { LoginForm };
