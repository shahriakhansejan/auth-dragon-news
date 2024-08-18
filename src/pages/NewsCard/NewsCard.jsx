import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
    const { _id, author, thumbnail_url, title, image_url, details } = aNews;
  return (
    <div className="bg-base-100 mb-12 rounded mt-5">
        <div className="flex items-center justify-between px-5 bg-base-200 rounded-t pt-3 pb-4 mb-3">
            <div className="flex gap-3 items-center">
                <img className="h-10 w-10 rounded-full" src={thumbnail_url} alt="" />
                <span>
                    <p className="font-semibold">{author.name}</p>
                    <p>{author.published_date}</p>
                </span>
            </div>

            <div className="flex text-2xl gap-2">
            <CiBookmark></CiBookmark>
            <CiShare2></CiShare2>
            </div>
        </div>
        <h1 className="text-xl font-bold px-5 rounded-t">{title}</h1>
        <img className="pt-4 pb-5 px-5" src={image_url} alt="" />

        {
            details.length > 175?
             <p>{details.slice(0,175)} <br /> <Link to={`/news/${_id}`} className="text-[#FF8C47] font-semibold">Read More.....</Link></p> : 
             <p className="px-5">{details}</p>
        }
        
    </div>
  );
};

NewsCard.propTypes = {
  aNews: PropTypes.object
};

export default NewsCard;
