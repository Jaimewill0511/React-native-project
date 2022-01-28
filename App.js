import { StatusBar, View } from "react-native";
import Box from "./Box";
import styles from "./styles";
import Row from "./Row";
import Column from "./Column";

// const boxes = new Array(10).fill(null).map((v, i) => i + 1);
// let h = 0,
//   boxes = [];
// for (let i = 1; i < 11; i++) {
//   boxes[h] = i;
//   h++;
// }

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {/* {boxes.map((i) => (
        <Box key={i}>#{i}</Box>
      ))} */}
      <Row>
        <Column>
          <Box>#1</Box>
          <Box>#2</Box>
        </Column>
        <Column>
          <Box>#3</Box>
          <Box>#4</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#5</Box>
          <Box>#6</Box>
        </Column>
        <Column>
          <Box>#7</Box>
          <Box>#8</Box>
        </Column>
      </Row>
      <Row>
        <Column>
          <Box>#9</Box>
          <Box>#10</Box>
        </Column>
        <Column>
          <Box>#11</Box>
          <Box>#12</Box>
        </Column>
      </Row>
    </View>
  );
}
