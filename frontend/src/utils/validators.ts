export const validateName = (name: string) => {
  if (name.length < 2) {
    return "Please add at least 2 characters";
  }
  return "";
};