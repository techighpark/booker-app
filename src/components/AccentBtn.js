import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { sharedColor, styledSize } from "../themeStyles";

const AccentBtnContainer = styled.TouchableOpacity`
  background-color: ${sharedColor.accentColor.orange};
  padding: ${styledSize.big_input_btn.padding};
  width: ${styledSize.big_input_btn.width};
  max-width: ${styledSize.big_input_btn.maxWidth};
  opacity: ${props => (props.disabled ? "0.5" : "1")};
`;

const AccentBtnText = styled.Text`
  color: ${sharedColor.accentColor.white};
  font-weight: 500;
  text-align: center;
`;

export default function AccentBtn({ text, onPress, disabled, loading }) {
  return (
    <AccentBtnContainer onPress={onPress} disabled={disabled}>
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <AccentBtnText>{text}</AccentBtnText>
      )}
    </AccentBtnContainer>
  );
}
