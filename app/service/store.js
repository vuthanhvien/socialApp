import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import auth 		from 'app/layout/login/reducers';
import home 		from 'app/layout/main/home/reducers';
 
// import persist 		from './reducers';
// import * as actions from './actions';

import { persistStore, persistCombineReducers  } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import thunk from 'redux-thunk';
//create new store


// let reducer = persistCombineReducers(config, reducers);

// const rootReducer = (state, action) => {
// 	if(action.type === 'AUTH_LOGOUT'){
// 		let oldState = state;
// 		state = appReducer({}, {});
// 		state = {
// 			...state,
// 			auth:{
// 				...state.auth,
// 				user:{
// 					...state.auth.user,
// 					userName:oldState.auth.user.userName
// 				},
// 				lang:oldState.auth.lang,
// 			},
// 			persist:{
// 				...state.persist,
// 				isHydrated: true
// 			}
// 		}
// 	}
// 	return appReducer(state, action);
// }
const config = {
   key: 'root',
   storage
}

// const homeReducer = persistCombineReducers(config, {
// 	home: home,
// });

const appReducer = persistCombineReducers(config, {
	auth: auth,
	app: home,
});


function configureStore () {

  // ...
  let store = createStore(appReducer, undefined, applyMiddleware( thunk ) );
  let persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore;

// const store = createStore(
// 	rootReducer,
// 	compose(
// 		applyMiddleware(thunk),
// 	)
// )
//sync local store with store
// persistStore(
// 	store, 
// 	null, 
// 	() => { 
// 		console.log(store.getState());
// 	} 
// );

	// store.dispatch(actions.persistUpdate(true))
// export default store;
