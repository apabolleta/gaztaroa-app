import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import { TRIPS } from '../common/trips';
import TripDetails from './TripDetailsComponent';
import { View } from 'react-native';

class Basecamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS,
            selectTrip: null
        };
    }

    onSelectionTrip(tripId) {
        this.setState({selectTrip: tripId});
    }

    render() {
        return (
            <View>
                <TripDetails trip={this.state.trips.filter((trip) => trip.id === this.state.selectTrip)[0]} />
                <Calendar trips={this.state.trips} onPress={(tripId) => this.onSelectionTrip(tripId)} />
            </View>
        );
    }
}

export default Basecamp;