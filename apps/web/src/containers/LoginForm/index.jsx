import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { isValidEmail, isValidDocument } from '@vccrn/validators';
import { ReactComponent as User } from '@vccrn/assets/user.svg';
import { ReactComponent as Psychologist } from '@vccrn/assets/psychologist.svg';

import { documentMask } from '@/utils';
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
  const [loading, setLoading] = useState(false);
  const [documentValue, setDocumentValue] = useState('');

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

  const onSubmit = (data) => {
    setLoading(true);

    try {
      fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((response) => {
          const welcome = response.type === 'pacient' ? 'Bem-vindo,' : 'Bem-vindo, Dr.';

          setLoading(false);
          reset();
          alert(`${welcome} ${response.firstName}`);
        });
    } catch (err) {
      console.error(err);
      setLoading(false);
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
            <FormSubmit text="Entrar" isLoading={loading} />
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
