import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderTrip(props) {
    const trip = props.trip;

    if (trip != null) {
        return (
            <Card>
                <Card.Title>{trip.name}</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('./img/40Años.png')}></Card.Image>
                <Text style={{margin: 20}}>
                    {trip.description}
                </Text>
            </Card>
        );
    } else {
        return (
            <View></View>
        );
    }
}

function TripDetails(props) {
    return (
        <RenderTrip trip={props.trip} />
    );
}

export default TripDetails;
