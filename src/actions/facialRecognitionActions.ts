import OpenCV from "../utils/OpenCV";

export const startRecognition = () => {
    return async (dispatch: any) => {
        dispatch({ type: 'START_RECOGNITION' });
        try {  
            const cv = await OpenCV();
            const video = document.getElementById('webcam') as HTMLVideoElement;
            const src = new cv.Mat(video);
            src.delete()
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