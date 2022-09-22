// actions creators for all action types

import { ADDED, CLEARCOMPLETED, COLORSELECTED, COMPLETEALLTASKS, DELETED, TOGGLED } from "./actionTypes"


/********
 *  we will receive added todo text with any name for this (todoText)
we will return received text in redux with payload
 */
export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
};


/********
 * by clicking a todo task left side button that will be completed listed, for this we just need todo task (todoId)
 */
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
};


/********
 * by clicking a todo task colors that will get priority for important most import and else, for this we need (todoId, color).
 */
export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            // todoId: todoId,
            // color: color
            todoId,
            color
        }
    }
};


/********
 * by clicking a todo task that will be delete, for this operation we just need todo id
 */
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
};



/********
 * by clicking all completed, all task will be completed listed, for this case we not need () parameters
 */
export const allCompleted = () => {
    return {
        type: COMPLETEALLTASKS,
    }
};


/********
 * by clicking clear completed, all task will be clear or deleted, for this case we not need () parameters
 */
export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
};