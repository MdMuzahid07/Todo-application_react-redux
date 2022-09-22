/*****
*reducer function for todo slice or section, and a reducer function want 2 parameters, called (state = initialState, action).
 * we will use Switch for conditional statement, it's recommended by redux.
 */

import { ADDED, COMPLETEALLTASKS, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes";
import { initialState } from "./initialState";


// we will need a function that get the next id;
const nextId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.payload,
                    completed: false
                }
            ]
        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: !todo.completed
                }
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return {
                    ...todo,
                    color: color
                }
            });


        case DELETED:
            return state.filter(todo => todo.id !== action.payload);

        case COMPLETEALLTASKS:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            });

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);

        default:
            return state;
    }
};

export default reducer;