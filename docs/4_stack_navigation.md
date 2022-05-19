# Stack Navigation

A basic feature on native apps is the ability to navigate through screens. [Navigation](https://reactnative.dev/docs/navigation) provides an interface to move on different views and components with integrated menus and links. React Native implements this functionality via [Stack Navigator](https://reactnavigation.org/docs/stack-navigator/), [Tab Navigator](https://reactnavigation.org/docs/tab-based-navigation/) or [Drawer Navigator](https://reactnavigation.org/docs/drawer-based-navigation/).

## Basic Navigation example

To configure navigation, Stack Navigation component from React Native must be used in stack scheme, through a hierarchy between different views of the application. Next, an example is shown:

```javascript
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    );
};

```

The example shows 2 screens (`Home` and `Profile`) using `Stack.Screen` components inside a `Stack.Navigator` component. In addition, we need to wrap the whole app in `NavigationContainer`. Options can be passed to screens in the `options` `prop` of component `Stack.Screen`. Each screen also takes a `component` `prop` that is a React component to render. This components receive a `prop` called `navigation` which has various methods to link to other screens. As an example:

```javascript
const HomeScreen = ({ navigation }) => {
    return (
        <Button
            title="Go to Jane's profile"
            onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
            }
        />
    );
};

const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
};

```

This navigation scheme allows to design different levels of views to organize the app into, while providing modularity to the code. Additionally, many navigator components can be nested in order to build complex navigation schemes. In the current sample application, Drawer Navigator is used on top of the app, while Stack Navigator is used deeper in the hierarchy to switch between specific components.