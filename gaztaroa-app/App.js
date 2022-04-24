import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Basecamp from './components/BasecampComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <Basecamp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
