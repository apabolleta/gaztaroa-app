import React, { Component } from 'react';
import Calendar from './CalendarComponent';
import { TRIPS } from '../common/trips';

class Basecamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS
        };
    }

    render() {
        return (
            <Calendar trips={this.state.trips} />
        );
    }
}

export default Basecamp;