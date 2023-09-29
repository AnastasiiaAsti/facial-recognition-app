import { useRef, useEffect } from 'react';
import { connect } from "react-redux";
import Webcam from 'react-webcam';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { toggleWebcam } from "../actions/webcamActions";

interface WebCamComponentProps {
    isWebcamOn: boolean;
    toggleWebcam: () => void;
}

const WebCamComponent: React.FC<WebCamComponentProps> = ({
    isWebcamOn,
    toggleWebcam,
}) => {
    const webcamRef = useRef<Webcam | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        // Initialize TensorFlow.js with a specific backend
        tf.setBackend('webgl');
        // Load blazeface model and start detecting
        const runBlazeface = async () => {
            const box = await blazeface.load();
            setInterval(() => {
                detect(box);
            }, 100);
        };
        runBlazeface();
    }, []);
    
    const returnTensors = false
    // detecting
    const detect = async (box: blazeface.BlazeFaceModel) => {
        if (
            webcamRef.current &&
            webcamRef.current.video &&
            webcamRef.current.video.readyState === 4
        ) {
            // detection logic
            const video = webcamRef.current.video;
            const videoWidth = webcamRef.current.video.videoWidth;
            const videoHeight = webcamRef.current.video.videoHeight;
            // video sizes
            webcamRef.current.video.width = videoWidth;
            webcamRef.current.video.height = videoHeight;
            // canvas sizes
            canvasRef.current?.setAttribute('width', videoWidth.toString());
            canvasRef.current?.setAttribute('height', videoHeight.toString());
            // detections
            const face = await box.estimateFaces(video, returnTensors);
            console.log(face);
            
            const canvasBox = canvasRef.current?.getContext('2d');
            
            if (canvasBox) {
                canvasBox.clearRect(0, 0, videoWidth, videoHeight);
                if (face.length > 0) {
                    face.forEach((det) => {
                        const topLeft = det.topLeft as [number, number];
                        const bottomRight = det.bottomRight as [number, number];
                        const x = topLeft[0];
                        const y = topLeft[1];
                        const width = bottomRight[0] - x;
                        const height = bottomRight[1] - y;

                        canvasBox.strokeStyle = '#FF5A78';
                        canvasBox.lineWidth = 2;
                        canvasBox.strokeRect(x, y, width, height);
                    });
                }
            }
        }
    };

    return (
        <>
            <div className="webcam" id="webcam">
                <button onClick={toggleWebcam}>
                    {isWebcamOn ? 'Face Recognition OFF' : 'Face Recognition ON'}
                </button>
                {isWebcamOn && <Webcam ref={webcamRef} style={{ display: 'flex', textAlign: 'center', width: 300, height: 300, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, zIndex: 9, }} />}
                </div>
            
            {isWebcamOn && <canvas ref={canvasRef} style={{ position: 'absolute', textAlign: 'center', width: 300, height: 300, marginLeft: 'auto', marginRight: 'auto', left: 0, right: 0, zIndex: 9, }} />}
        </>
    );
};

const mapStateToProps = (state: any) => ({
    isWebcamOn: state.webcam.isWebcamOn,
});

const mapDispatchToProps = {
    toggleWebcam,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebCamComponent);
