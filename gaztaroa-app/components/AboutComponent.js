import React, { Component } from 'react';
import { Card, ListItem, Avatar } from 'react-native-elements';
import { ScrollView, Text } from 'react-native';
import { baseUrl } from '../common/common';
import { connect } from 'react-redux';

function History() {
    return (
        <Card>
            <Card.Title>Un poquito de historia</Card.Title>
            <Card.Divider/>
            <Text style={{margin: 20}}>
                El nacimiento del club de montaña Gaztaroa se remonta a la
                primavera de 1976 cuando jóvenes aficionados a la montaña y
                pertenecientes a un club juvenil decidieron crear la sección
                montañera de dicho club. Fueron unos comienzos duros debido sobre
                todo a la situación política de entonces. Gracias al esfuerzo
                económico de sus socios y socias se logró alquilar una bajera.
                Gaztaroa ya tenía su sede social.{'\n\n'}
                Desde aquí queremos hacer llegar nuestro agradecimiento a todos
                los montañeros y montañeras que alguna vez habéis pasado por el
                club aportando vuestro granito de arena.{'\n\n'}
                Gracias!
            </Text>
        </Card>
    );
}

const mapStateToProps = state => {
    return {
        activities: state.activities
    }
}

class About extends Component {
    render() {
        const renderActivityItem = (item, index) => {
            return (
                <ListItem
                    key={index}
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
            <ScrollView>
                <History />
                <Card>
                    <Card.Title>Actividades y recursos</Card.Title>
                    <Card.Divider/>
                    {this.props.activities.activities.map((item, index) => renderActivityItem(item, index))}
                </Card>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps)(About);
