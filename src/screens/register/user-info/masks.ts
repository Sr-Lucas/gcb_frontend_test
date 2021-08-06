import { MAX_CPF_LENGTH, MAX_DATE_LENGTH } from './constants';
import { validateCpf, validateDate } from './validations';

export function cpfMask(value: string): string {
  if (value.length > MAX_CPF_LENGTH) return value.slice(0, MAX_CPF_LENGTH);
  let formattedValue = value;
  if (!validateCpf(formattedValue)) {
    formattedValue = formattedValue.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
    formattedValue = formattedValue.replace(/(\d{3})(\d)/, '$1.$2');
    formattedValue = formattedValue.replace(/(\d{3})(\d{2})$/, '$1-$2');
  }
  return formattedValue;
}

export function dateMask(value: string): string {
  if (value.length > MAX_DATE_LENGTH) return value.slice(0, MAX_DATE_LENGTH);
  let formattedValue = value;
  if (!validateDate(formattedValue)) {
    formattedValue = formattedValue.replace(/\D/g, '');
    formattedValue = formattedValue.replace(/(\d{2})(\d)/, '$1/$2');
    formattedValue = formattedValue.replace(/\/(\d{2})(\d)/, '/$1/$2');
  }

  return formattedValue;
}
