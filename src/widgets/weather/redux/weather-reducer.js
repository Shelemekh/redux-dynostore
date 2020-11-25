import { WeatherLoaded } from "./weather-actions";

export const weatherReducer = (state={}, action) => {
        switch (action.type) {
            case WeatherLoaded: {
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
