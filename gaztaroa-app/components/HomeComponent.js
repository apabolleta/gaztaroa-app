import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { TRIPS } from '../common/trips';
import { HEADERS } from '../common/headers';
import { ACTIVITIES } from '../common/activities';

function RenderItem(props) {
    const item = props.item;

    if (item != null) {
        return(
            <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider/>
                <Card.Image source={require('./img/40Años.png')}></Card.Image>
                <Text style={{margin: 20}}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
          trips: TRIPS,
          headers: HEADERS,
          activities: ACTIVITIES
        };
    }

    render() {
        return(
            <ScrollView>
                <RenderItem item={this.state.headers.filter((header) => header.featured)[0]} />
                <RenderItem item={this.state.trips.filter((trip) => trip.featured)[0]} />
                <RenderItem item={this.state.activities.filter((activity) => activity.featured)[0]} />
            </ScrollView>
        );
    }
}

export default Home;
