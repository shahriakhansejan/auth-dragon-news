import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
      

        createUser(email, password)
        .then(result => {
            console.log(result.user)
            navigate(location.state? location.state : '/')
        })
        .catch(error => {
            console.error(error)
        })
    }
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl bg-white px-16 py-20 rounded mx-auto mb-40">
        <h2 className="text-3xl font-semibold text-center text-[#403F3F] border-b-2 pb-12">
          Register your Account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#403F3F]">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              name="name"
              className="input bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#403F3F]">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              name="url"
              placeholder="Give the URL"
              className="input bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#403F3F]">
                Email address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#403F3F]">
                Password
              </span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#f3f3f3]"
              required
            />
          </div>
          <div className="mt-2">
          <input type="checkbox" name="" id="" required/>
          <span className="text-sm ml-2">Please Accept our <Link to='https://i.postimg.cc/FRmdGMX8/wildflower-terms-and-conditions.png' className="font-semibold ">Terms & Conditions</Link></span>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white">Register</button>
          </div>
        </form>
        <p className="font-semibold text-center">
          Already have an Account? Please{" "}
          <Link className="text-blue-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
