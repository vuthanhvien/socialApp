// import * as api from './api';

export const setTimeline = (data) => ({
    type: 'TIMELINE_SET',
    data: data
});

export const addTimeline = (data)=>({
    type : 'TIMELINE_ADD',
    data: data
})

export const addComment = (data)=>({
	type: 'FEED_ADD_COMMENT',
	data: data
})