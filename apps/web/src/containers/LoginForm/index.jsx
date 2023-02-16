import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { isValidEmail, isValidDocument } from '@vccrn/validators';
import { ReactComponent as User } from '@vccrn/assets/user.svg';
import { ReactComponent as Psychologist } from '@vccrn/assets/psychologist.svg';

import { FormRow, FormField, FormSubmit } from '@/components';
import { StyledContainer } from '@/styled';
import {
  StyledSection,
  StyledProfile,
  StyledProfileItem,
  StyledFormContainer,
  StyledForgotPassword,
  StyledCreateAccount
} from './styled';
import { strings } from './strings';

const LoginForm = () => {
  const [profile, setProfile] = useState('user');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const updateProfile = (profile) => {
    reset();
    setProfile(profile);
  };

  const onSubmit = (data) => {
    console.log('submit form', data);
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
                  <Psychologist />
                  Psicólogo
                </StyledProfileItem>

                <StyledProfileItem
                  onClick={() => updateProfile('user')}
                  active={profile === 'user'}
                >
                  <User />
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
                {...register('document', {
                  required: {
                    value: profile !== 'user',
                    message: strings.errors.required
                  },
                  validate: (value) => isValidDocument(value) || strings.errors.document
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
            <FormSubmit text="Entrar" />
          </FormRow>
        </form>

        <StyledCreateAccount>
          Não é cadastrado? <a>Crie uma conta</a>
        </StyledCreateAccount>
      </StyledContainer>
    </StyledSection>
  );
};

export { LoginForm };
