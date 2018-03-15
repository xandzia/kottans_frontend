import {users} from './store/store.js'

export const authGuard = (params) => {
    return Promise.resolve({success: false, redirect: "/login"})
}