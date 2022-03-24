import AuthLayout from "../components/AuthLayout";
import { BigTextInput } from "../components/BigTextInput";
import { sharedColor } from "../themeStyles";
import { useRef } from "react";
import AccentBtn from "../components/AccentBtn";
import { Controller, useForm } from "react-hook-form";

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const passwordRef = useRef();
  const onNextFocus = ref => {
    ref?.current?.focus();
  };
  const onValidSubmit = data => {
    console.log(data);
  };
  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <AuthLayout>
      <Controller
        name="username"
        control={control}
        rules={{ minLength: { value: 5, message: "More than 5 chars" } }}
        render={({ field: { onChange, onBlur, value } }) => (
          <BigTextInput
            autoFocus
            placeholder="Username"
            placeholderTextColor={sharedColor.inputPHColor}
            autoCorrect={false}
            autoComplete={false}
            autoCapitalize={"none"}
            returnKeyType={"next"}
            onSubmitEditing={() => onNextFocus(passwordRef)}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          ></BigTextInput>
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <BigTextInput
            ref={passwordRef}
            placeholder="Password"
            placeholderTextColor={sharedColor.inputPHColor}
            autoCapitalize={"none"}
            returnKeyType={"done"}
            secureTextEntry={true}
            lastOne={true}
            onSubmitEditing={onValidSubmit}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          ></BigTextInput>
        )}
      />
      <AccentBtn
        text={"Log In"}
        onPress={handleSubmit(onValidSubmit)}
        disabled={!isValid}
      />
    </AuthLayout>
  );
}
