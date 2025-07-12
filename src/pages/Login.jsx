import { useState } from "react";
import logo from "../assets/logo.png";
import { login, signup } from "../firebase";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" h-16 w-16 border-4 border-gray-300 border-t-transparent rounded-full  animate-spin"></div>
    </div>
  ) : (
    <div className="h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/background_banner.jpg')] py-[15px] px-[5%] sm:py-5 sm:px-[8%]">
      <img src={logo} alt="" className=" w-[150px]" />
      <div className="w-full max-w-[450px] bg-[rgba(0,0,0,0.75)] rounded-sm sm:p-[60px] m-auto p-[20px] ">
        <h1 className="text-3xl font-medium mb-[28px]">{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              required
              className="input"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : null}
          <input
            type="email"
            placeholder="Your email"
            required
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={user_auth}
            type="submit"
            className="w-full border-0 outline-0 p-4 bg-[#e50914] text-white rounded-sm text-base font-medium mt-5 cursor-pointer"
          >
            {signState}
          </button>
          <div className="flex items-center justify-between text-[#b3b3b3] text-[13px]">
            <div className="flex items-center gap-1.5">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="mt-10 text-[#737373]">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
                className="ml-1.5 text-[#fff] font-medium cursor-pointer"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have account?
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
                className="ml-1.5 text-[#fff] font-medium cursor-pointer"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
