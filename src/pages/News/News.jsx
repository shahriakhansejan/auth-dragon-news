import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { Link, useNavigate, useParams } from "react-router-dom";

const News = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-xl font-semibold">Dragon News</h1>
          <p>{id}</p>
          <button onClick={goBack} className="btn">Back</button>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

News.propTypes = {};

export default News;
