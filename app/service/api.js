import {
	AlertIOS,
	Alert,
	Platform,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {Toast} from 'native-base';

import axios from 'axios'; // https://github.com/mzabriskie/axios
import qs from 'qs';
import store from './store';
import Setting from 'app/config/settings';

import * as actionsLogout from 'app/layouts/login/actions';

axios.interceptors.request.use(function (config) {
	//Solve API url	
	console.log("Before Request: "+config.url+" >>>", config);
	let stores 	= store.getState();
	let baseUrl = '';
	

	if (config.headers && config.headers.gw ) {
		//Headers request for groupware
		baseUrl 	= stores.auth.baseUrl ;
		config.url 	= [ baseUrl, config.url.replace(/^\/|\/$/g, '')].join('/');

		config.headers['APP_TYPE'] = 'channel';
		config.headers['App-Type'] = 'channel';
		config.headers['app-type'] = 'channel';
		config.headers['DEVICE_TYPE'] = Platform.OS;
		config.headers['device-type'] = Platform.OS;
		config.headers['Device-Type'] = Platform.OS;
		config.headers['DEVICE'] = 'phone';
		config.headers['device'] = 'phone';

		var Cookie = stores.auth.gwCookie;
		config.headers['Cookie'] = ['', 'HANBIRO_GW='+Cookie].join(';');
		config.headers['HANBIRO_GW'] = Cookie;
		config.headers['Authorization'] = 'Basic ' +  Cookie + ':' + stores.auth.gwHmailKey;

		// Inject device id & mobile's token
		if(config.method === 'get')
		{
			
		}
		else if(config.method === 'post')
		{
			if(!config.headers['Pupload']){
				config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
				config.data = qs.stringify(config.data);
			}
		}
		return config;
	} else {
		//Headers request for node
		baseUrl 	= stores.auth.url ;
		config.url 	= [baseUrl, config.url.replace(/^\/|\/$/g, '')].join('/') ;
		config.headers = config.headers ? config.headers : [];
		config.headers['Authorization'] =  'Bearer ' + stores.auth.token;
		return config;
	}
}, function (e) {
	// Do something with response error 
	if (e.response && e.response.json) {
		e.response.json().then((json) => {
			if (json) throw json;
			throw e;
		});
	} else {
		throw e;
	}
});

/**
 * Response interceptor 
 * 
 * @author Paul <paul@hanbiro.com>
 * @since  2017-07-13T09:46:07+0700
 */
axios.interceptors.response.use(function (response) {
	console.log("After Request "+response.config.url+" >>", response);
	// Do something with response data

	return response;
}, function (e) {
	// Do something with response error 
	let error = JSON.parse(JSON.stringify(e));
	console.log("After Request exception >>>", error);
	var lang = store.getState().auth.lang;

	if (error.response && error.response.status == 401) {
		Alert.alert(
			'Error',
			'Access has timed out.',
			[
				{
					text: 'OK',
					onPress: () => {
						store.dispatch(actionsLogout.authLogout());
					}
				},
			],
			{ cancelable: false }
		);
		throw e;
	} else if (error.code == "ECONNABORTED") {
		console.log("Timeout connection >>>", error);
		Alert.alert("Error", "Connect timed out.");
		throw e;
	} else {
		console.log("Throw request error >>>", error);

		Toast.show({
              text: 'Cannot connect to server',
              position: 'bottom',
              buttonText: 'Okay'
            })

		// Alert.alert(
		// 	"Error", 
		// 	"Cannot connect to server.",
		// 	[
		// 		{
		// 			text: 'OK',
		// 			onPress: () => {
		// 				// store.dispatch(actionsLogout.authLogout());
		// 			}
		// 		},
		// 	],
		// 	{ cancelable: false }
		// );
		throw e;
	}
});

/****************************************
 * End AXIOS Interceptors
 ****************************************/

// export const exceptionExtractError = (exception) => {
// 	if (!exception.Errors) return false;
// 	let error = false;
// 	const errorKeys = Object.keys(exception.Errors);
// 	if (errorKeys.length > 0) {
// 		error = exception.Errors[errorKeys[0]][0].message;
// 	}
// 	return error;
// };

/**
 * @author vien<vien@hanbiro.com>
 * @since  2017-09-01
 * @param  {[type]}   url          [description]
 * @param  {Object}   params       [description]
 * @param  {Object}   headers      [description]
 * @param  {String}   responseType [description]
 * @return {[type]}                [description]
 */
export const get = (url, params = {}, headers = {}, responseType = 'json') => {
	return axios({
		method: 'get',
		url: url,
		params: params,
		headers: headers,
		responseType: responseType
	})
		.then(function (response) {
			return Promise.resolve(response.data);
		})
		.catch((e) => {
			handleError(e);
			//handle error
		});
};

function handleError(e) {
	console.log(e)
}
/**
 * @author vien<vien@hanbiro.com>
 * @since  2017-09-01
 * @param  {[type]}   endPoint [description]
 * @param  {Object}   payload  [description]
 * @param  {Object}   headers  [description]
 * @return {[type]}            [description]
 */
export const post = (url, data = {}, headers = {}) => {
	var request = {
		method: 'post',
		url: url,
		data: data,
		headers : {
           	"Accept": "application/json",
            ...headers
		}
	}
	return axios(request)
		.then(function (response) {
			return Promise.resolve(response.data);
		})
		.catch((e, request) => {
			console.log(e);
			// Did with interceptors
		});
};

export const httpDelete = (url, params = {}, headers = {}, responseType = 'json') => {
	return axios({
		method: 'delete',
		url: url,
		params: params,
		headers: headers,
		responseType: responseType
	})
		.then(function (response) {
			return Promise.resolve(response.data);
		})
		.catch((e) => {
			handleError(e);
			//handle error
		});
};

/**
 * @author vien<vien@hanbiro.com>
 * @since  2017-09-15
 * @param  {[type]}   url      [description]
 * @param  {[type]}   formData [description]
 * @param  {Object}   headers  [description]
 * @param  {Boolean}  percent  [description]
 * @return {[type]}            [description]
 */
export const postFormData = (endPoint, formData, headers = {}, callBackPercent = null, callBackError = null) => {

	let config = {
		method: 'post',
		url: endPoint,
		data: formData,
		headers: {
			...headers,
			...{ 
				'Content-Type': 'multipart/form-data',
				'Pupload': true
			}
		}
	}

	let backupValue = 0;

	if(callBackPercent) {
		config = {
			...config,
			onUploadProgress: function (progressEvent) {
	          	let percentCompleted = (progressEvent.loaded/progressEvent.total);
	          	if(percentCompleted - backupValue >= 0.15 || backupValue == 0 || percentCompleted == 1) {
	          		backupValue = percentCompleted;

	          		var index = '';
	          		formData._parts.map((param, key) => {
	          			if(param[0]  == 'index'){
	          				index = param[1];
	          			}
	          		});
	          		
	          		callBackPercent( percentCompleted.toFixed(2), index);
	          	}
		    }	
		}
	}

	return axios(config)
		.then(function (response) {
			return Promise.resolve(response.data);
		})
		.catch((e) => {
			if(callBackError) {
				callBackError();
			}
		});
};

export const socket = (data) => {
	return (
		new Promise(function (resolve, reject) {
			if (true) {
				resolve('heoo');
			} else {
				reject('error');
			}
		})
	)
}

