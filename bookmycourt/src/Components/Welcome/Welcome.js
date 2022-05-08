import "./Welcome.css";
import Logo from "../../Icons/main.svg";
const Welcome = () => {
  return (
    
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h1 className="i-name">BookMyCourt</h1>
            <p className="i-desc">
              Now don't need to wait in queue for your turn. Book your court in advance and play endlessly
            </p>
          </div>
        </div>
        <div className="i-right">
          <img src={Logo} alt="" className="i-img" />
        </div>
      </div>
  );
};

export default Welcome;