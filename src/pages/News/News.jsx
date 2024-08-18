import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import {  useLoaderData, useNavigate, useParams } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();
  const detailsNews = useLoaderData();
  
  const { _id } = useParams();
  const detailNews = detailsNews.find(detailNews => detailNews._id === _id);
  console.log(detailNews)
  const { image_url, details } = detailNews;
  

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <h1 className="text-xl font-semibold">Dragon News</h1>
          <p>{_id}</p>
            <img src={image_url} alt="" />
            <p className="font-semibold p-5">{details}</p>
          <button onClick={goBack} className="btn btn-primary mt-5">Back</button>
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
