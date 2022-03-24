import styled from "styled-components/native";
import { styledSize } from "../themeStyles";

export const BigTextInput = styled.TextInput`
  background-color: ${props => props.theme.primary.inputBgColor};
  color: ${props => props.theme.primary.fontColor};
  padding: ${styledSize.big_input_btn.padding};
  width: ${styledSize.big_input_btn.width};
  max-width: ${styledSize.big_input_btn.maxWidth};
  margin-bottom: ${props => (props.lastOne ? "20px" : "7px")};
`;
