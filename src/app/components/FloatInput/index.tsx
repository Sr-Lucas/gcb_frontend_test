import React, { ChangeEventHandler } from 'react';

import { FloatLabel, FloatLabelInput } from './styles';

interface FloatInputProps {
  value: string;
  // eslint-disable-next-line react/require-default-props
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelText: string;
}

const FloatInputComponent: React.FC<FloatInputProps> = ({
  value,
  onChange,
  labelText,
}: FloatInputProps) => {
  return (
    <FloatLabel active={value?.length > 0}>
      <FloatLabelInput id="floatLabel" value={value} onChange={onChange} />
      <label htmlFor="floatLabel">{labelText}</label>
    </FloatLabel>
  );
};

export default FloatInputComponent;
