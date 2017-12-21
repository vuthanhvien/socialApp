export function persistUpdate(value) {
    return {
        type: 'PERSIST_UPDATE',
        value: value,
    };
}

export function connectionState (status) {
  	return {
    	type: 'CHANGE_CONNECTION_STATUS',
    	isConnected: status
  	};
}

export function setLangLocale (lang) {
	return {
		type: 'SET_APP_LANG',
		lang: lang
	}
}


export function setDownload (data) {
  return {
    type: 'DOWNLOAD_SET_DATA',
    data: data
  }
}
