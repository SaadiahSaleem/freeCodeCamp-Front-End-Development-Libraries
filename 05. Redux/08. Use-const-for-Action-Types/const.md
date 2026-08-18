# Use const for Action Types

A common practice when working with Redux is to assign action types as read-only constants, then reference these constants wherever they are used. You can refactor the code you're working with to write the action types as `const` declarations.

Declare `LOGIN` and `LOGOUT` as `const` values and assign them to the strings `'LOGIN'` and `'LOGOUT'`, respectively. Then, edit the `authReducer()` and the action creators to reference these constants instead of string values.

**Note:** It's generally a convention to write constants in all uppercase, and this is standard practice in Redux as well.

### Instructions:
1. Calling the function `loginUser` should return an object with `type` property set to the string `LOGIN`.
2. Calling the function `logoutUser` should return an object with `type` property set to the string `LOGOUT`.
3. The store should be initialized with an object with property `login` set to `false`.
4. Dispatching `loginUser` should update the `login` property in the store state to `true`.
5. Dispatching `logoutUser` should update the `login` property in the store state to `false`.
6. The `authReducer` function should handle multiple action types with a switch statement.
7. `LOGIN` and `LOGOUT` should be declared as `const` values and should be assigned strings of `LOGIN` and `LOGOUT`.
8. The action creators and the reducer should reference the `LOGIN` and `LOGOUT` constants.