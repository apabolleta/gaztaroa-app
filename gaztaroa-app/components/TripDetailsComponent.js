import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { baseUrl } from '../common/common';
import { connect } from 'react-redux';
import { postFavorite } from '../redux/ActionCreators';

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

const mapStateToProps = state => {
    return {
        trips: state.trips,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (tripId) => dispatch(postFavorite(tripId))
})

class TripDetails extends Component {
    markFavorite(tripId) {
        this.props.postFavorite(tripId);
    }

    render() {
        const { tripId } = this.props.route.params;
        return (
            <ScrollView>
                <RenderTrip
                    trip={this.props.trips.trips[+tripId]}
                    favorite={this.props.favorites.favorites.some(el => el === tripId)}
                    onPress={() => this.markFavorite(tripId)}
                />
                <RenderComments
                    comments={this.props.comments.comments.filter((comment) => comment.tripId === tripId)}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);