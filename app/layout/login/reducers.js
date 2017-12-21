export const initialState = {
	token: '',
	domain:'',
	url: '',
	user: {},
	device:{},
	lang: 'en'
};

export default function reducer(state = initialState, action){
	switch (action.type) {
		case 'SET_APP_LANG':
			return {...state, lang:action.lang };
		case 'AUTH_SET_URL':
			Object.assign(state, action.data);
			return {
				...state
			};
		case 'AUTH_LOGIN':
			Object.assign(state, action.data)
			return {
				...state
			};
		case 'AUTH_UPDATE_USER':
			return {...state, user: action.user };
		case 'AUTH_UPDATE_DEVICE':
			var data = action.data;
			var old = state.device;
			old.token = data.token;			
			old.os = data.os;			
			return {...state, device: old };
		case 'AUTH_SET_INFO':
			return {...state, user: action.data };
		case 'AUTH_SET_LANG':
			return {...state, lang: action.data}
		case 'AUTH_LOGOUT':
			return {...state, token: ''};
		default:
			return state;
	}
};
