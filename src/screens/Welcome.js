import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import { loggedOutNavName } from "../navConstants";
import styled from "styled-components/native";

const Container = styled.View`
  /* flex: 1; */
  height: 100px;
  padding: 20px;
  background-color: ${props => props.theme.bgColor};
`;
const SText = styled.Text`
  color: #7c4dff;
`;

export default function Welcome({ navigation }) {
  return (
    <Container>
      <TouchableOpacity
        onPress={() => navigation.navigate(loggedOutNavName.login)}
      >
        <SText>go to login</SText>
      </TouchableOpacity>
      <View style={{ backgroundColor: "#7C4DFF", flex: "1" }} />
      <View style={{ backgroundColor: "#424242", flex: "1" }} />
      <View style={{ backgroundColor: "#616161", flex: "1" }} />
    </Container>
  );
}
