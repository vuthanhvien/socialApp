export const initialState = {
	detail: {},
	timeline: []
};

export default function reducer(state = initialState, action){
	switch (action.type) {
		case 'TIMELINE_SET':
			return {
				...state,
				timeline: action.data
			}
		case 'TIMELINE_ADD':
			var timeline = state.timeline;
			var _new = [];
			_new.push(action.data);
			_new = _new.concat(timeline);
			return {
				...state,
				timeline: _new
			}
		case 'TIMELINE_DELETE':
			var id = action.id;
			var timeline = state.timeline;
			var _new = [];
			timeline.map((item, index)=>{
				if(id != item.id){
					_new.push(item);
				}
			})
			return {
				...state,
				timeline: _new
			}
		case 'FEED_ADD_COMMENT':
			var timeline = state.timeline;
			var comment = action.data;
			var id = action.id;
			timeline.map((feed, index)=>{
				if(feed.id == id) {
					feed.comments = feed.comments ? feed.comments : [];
					feed.comments.push(comment)
					return feed;
				}else{
					return feed;
				}
			})
			return{
				...state,
				timeline: timeline
			}
		default:
			return state;
	}
};
