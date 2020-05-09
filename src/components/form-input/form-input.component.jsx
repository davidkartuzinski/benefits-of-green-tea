import React from 'react';

import {
  FormGroupContainer,
  FormInputField,
  FormInputLabel,
} from './form-input.styles.jsx';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormGroupContainer>
    <FormInputField onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        htmlFor={otherProps.name}
        className={`${otherProps.value.length ? 'shrink' : ''} `}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
