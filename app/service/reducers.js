
export const initialState = {
	isHydrated: false,
	isConnected: false,
};

export default function reducer(state = initialState, action){
	switch (action.type) {
		case 'PERSIST_UPDATE':
			return {...state, isHydrated: action.value };
		default:
			return state;
	}
};
