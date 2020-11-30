import dynamic from '@redux-dynostore/react-redux';
import subspaced from '@redux-dynostore/react-redux-subspace';
import {runSaga} from '@redux-dynostore/redux-saga';
import { attachReducer } from '@redux-dynostore/redux-subspace';
import { ConnectedWeather } from "./component/weather-component";
import {weatherReducer} from './redux/weather-reducer';
import {weatherSaga} from './redux/weather-saga';


export default dynamic('weather', attachReducer(weatherReducer), runSaga(weatherSaga), subspaced())(ConnectedWeather);