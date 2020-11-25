import { WeatherLoaded } from "./weather-actions";

export const weatherReducer = (state={}, action) => {
    debugger;
        switch (action.type) {
            case "weatherLoaded": {
                debugger;
                return {
                    ...state,
                    weather:action.payload
                }
            }

            default: {
                return state;
            }
        }

};
