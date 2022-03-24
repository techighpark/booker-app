import { Text, TouchableOpacity, View } from "react-native";
import { loggedOutNavName } from "../navConstants";

export default function Signup({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate(loggedOutNavName.welcome)}
      >
        <Text>go to welcome</Text>
      </TouchableOpacity>
    </View>
  );
}
//
