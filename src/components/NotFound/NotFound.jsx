import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section>
      <div className="container notfound_container">
        <h2>Page not found</h2>

        <Link to="/" className="btn">
          Go Back To Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
