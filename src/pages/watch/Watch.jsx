import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";
import { useHistory } from 'react-router-dom';

export default function Watch() {
  const history = useHistory();// for routing
  const handleClickBack = () =>{
    history.push("/home")
  }
  return (
    <div className="watch">
      <div className="back" onClick={handleClickBack}>
        <ArrowBackOutlined />
        Home
      </div>
      <iframe
        className="video"
        autoPlay
        progress
        controls
        src="https://www.youtube.com/embed/b1NVOsatpF0"
       >
        </iframe>
    </div>
  );
}