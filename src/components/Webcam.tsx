import { connect } from "react-redux";
import { toggleWebcam } from "../actions/webcamActions";
import Webcam from "react-webcam";

interface WebcamComponentProps {
  isWebcamOn: boolean;
  toggleWebcam: () => void;
}

const WebcamComponent: React.FC<WebcamComponentProps> = ({
  isWebcamOn,
  toggleWebcam,
}) => {
  const videoConstraints = {
    width: 350,
    height: 620,
    facingMode: 'user',
  };
  return (
    <div className="webcam" id="webcam">
      <button onClick={toggleWebcam}>
        {isWebcamOn ? 'Turn Off Webcam' : 'Turn On Webcam'}
      </button>
      {isWebcamOn && <Webcam videoConstraints={videoConstraints} />}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  isWebcamOn: state.webcam.isWebcamOn,
});

const mapDispatchToProps = {
  toggleWebcam,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebcamComponent);
