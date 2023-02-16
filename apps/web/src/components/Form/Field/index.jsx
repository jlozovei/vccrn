import React from 'react';

import { Label, Input } from '../';
import { StyledField, StyledError } from './styled';

const Field = React.forwardRef(
  ({ type, label, name, placeholder, errors, required, ...props }, ref) => {
    const labelText = `${label}${required ? '*' : ''}`;

    return (
      <StyledField>
        <Label htmlFor={name} text={labelText} />
        <Input id={name} name={name} type={type} placeholder={placeholder} ref={ref} {...props} />
        {errors && <StyledError>{errors}</StyledError>}
      </StyledField>
    );
  }
);

export { Field };
