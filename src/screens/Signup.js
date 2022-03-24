import { useRef } from "react";
import AccentBtn from "../components/AccentBtn";
import AuthLayout from "../components/AuthLayout";
import { BigTextInput } from "../components/BigTextInput";
import { sharedColor } from "../themeStyles";

export default function Signup({ navigation }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const onNextFocus = ref => {
    ref?.current?.focus();
  };
  const onSignUpSubmit = () => {
    console.log("Submit");
  };
  return (
    <AuthLayout>
      <BigTextInput
        autoFocus
        placeholder="Username"
        placeholderTextColor={sharedColor.inputPHColor}
        autoCorrect={false}
        autoComplete={false}
        autoCapitalize={"none"}
        returnKeyType={"next"}
        onSubmitEditing={() => onNextFocus(emailRef)}
      ></BigTextInput>
      <BigTextInput
        ref={emailRef}
        placeholder="Email"
        placeholderTextColor={sharedColor.inputPHColor}
        autoCapitalize={"none"}
        returnKeyType={"next"}
        keyboardType={"email-address"}
        onSubmitEditing={() => onNextFocus(passwordRef)}
      ></BigTextInput>
      <BigTextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={sharedColor.inputPHColor}
        autoCapitalize={"none"}
        returnKeyType={"done"}
        secureTextEntry={true}
        lastOne={true}
        onSubmitEditing={onSignUpSubmit}
      ></BigTextInput>
      <AccentBtn text={"Sign Up"} onPress={onSignUpSubmit} disabled={false} />
    </AuthLayout>
  );
}
//
