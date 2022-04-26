import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import TripDetails from './TripDetailsComponent';
import { View, StyleSheet, Image, Text } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeComponent';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

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

function AboutNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='About'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#015afc' },
                headerTitleStyle: { color: '#fff' },
            }}
        >
            <Stack.Screen
                name='About'
                component={About}
                options={{
                    title: 'Quiénes somos'
                }}
            />
        </Stack.Navigator>
    );
}

function ContactNavigator() {
    return (
        <Stack.Navigator
            initialRouteName='Contact'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: '#015afc' },
                headerTitleStyle: { color: '#fff' },
            }}
        >
            <Stack.Screen
                name='Contact'
                component={Contact}
                options={{
                    title: 'Contacto'
                }}
            />
        </Stack.Navigator>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <SafeAreaView style={styles.container} forceInset={{top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex:1}}>
                        <Image source={require('./img/logo.png')} style={styles.drawerImage} />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
                    </View>
                </View>
                <DrawerItemList {...props} />
            </SafeAreaView>
        </DrawerContentScrollView>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Home'
            drawerContent={props => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    backgroundColor: '#c2d3da',
                },
            }}
        >
            <Drawer.Screen name='Campo base' component={HomeNavigator}
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='home'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    )
                }}
            />
            <Drawer.Screen name='Quiénes somos' component={AboutNavigator}
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='info-circle'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    )
                }}
            />
            <Drawer.Screen name='Calendario' component={CalendarNavigator}
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    )
                }}
            />
            <Drawer.Screen name='Contacto' component={ContactNavigator}
                options={{
                    drawerIcon: ({tintColor}) => (
                        <Icon
                            name='address-card'
                            type='font-awesome'
                            size={24}
                            color={tintColor}
                        />
                    )
                }}
            />
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#015afc',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default Basecamp;