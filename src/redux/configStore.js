import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import logger from 'redux-logger';
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), logger, sagaMiddleware]

const preloadedState = {

}
console.log("rootReducer", rootReducer)
const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
  enhancers: []
})

sagaMiddleware.run(rootSaga);

export function getStore() {
  return store;
}
