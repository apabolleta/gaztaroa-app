import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { TRIPS } from '../common/trips';
import { COMMENTS } from '../common/comments';

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

function RenderComments(props) {
    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.review} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.day} </Text>
            </View>
        );
    };

    return (
        <Card>
            <Card.Title>Comentarios</Card.Title>
            <Card.Divider/>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}

class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS,
            comments: COMMENTS
        };
    }

    render() {
        const { tripId } = this.props.route.params;
        return (
            <ScrollView>
                <RenderTrip
                    trip={this.state.trips[+tripId]}
                />
                <RenderComments
                    comments={this.state.comments.filter((comment) => comment.tripId === tripId)}
                />
            </ScrollView>
        );
    }
}

export default TripDetails;
