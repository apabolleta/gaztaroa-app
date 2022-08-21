import React, { Component } from 'react';
import { Text, View, ScrollView, Modal, Pressable, StyleSheet } from 'react-native';
import { Card, Icon, Rating, Input } from 'react-native-elements';
import { baseUrl, colorGaztaroaDark } from '../common/common';
import { connect } from 'react-redux';
import { postComment, postFavorite } from '../redux/ActionCreators';

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
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
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
            visible={props.visible}
        >
            <View
                style={{
                    padding: "5%",
                }}
            >
                <Rating
                    showRating
                    ratingCount={5}
                    startingValue={3}
                    fractions={0}
                    onFinishRating={(rating) => props.onChange({rating: rating})}
                />
                <Input
                    placeholder='Author'
                    leftIcon={{type: 'font-awesome', name:'user-o'}}
                    onChangeText={(author) => props.onChange({author: author})}
                />
                <Input
                    placeholder='Comment'
                    leftIcon={{type: 'font-awesome', name:'comment-o'}}
                    onChangeText={(comment) => props.onChange({comment: comment})}
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
    postFavorite: (tripId) => dispatch(postFavorite(tripId)),
    postComment: (comment) => dispatch(postComment(comment))
})

class TripDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rating: 3,
            author: '',
            comment: ''
        }
    }

    markFavorite(tripId) {
        this.props.postFavorite(tripId);
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    setComment = (comment) => {
        const {rating, author, comment: strComment} = comment;

        if (rating) this.setState({rating: rating});
        if (author) this.setState({author: author});
        if (strComment) this.setState({comment: strComment});
    }

    handleComment(tripId) {
        this.props.postComment({
            tripId: tripId,
            rating: this.state.rating,
            author: this.state.author,
            comment: this.state.comment,
            day: (new Date()).toISOString()
        });
    }

    resetForm() {
        this.setState({
            rating: 3,
            author: '',
            comment: ''
        });
    }

    render() {
        const { tripId } = this.props.route.params;
        const { showModal } = this.state;

        return (
            <ScrollView>
                <RenderForm
                    visible={showModal}
                    onChange={this.setComment}
                    onSubmit={() => {
                        this.handleComment(tripId);
                        this.toggleModal();
                    }}
                    onCancel={() => {
                        this.resetForm();
                        this.toggleModal()
                    }}
                />
                <RenderTrip
                    trip={this.props.trips.trips[+tripId]}
                    favorite={this.props.favorites.favorites.some(el => el === tripId)}
                    onPressFavorite={() => this.markFavorite(tripId)}
                    onPressComment={() => this.toggleModal()}
                />
                <RenderComments
                    comments={this.props.comments.comments.filter((comment) => comment.tripId === tripId)}
                />
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetails);