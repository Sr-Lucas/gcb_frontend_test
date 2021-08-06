export const cpfRegex = /^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/;
export const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

export const validateCpf = (value: string) => {
  return value.match(cpfRegex);
};

export const validateDate = (value: string) => {
  return value.match(dateRegex);
};
