import StepContainer from "../../components/StepContainer";
import useProfileStore from "../../stores/useProfileStore";
import { validatePhone } from "../../utils/validators";

const PhoneNumber = () => {
  const { profile } = useProfileStore();
  return (
    <StepContainer
      keyProp="phone"
      title="Please enter your phone number"
      defaultValue={profile.phone}
      placeholder="+491234567890"
      inputType="tel"
      validationFn={validatePhone}
      nextPath="/profile/income/"
    />
  );
};

export default PhoneNumber;
