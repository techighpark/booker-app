import AuthLayout from "../components/AuthLayout";
import { loggedOutNavName } from "../navConstants";
import AccentBtn from "../components/AccentBtn";
import AccentLink from "../components/AccentLink";

export default function Welcome({ navigation }) {
  const goToSignUp = () => navigation.navigate(loggedOutNavName.signup);
  const goToLogIn = () => navigation.navigate(loggedOutNavName.login);
  return (
    <AuthLayout>
      <AccentBtn text={"Sign Up"} onPress={goToSignUp} disabled={false} />
      <AccentLink text={"Log In"} onPress={goToLogIn} />
    </AuthLayout>
  );
}
