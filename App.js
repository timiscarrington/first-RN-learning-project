
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dumText}>Hello World</Text>
      <Text style={styles.dumText}>Another piece of Text</Text>
      <Button title='Stinkfist'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dumText: {
    margin: 16,
    borderWidth:2,
    borderColor: 'blue',
    padding: 16,
  }
});
