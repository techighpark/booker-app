import styled from "styled-components/native";
import { sharedColor, styledSize } from "../themeStyles";

const AccentLinkConainer = styled.TouchableOpacity`
  padding: ${styledSize.big_input_btn.padding};
  width: ${styledSize.big_input_btn.width};
  max-width: ${styledSize.big_input_btn.maxWidth};
`;

const AccentLinkText = styled.Text`
  color: ${sharedColor.accentColor.orange};
  font-weight: 500;
  text-align: center;
`;

export default function AccentLink({ text, onPress }) {
  return (
    <AccentLinkConainer onPress={onPress}>
      <AccentLinkText>{text}</AccentLinkText>
    </AccentLinkConainer>
  );
}
