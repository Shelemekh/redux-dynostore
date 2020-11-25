import { HackerNewsStoriesAvailable } from "./hacker-news-actions";

export const hackerNewsReducer = (state ={ items: [] }, action) => {
 debugger;
        switch (action.type) {
            case HackerNewsStoriesAvailable: {
                debugger;
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
