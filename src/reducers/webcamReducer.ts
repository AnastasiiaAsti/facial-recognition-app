interface WebcamState {
    isWebcamOn: boolean;
}

const initialState: WebcamState = {
    isWebcamOn: false,
};

const webcamReducer = (state = initialState, action: any): WebcamState => {
    switch (action.type) {
        case 'TOGGLE_WEBCAM':
            return { ...state, isWebcamOn: !state.isWebcamOn };
        default:
            return state;
    }
};

export default webcamReducer;