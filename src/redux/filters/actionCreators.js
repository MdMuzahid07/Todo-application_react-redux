// all action creators for filter sections

import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

/**
 by clicking filter section color , all task will be filter with matched colors
 * and the selected color will be toggled, select or unselect. for this we need two parameters, (color, changeType)
 */
export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
};




/**
 if we click in filter section status , All , complete, incomplete. we will filter tasks. to do this we just need (status) or clicked filter value, or what button we clicked
 */
export const statusChanges = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
};