
import StepContainer from "../../components/StepContainer";
import useProfileStore from "../../stores/useProfileStore";
import { validateEmail } from "../../utils/validators";

const Email = () => {
  const { profile } = useProfileStore();
  return (
    <StepContainer
      keyProp="email"
      title="Please enter your email address"
      defaultValue={profile.email}
      placeholder="email"
      inputType="email"
      validationFn={validateEmail}
      nextPath="/profile/phone/"
    />
  );
};

export default Email;
