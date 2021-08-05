/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core';

import { InputWrapper } from './styles';

interface Props {
  name: string;
  label: string;
  // eslint-disable-next-line react/require-default-props
  inputMask?: Function | undefined;
}

// eslint-disable-next-line no-undef
type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({
  name,
  label,
  inputMask = () => {},
  ...rest
}: InputProps) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  const [mask, setMask] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleMask(e: React.ChangeEvent<HTMLInputElement>) {
    const maskedValue = inputMask(e.target.value);
    return setMask(maskedValue);
  }

  return (
    <InputWrapper error={!!error}>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        value={mask}
        onChange={(e) => {
          if (rest.onChange) rest.onChange(e);
          handleMask(e);
        }}
        {...rest}
      />

      {error && <span style={{ color: '#f00' }}>{error}</span>}
    </InputWrapper>
  );
};

export default Input;
