import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { TRIPS } from '../common/trips';
import { COMMENTS } from '../common/comments';
import { baseUrl } from '../common/common';

function RenderTrip(props) {
    const trip = props.trip;

    if (trip != null) {
        return (
            <Card>
                <Card.Title>{trip.name}</Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: baseUrl + trip.img}}></Card.Image>
                <Text style={{margin: 20}}>
                    {trip.description}
                </Text>
                <Icon
                    raised
                    reverse
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
                />
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

    const renderCommentItem = (item, index) => {
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
            {comments.map((item, index) => renderCommentItem(item, index))}
        </Card>
    );
}

class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS,
            comments: COMMENTS,
            favorites: []
        };
    }

    markFavorite(tripId) {
        this.setState({favorites: this.state.favorites.concat(tripId)});
    }

    render() {
        const { tripId } = this.props.route.params;
        return (
            <ScrollView>
                <RenderTrip
                    trip={this.state.trips[+tripId]}
                    favorite={this.state.favorites.some(el => el === tripId)}
                    onPress={() => this.markFavorite(tripId)}
                />
                <RenderComments
                    comments={this.state.comments.filter((comment) => comment.tripId === tripId)}
                />
            </ScrollView>
        );
    }
}

export default TripDetails;
