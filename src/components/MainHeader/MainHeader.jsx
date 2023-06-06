import { Link } from "react-router-dom";
import Image from "../../assets/images/main_header.png";

const MainHeader = () => {
  return (
    <div>
      <header className="main_header">
        <div className="container main_header-container">
          <div className="main_header-left">
            <h4>#0100DaysOfWorkOut</h4>
            <h1>Join The Legends of The Fitness World</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              illo beatae, tempora iure eum consequatur consequuntur voluptates
              quas, minima necessitatibus sapiente! Quia voluptas molestiae sed
              placeat nisi dolor id impedit.
            </p>
            <Link to="/plans" className="btn">
              Get Started
            </Link>
          </div>

          <div className="main_header-right">
            <div className="main_header-circle"></div>
            <div className="main_header-image">
              <img src={Image} alt="Main Header Image" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
