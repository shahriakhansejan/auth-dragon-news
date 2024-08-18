import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import q1 from "../../../assets/qZone1.png";
import q2 from "../../../assets/qZone2.png";
import q3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-2">
        <h2 className="text-xl font-semibold mb-5">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full mt-1">
          <FaGithub />
          Github
        </button>
      </div>

      <div className="p-2 mt-8">
        <h2 className="text-xl font-semibold mb-5">Find Us On</h2>
        <a
          className="flex gap-2 items-center border p-4 rounded-t-lg"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <FaFacebook />
          Facebook
        </a>
        <a className="flex gap-2 items-center border-x p-4" href="">
          <FaXTwitter />X
        </a>
        <a className="flex gap-2 items-center border p-4 rounded-b-lg" href="">
          <FaInstagram />
          Instagram
        </a>
      </div>
      <div className="p-2 mt-8">
        <h2 className="text-xl font-semibold mb-5">Q-Zone</h2>
        <img src={q1} alt="" />
        <img className="my-3" src={q2} alt="" />
        <img src={q3} alt="" />
      </div>
    </div>
  );
};

RightSideNav.propTypes = {};

export default RightSideNav;
