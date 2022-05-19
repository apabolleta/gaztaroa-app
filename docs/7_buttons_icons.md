# Buttons and Icons

Basic interaction in an app is done with buttons. React Native provides a simple [Button](https://reactnative.dev/docs/button) component for such purpose. However, same functionality can be accomplished via [Icons](https://reactnativeelements.com/docs/components/icon) and associated event actions.

Button example:

```javascript
import { Button } from 'react-native';

<Button
    onPress={onPressLearnMore}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
/>

```

Icon example:

```javascript
import { Icon } from 'react-native-elements'

<Icon
    raised
    name='heartbeat'
    type='font-awesome'
    color='#f50'
    onPress={() => console.log('hello')} />

```

In the app, icons are used for "favorites" feature. When the icon first pressed, it changes the appearance to warn the user. The `onPress` event action changes the component state so it renders the updated icon. Additionally, when the button gets pressed the second time, it raises a warning message to console to indicate it was already pressed.

[Font Awesome](https://fontawesome.com/) is one of the most used Internet's icon library and toolkit and Icon component from React Native Elements integrates it.

## Notes

At this point "favorites" feature is implemented using a component's state, so it is not persisted for future sessions. Even more, it exists during the component lifecycle and lost when the component gets unmounted. It may be interesting to persist user-selected "favorites" and fetch them at app startup so the user can restore them.

React core Components such as Buttons and Icons can be custommized using inline stylesheet components passed to `prop` called `style`. This stylesheet usually match CSS. Example of use:

```javascript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.red}>just red</Text>
            <Text style={styles.bigBlue}>just bigBlue</Text>
            <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
            <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

export default LotsOfStyles;

```