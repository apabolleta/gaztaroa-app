# Activity Indicator

User Experience (UX) design is the process to create apps that provide meaningful and relevant experiences to users. In this context, loaders are attached to the loading process of the app in order to improve the UX.

![activity-indicator](assets/activity-indicator.gif)

## React Native ActivityIndicator

React Native provides `ActivityIndicator` component that loads a loader with custom format into the app. First, we define our custom `ActivityIndicator` component:

```javascript
import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { colorGaztaroaDark } from '../common/common';

export const AppActivityIndicator = () => {
    return (
        <View style={styles.indicatorView}>
            <ActivityIndicator size='large' color={colorGaztaroaDark} />
            <Text style={styles.indicatorText}>En proceso . . .</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    indicatorView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    indicatorText: {
        color: colorGaztaroaDark,
        fontSize: 14,
        fontWeight: 'bold'
    }
});

```

Loader components will be used when the app performs long queries or time-consuming operations, such as database queries. The app retrieves the state of this queries as boolean values in the *Store*. When this value `isLoading` is set to `true` and untill set to `false`, the app must show a loader component. For this operation, `RenderItem` function is provided:

```javascript
function RenderItem(props) {
    if (props.isLoading) {
        return(
            <AppActivityIndicator />
        );
    } else if (props.errmsg) {
        return(
            <View>
                <Text>{props.errmsg}</Text>
            </View>
        );
    } else {
        const item = props.item;

        if (item != null) {
            return(
                <>...</>
            );
        } else {
            return(<View></View>);
        }
    }
}

```
