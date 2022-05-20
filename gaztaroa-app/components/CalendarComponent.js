import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, View, FlatList } from 'react-native';
import { baseUrl } from '../common/common';
import { connect } from 'react-redux';
import { AppActivityIndicator } from './ActivityIndicatorComponent';

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

        var calendarBody;
        if (this.props.trips.isLoading) {
            calendarBody = <AppActivityIndicator />;
        } else if (this.props.trips.errmsg) {
            calendarBody = <View><Text>{this.props.trips.errmsg}</Text></View>;
        } else {
            calendarBody = <SafeAreaView>
                                <FlatList
                                    data={this.props.trips.trips}
                                    renderItem={renderCalendarItem}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </SafeAreaView>;
        }

        return (
            <>
                {calendarBody}
            </>
        );
    }
}

export default connect(mapStateToProps)(Calendar);
