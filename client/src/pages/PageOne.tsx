import { Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      I'm an page one
      <br />
      <Link to="/">Go back to home screen</Link>
    </div>
  );
};

export default PageOne;
