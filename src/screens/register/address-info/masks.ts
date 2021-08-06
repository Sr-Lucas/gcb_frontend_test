import { MAX_CEP_LENGTH } from './constants';
import { validateCep } from './validations';

export function cepMask(value: string): string {
  if (value.length > MAX_CEP_LENGTH) return value.slice(0, MAX_CEP_LENGTH);
  let formattedValue = value;
  if (!validateCep(formattedValue)) {
    formattedValue = formattedValue.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{5})(\d)/, '$1-$2');
  }

  return formattedValue;
}
