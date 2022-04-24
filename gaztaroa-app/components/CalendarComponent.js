import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { SafeAreaView, FlatList } from 'react-native';

function Calendar(props) {
    const renderCalendarItem = ({item, index}) => {
        return (
            <ListItem
                key={index}
                onPress={() => props.onPress(item.id)}
                bottomDivider>
                <Avatar source={require('./img/40Años.png')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <SafeAreaView>
            <FlatList
                data={props.trips}
                renderItem={renderCalendarItem}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

export default Calendar;
