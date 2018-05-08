import {ADD_USER_INFO} from './Constant'

export const addUserInfo = info => ({
    type: ADD_USER_INFO,
    payload: info
})
