

import dynamic from '@redux-dynostore/react-redux';
import subspaced from '@redux-dynostore/react-redux-subspace';
import { attachReducer } from '@redux-dynostore/redux-subspace';
import {runSaga} from '@redux-dynostore/redux-saga';

import  {ConnectedHackerNews} from "./component/hacker-news-component";
import {hackerNewsReducer} from './redux/hacker-news-reducer';
import {hackerNewsSaga} from './redux/hacker-news-saga';

export default dynamic('hackernews', attachReducer(hackerNewsReducer),runSaga(hackerNewsSaga), subspaced())(ConnectedHackerNews);
