import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Basecamp from './components/BasecampComponent';

export default function App() {
  return (
    <View>
      <Basecamp />
      <StatusBar style="auto" />
    </View>
  );
}
