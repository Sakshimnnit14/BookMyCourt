import './Info.css'
import Left from "../../Icons/info_left.svg"
import Right from "../../Icons/info_right.svg"
const Info = () => {
  return (
    <div className="info">
        <div className="info-left">
          <div className="info-wrapper">
            <h1 className="info-name">View Status</h1>
            <img src={Left} alt="" className="info-left-img" />
            <p className="info-desc">
              Now don't need to wait in queue for your turn. Book your court in advance and play endlessly
            </p>
          </div>
          <div className="info-wrapper">
            <h1 className="info-name">Book Now</h1>
            <img src={Right} alt="" className="info-img" />
            <p className="info-desc">
              Now don't need to wait in queue for your turn. Book your court in advance and play endlessly
            </p>
          </div>
        </div>
        
    </div>
  );
};

export default Info;