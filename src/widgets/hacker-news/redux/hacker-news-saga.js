import { call, put, all } from "redux-saga/effects";
import { storiesAvailable } from "./hacker-news-actions";


export function* hackerNewsSaga() {
    debugger;
    yield call(fetchStories);
}
// function* loadHakerNewsData() {
//     const url =
//         "https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=1362c34423375d167d694489b1c74080";

//     const response = yield call(fetch, url);
//     const json = yield call([response, response.json]);

//     yield put(weatherLoaded(json));
// }
// thunk to fetch the stories


function* fetchStories (){

       const response = yield call(fetchJson, "https://hacker-news.firebaseio.com/v0/topstories.json");
       
                const top5 = response.splice(0, 5);
                const promises = [];
                for (const id of top5) {
                    promises.push(
                        yield call(fetchJson,"https://hacker-news.firebaseio.com/v0/item/" +
                        id +
                        ".json" )
                    );
                }
                
                const stories = yield all(promises);
                yield put(storiesAvailable(stories));
           
    };


// Helper to fetch the json
const fetchJson = url => {
    return fetch(url).then(response => {
        return response.json();
    });
};

// function* fetchStories(){
//     const url = "https://hacker-news.firebaseio.com/v0/topstories.json";
//         const response = yield call(fetch,url);
//         const ids = response.json();
//         debugger;
//         // response.then(
//         //     ids => {
//                 const top5 = ids.splice(0, 5);
//                 const promises = [];
//                 for (const id of top5) {
//                     const newsItem = yield call(fetch, "https://hacker-news.firebaseio.com/v0/item/" +
//                     id +
//                     ".json");
//                     promises.push(newsItem);
//                 }
//                 Promise.all(promises).then(stories => {
//                     put(storiesAvailable(stories));
//                 });
//         //     }
//         // );
// };

