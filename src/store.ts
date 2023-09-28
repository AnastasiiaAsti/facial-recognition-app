import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import webcamReducer from './reducers/webcamReducer';

interface RootState {
  webcam: ReturnType<typeof webcamReducer>;
}

const rootReducer = combineReducers({
  webcam: webcamReducer,
});

const store = createStore<RootState, any, any, any>(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
