export const emailValidation = (email: string) => {
  return /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(email);
};

export const passwordLowerCaseValidation = (password: string) => {
  return /^(?=.*[a-z])/.test(password);
};

export const passwordUpperCaseValidation = (password: string) => {
  return /^(?=.*[A-Z])/.test(password);
};

export const passwordNumberValidation = (password: string) => {
  return /^(?=.*[0-9])/.test(password);
};

export const passwordLengthValidation = (password: string) => {
  return /^(?=.{6,})/.test(password);
};
