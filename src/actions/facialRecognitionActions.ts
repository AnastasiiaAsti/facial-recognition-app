export const startRecognition = () => {
    return (dispatch: any) => {
        dispatch({ type: 'START_RECOGNITION' });
        try {  
        } catch (error) {
        } finally {
            dispatch({ type: 'STOP_RECOGNITION' });
        }
    };
};

export const stopRecognition = () => {
    return (dispatch: any) => {
        dispatch({ type: 'STOP_RECOGNITION' });
    };
};