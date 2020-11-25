export const WeatherLoaded = "weather/weatherLoaded";

export const weatherLoaded = weather => {
    debugger;
    return {
        type: WeatherLoaded,
        payload: weather,
    };
};
