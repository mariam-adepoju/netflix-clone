import youtube_icon from "../assets/youtube_icon.png";
import twitter_icon from "../assets/twitter_icon.png";
import instagram_icon from "../assets/instagram_icon.png";
import facebook_icon from "../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="px-[4%] py-30px max-w-[1000px] mx-auto my-0 ">
      <div className="flex gap-5 mx-0 my-10 ">
        <img
          src={facebook_icon}
          alt=""
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
        <img
          src={instagram_icon}
          alt=""
          className="w-[25px] md:w-[30px] cursor-pointer"
        />
        <img
          src={twitter_icon}
          alt=""
          className="w-[25px]  md:w-[30px] cursor-pointer"
        />
        <img
          src={youtube_icon}
          alt=""
          className="w-[25px]  md:w-[30px] cursor-pointer"
        />
      </div>
      <ul className="grid grid-cols-2 gap-2 text-sm md:grid-cols-4 md:gap-[15px] md:text-base mb-[30px] list-none">
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corperate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="text-gray-400 text-sm">
        © 1997-{new Date().getFullYear()} Netflix, Inc.
      </p>
    </div>
  );
};

export default Footer;
