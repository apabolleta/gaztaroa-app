import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Basecamp from './components/BasecampComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
            <Basecamp />
            <StatusBar style="auto" />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
