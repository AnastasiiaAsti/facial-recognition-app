import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import redux-thunk
import webcamReducer from './reducers/webcamReducer';
import facialRecognitionReducer from './reducers/facialRecognitionReducer';

const rootReducer = combineReducers({
    webcam: webcamReducer,
    facialRecognition: facialRecognitionReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;