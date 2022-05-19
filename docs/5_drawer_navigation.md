# Drawer Navigation

As presented in the previous section, navigation can also be implemented via [Drawer Navigator](https://reactnavigation.org/docs/drawer-based-navigation/) component from React Native. This is a left (or right) sided drawer for navigating between screens. It can be dynamically opened or closed.

In the current project, this Drawer Navigator is used as top level navigator for app wide navigation. It allows accessing main screen views from all over the application, as it is located on the left side of the screen. Basic Drawer Navigator example:

```javascript
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

```