import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, FlatList } from 'react-native';
import { baseUrl } from '../common/common';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        trips: state.trips
    }
}

class Calendar extends Component {
    render() {
        const { navigate } = this.props.navigation;

        const renderCalendarItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    onPress={() => navigate('TripDetails', {tripId: item.id})}
                    bottomDivider
                >
                    <Avatar source={{uri: baseUrl + item.img}} />
                    <ListItem.Content>
                        <ListItem.Title>{item.name}</ListItem.Title>
                        <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            );
        };

        return (
            <SafeAreaView>
                <FlatList
                    data={this.props.trips.trips}
                    renderItem={renderCalendarItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps)(Calendar);
