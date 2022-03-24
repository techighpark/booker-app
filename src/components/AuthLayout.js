import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary.bgColor};
`;

const Logo = styled.Image`
  width: 150px;
  height: 200px;
`;

export default function AuthLayout({ children }) {
  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPress={Keyboard.dismiss}
      disabled={Platform.OS === "Web"}
    >
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "position" : "height"}
          keyboardVerticalOffset={10}
          contentContainerStyle={{ alignItems: "center" }}
          style={{
            width: "100%",
          }}
        >
          <Logo
            source={require("../../assets/logo.png")}
            resizeMode={"contain"}
          ></Logo>
          {children}
        </KeyboardAvoidingView>
      </Container>
    </TouchableWithoutFeedback>
  );
}
