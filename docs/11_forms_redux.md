# Forms and Modals with Redux

Forms allow users to interact with the app. For this concrete example, a form is created for posting comments and ratings on trips. Forms in React are implemented in two ways: view and logic.

As a view, form components are rendered in order to introduce data to the app. The logic is then implemented to parse this data and update the Redux repository when events on these components are fired. Forms don't exist natively on React Native, so Modals and Input/TextInput components are used for such purpose in addition to native features, such as `props`, `state` and `events`.

## Form View

For rendering the form component, a [Modal](https://reactnative.dev/docs/modal) from React Native is used as a container, along with [Input](https://reactnativeelements.com/docs/2.3.2/input) components from React Native Elements to get user data. The `RenderForm` component renders the form component according to `props`.

```javascript
function RenderForm(props) {
    return(
        <Modal
            visible={props.visible}
        >
            <View>
                <Rating/>
                ...
                <Input/>
                ...
                <Pressable
                    onPress={() => props.onSubmit()}
                />
                <Pressable
                    onPress={() => props.onCancel()}
                />
            </View>
        </Modal>
    );
}

```

## Form Logic

As a Modal, the value of the visibility property is passed to the `RenderForm` component in `props` and saved in the `state` of the parent component `TripDetails`. A method in the parent component toggles the value of the visibility in order to show or hiden the form. In addition, values from the form inputs are saved in the `state`. Event callbacks are used to update the `state` of the parent component and update the Redux repository on form submit.

```javascript
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

    toggleModal() {
        ...
    }

    setComment = (comment) => {
        ...
    }

    handleComment(tripId) {
        ...
    }

    resetForm() {
        ...
    }

    render() {
        const { tripId } = this.props.route.params;
        const { showModal } = this.state;

        return (
            <ScrollView>
                <RenderForm
                    visible={showModal}
                    onChange={...}
                    onSubmit={() => {...}}
                    onCancel={() => {...}}
                />
                ...
                <RenderTrip/>
                ...
                <RenderComments/>
            </ScrollView>
        );
    }
}

```
