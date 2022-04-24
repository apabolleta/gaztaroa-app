import React, { Component } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, FlatList } from 'react-native';
import { TRIPS } from '../common/trips';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trips: TRIPS
        };
    }

    render() {
        const { navigate } = this.props.navigation;

        const renderCalendarItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    onPress={() => navigate('TripDetails', {tripId: item.id})}
                    bottomDivider
                >
                    <Avatar source={require('./img/40Años.png')} />
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
                    data={this.state.trips}
                    renderItem={renderCalendarItem}
                    keyExtractor={item => item.id.toString()}
                />
            </SafeAreaView>
        );
    }
}

export default Calendar;
