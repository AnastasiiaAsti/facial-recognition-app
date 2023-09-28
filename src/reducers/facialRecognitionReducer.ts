interface FacialRecognitionState {
    isRecognizing: boolean;
}

const initialState: FacialRecognitionState = {
    isRecognizing: false,
};

const facialRecognitionReducer = (
    state = initialState,
    action: any
): FacialRecognitionState => {
    switch (action.type) {
        case 'START_RECOGNITION':
            return { ...state, isRecognizing: true };
        case 'STOP_RECOGNITION':
            return { ...state, isRecognizing: false };
        default:
            return state;
    }
};

export default facialRecognitionReducer;