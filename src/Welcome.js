import { Text, View, Image, StyleSheet, Button } from "react-native";
import image from "./assets/login.png";
function WelcomeScreen() {
  return (
    <View>
      <Text>Welcome Screen</Text>
      <Image source={image} style={styles.image}></Image>
      <Button
        title="Next"
        onPress={() => navigation.navigate("OnBoarding")}
      >
        <Text>Button</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
  }
});
export default WelcomeScreen;