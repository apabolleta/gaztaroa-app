import React, { Component } from 'react';
import { Text, View, ScrollView, Modal, Pressable, StyleSheet } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { baseUrl, colorGaztaroaDark } from '../common/common';
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
                <View style={{
                    flex:1,
                    flexDirection:"row",
                    justifyContent:"center"
                }}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Trip already in favorites list') : props.onPressFavorite()}
                    />
                    <Icon
                        raised
                        reverse
                        name='pencil'
                        type='font-awesome'
                        color={colorGaztaroaDark}
                        onPress={() => props.onPressComment()}
                    />
                </View>
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

function RenderForm(props) {
    return(
        <Modal
            visible={props.isVisible}
        >
            <View
                style={{
                    padding: "5%",
                }}
            >
                <Rating
                    showRating
                    defaultRating={3}
                    fractions={0}
                />
                <Input
                    placeholder='Author'
                    leftIcon={{type: 'font-awesome', name:'user-o'}}
                />
                <Input
                    placeholder='Comment'
                    leftIcon={{type: 'font-awesome', name:'comment-o'}}
                />
                <Pressable
                    style={styles.button}
                    onPress={() => props.onSubmit()}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Submit
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => props.onCancel()}
                >
                    <Text
                        style={styles.buttonText}
                    >
                        Cancel
                    </Text>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 10
    },
    buttonText: {
        color: colorGaztaroaDark,
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: 18
    }
})

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
    state = {
        modalVisible: false
    };

    markFavorite(tripId) {
        this.props.postFavorite(tripId);
    }

    setModalVisible(isVisible) {
        this.setState({modalVisible: isVisible});
    }

    render() {
        const { tripId } = this.props.route.params;
        const { modalVisible } = this.state;
        return (
            <ScrollView>
                <RenderForm
                    isVisible={modalVisible}
                    onSubmit={() => {}}
                    onCancel={() => {}}
                />
                <RenderTrip
                    trip={this.props.trips.trips[+tripId]}
                    favorite={this.props.favorites.favorites.some(el => el === tripId)}
                    onPressFavorite={() => this.markFavorite(tripId)}
                    onPressComment={() => this.setModalVisible(true)}
                />
                <RenderComments
                    comments={this.props.comments.comments.filter((comment) => comment.tripId === tripId)}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);