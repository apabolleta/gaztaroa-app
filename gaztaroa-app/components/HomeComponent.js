import React, { Component } from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { baseUrl } from '../common/common';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        color: 'chocolate',
        fontSize: 34,
    }
});

function RenderItem(props) {
    const item = props.item;

    if (item != null) {
        return(
            <Card>
                <Card.Divider/>
                <Card.Image source={{uri: baseUrl + item.img}}>
                    <Card.Title style={styles.title}>{item.name}</Card.Title>
                </Card.Image>
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

const mapStateToProps = state => {
    return {
        trips: state.trips,
        headers: state.headers,
        activities: state.activities
    }
}

class Home extends Component {
    render() {
        return(
            <ScrollView>
                <RenderItem item={this.props.headers.headers.filter((header) => header.featured)[0]} />
                <RenderItem item={this.props.trips.trips.filter((trip) => trip.featured)[0]} />
                <RenderItem item={this.props.activities.activities.filter((activity) => activity.featured)[0]} />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(Home);
