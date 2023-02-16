import React, { useState } from 'react';

import { StyledInput, StyledShowPassword } from './styled';
import { strings } from './strings';

const Input = React.forwardRef(({ name, type = 'text', id, placeholder, ...props }, ref) => {
  const [inputType, setInputType] = useState(type);
  const [buttonTitle, setButtonTitle] = useState(strings.show);

  const showPassword = () => {
    if (inputType === 'password') {
      setInputType('text');
      setButtonTitle(strings.hide);
    } else {
      setInputType('password');
      setButtonTitle(strings.show);
    }
  };

  return (
    <>
      <StyledInput
        name={name}
        type={inputType}
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      {type === 'password' && (
        <StyledShowPassword
          type="button"
          onClick={() => showPassword()}
          title={buttonTitle}
          show={inputType === 'text'}
          data-testid={`${name}-button`}
        />
      )}
    </>
  );
});

export { Input };
