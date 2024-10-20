import StepContainer from "../../components/StepContainer";
import useProfileStore from "../../stores/useProfileStore";

const Salary = () => {
  const { profile } = useProfileStore();

  const salaryOptions = [
    "0 - 1.000",
    "1.000 - 2.000",
    "2.000 - 3.000",
    "3.000 - 4.000",
    "More than 4.000",
  ];

  const validateSalary = (selectedSalary: string) => {
    return selectedSalary ? "" : "Please select your income range";
  };

  return (
    <StepContainer
      keyProp="income"
      title="Please indicate your income range"
      defaultValue={profile.income}
      inputType="radio"
      options={salaryOptions}
      validationFn={validateSalary}
      nextPath="/profile/summary/"
    />
  );
};

export default Salary;
