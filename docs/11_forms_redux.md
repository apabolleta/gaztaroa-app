# Forms and Modals with Redux

Forms allow users to interact with the app. For this concrete example, a form is created for posting comments on trips. Forms in React are implemented in two ways: view and logic.

As a view, form elements are rendered in order to introduce data to the app. The logic is then implemented to parse this data and update the Redux repository. Forms don't exist natively on React Native, so modals and Input/TextInput components are used for such purpose.