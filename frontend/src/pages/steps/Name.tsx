import StepContainer from "../../components/StepContainer";
import useProfileStore from "../../stores/useProfileStore";
import { validateName } from "../../utils/validators";

const Name = () => {
  const { profile } = useProfileStore();
  return (
    <StepContainer
      keyProp="name"
      title="Please enter your full name"
      defaultValue={profile.name}
      placeholder="John Doe"
      inputType="text"
      validationFn={validateName}
      nextPath="/profile/email/"
    />
  );
};

export default Name;
