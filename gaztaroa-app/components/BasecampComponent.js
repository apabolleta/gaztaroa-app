import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import TripDetails from './TripDetailsComponent';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CalendarNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Calendar'
            screenOptions={{
                headerMode: 'float',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#015afc' },
                headerTitleStyle: { color: '#fff' },
            }}
        >
            <Stack.Screen
                name='Calendar'
                component={Calendar}
                options={{
                    title: 'Calendario Gaztaroa'
                }}
            />
            <Stack.Screen
                name='TripDetails'
                component={TripDetails}
                options={{
                    title: 'Trip Details'
                }}
            />
        </Stack.Navigator>
    );
}

function HomeNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#015afc' },
                headerTitleStyle: { color: '#fff' },
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    title: 'Campo Base'
                }}
            />
        </Stack.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c2d3da',
                },
            }}
        >
            <Drawer.Screen name='Home' component={HomeNavigator} />
            <Drawer.Screen name='Calendar' component={CalendarNavigator} />
        </Drawer.Navigator>
    );
}

class Basecamp extends Component {
    render() {
        return (
            <NavigationContainer>
                <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                    <DrawerNavigator />
                </View>
            </NavigationContainer>
        );
    }
}

export default Basecamp;