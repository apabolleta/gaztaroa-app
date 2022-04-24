import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import TripDetails from './TripDetailsComponent';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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

class Basecamp extends Component {
    render() {
        return (
            <NavigationContainer>
                <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
                    <CalendarNavigator />
                </View>
            </NavigationContainer>
        );
    }
}

export default Basecamp;