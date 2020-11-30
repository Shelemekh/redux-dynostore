export const hackerNewsReducer = (state ={ items: [] }, action) => {
        switch (action.type) {
            case "storiesavailable": {
                console.log('DYNAMIC REDUCER TRIGGERED');
                return {
                    ...state,
                    items:action.payload.items
                }
            }
            default: {
                return state
            }
        }
    
};
