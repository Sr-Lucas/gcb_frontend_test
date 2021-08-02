import { useField } from '@unform/core';
import React, { ChangeEventHandler, useEffect, useRef } from 'react';

import { FloatLabel, Error } from './styles';

interface Props {
  // eslint-disable-next-line react/require-default-props
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
}

// eslint-disable-next-line no-undef
type FloatInputProps = JSX.IntrinsicElements['input'] & Props;

const FloatInputComponent: React.FC<FloatInputProps> = ({
  label,
  name,
  ...rest
}: FloatInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      <FloatLabel
        active={(inputRef.current?.value?.length ?? 0) > 0}
        error={!!error}
      >
        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
        />
        <label htmlFor={name}>{label}</label>
      </FloatLabel>
      {error ?? <Error>{error}</Error>}
    </>
  );
};

export default FloatInputComponent;
