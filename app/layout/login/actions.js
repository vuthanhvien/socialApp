// import * as api from './api';

const setInfo = (data) => ({
    type: 'AUTH_SET_INFO',
    data: data
});

export const setDevice = (data)=>({
    type: 'AUTH_UPDATE_DEVICE',
    data: data
})

// export const getInfo = (params) => dispatch => {
//     api.getInfo(params).then(response => {
//         if(response && response.success){
//             dispatch(setInfo(response.rows));
//         }
//     });
// };


export function authLogin(data) {
    return {
        type: 'AUTH_LOGIN',
        data: data
    };
}

export function setURLStore(data) {
    return {
        type: 'AUTH_SET_URL',
        data: data
    }
}

export function authLogout() {
    return {
        type: 'AUTH_LOGOUT'
    };
}

export function setLangLocale(data){
    return{
        type: 'AUTH_SET_LANG',
        data: data
    }
}
// export const authLogout = (params) => dispatch => {
//     api.logout(params).then(response => {
//         if(response && response.success){
//             dispatch(logout());
//         }
//     });
// };
