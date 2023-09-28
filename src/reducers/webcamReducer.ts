import { Reducer } from 'redux';
import { TOGGLE_WEBCAM } from '../actions/webcamActions';

interface WebcamState {
    isWebcamOn: boolean;
}

const initialState: WebcamState = {
    isWebcamOn: false,
};

const webcamReducer: Reducer<WebcamState> = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_WEBCAM:
        return {
          ...state,
          isWebcamOn: !state.isWebcamOn,
        };
      default:
        return state;
    }
  };
  
  export default webcamReducer;