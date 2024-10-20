export const validateName = (name: string) => {
  if (name.length < 2) {
    return "Please add at least 2 characters";
  }
  return "";
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validatePhone = (phone: string) => {
  const phoneRegex = /^\+\d{12,}$/;
  if (!phoneRegex.test(phone)) {
    return "Please enter a valid phone number";
  }
  return "";
};
