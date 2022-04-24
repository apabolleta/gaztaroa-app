import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TRIPS } from '../common/trips';

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

class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS
        };
    }

    render() {
        const { tripId } = this.props.route.params;
        return (
            <RenderTrip
                trip={this.state.trips[+tripId]}
            />
        );
    }
}

export default TripDetails;
