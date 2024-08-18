import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
        .then(result => {
          console.log(result.user)
          navigate(location.state? location.state : '/')
        })
        .catch(error =>
          console.error(error)
        )
    }
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl bg-white px-16 py-20 rounded mx-auto mb-40">
        <h2 className="text-3xl font-semibold text-center text-[#403F3F] border-b-2 pb-12">Login your Account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#403F3F]">Email address</span>
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
              <span className="label-text font-semibold text-xl text-[#403F3F]">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-[#f3f3f3]"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral text-white">Login</button>
          </div>
        </form>
        <p className="font-semibold text-center">Do not have an Account? Please  <Link className="text-red-600" to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
