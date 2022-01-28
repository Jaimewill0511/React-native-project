import { View } from "react-native";
import Box from "./Box";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Box>#1</Box>
      <Box>#2</Box>
      {/* <Box>#3</Box> */}
    </View>
  );
}
