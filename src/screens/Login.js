import { Text, View, TouchableOpacity } from "react-native";
import { loggedOutNavName } from "../navConstants";

export default function Login({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(loggedOutNavName.signup)}
      >
        <Text>go to signup</Text>
      </TouchableOpacity>
    </View>
  );
}
