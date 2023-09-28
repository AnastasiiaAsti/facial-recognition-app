import React from 'react';
import { connect } from 'react-redux';
import { startRecognition, stopRecognition } from '../actions/facialRecognitionActions';

interface FacialRecognitionComponentProps {
  isRecognizing: boolean;
  startRecognition: () => void;
  stopRecognition: () => void;
}

const FacialRecognitionComponent: React.FC<FacialRecognitionComponentProps> = ({
  isRecognizing,
  startRecognition,
  stopRecognition,
}) => {
  return (
    <div>
      <button onClick={startRecognition} disabled={isRecognizing}>
        Start Facial Recognition
      </button>
      <button onClick={stopRecognition} disabled={!isRecognizing}>
        Stop Facial Recognition
      </button>
      {isRecognizing && <p>Facial recognition is running...</p>}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isRecognizing: state.facialRecognition.isRecognizing,
});

const mapDispatchToProps = {
  startRecognition,
  stopRecognition,
};

export default connect(mapStateToProps, mapDispatchToProps)(FacialRecognitionComponent);