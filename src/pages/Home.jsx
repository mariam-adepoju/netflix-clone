import Navbar from "../components/Navbar";
import TitleCards from "../components/TitleCards";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative ">
        <img src={hero_banner} alt="hero" className="hero-img" />
        <div className="absolute w-full pl-[4%] md:pl-[6%] bottom-0">
          <img
            src={hero_title}
            alt="hero-title"
            className="hidden sm:block w-4/10 md:w-9/10 max-w-105 mb-2.5 md:mb-7.5"
          />
          <p className="max-w-175 text-[12px] md:text-base mb-2.5 md:mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2.5 mb-7.5 lg:mb-12.5">
            <button className="border-0 outline-0 px-2.5 py-0.5 sm:px-5 sm:py-2 inline-flex items-center gap-2.5 sm:gap-5 text-[10px] sm:text-[15px] bg-white font-semibold rounded-[4px] cursor-pointer text-black hover:bg-[#ffffffbf]">
              <img
                src={play_icon}
                alt="play"
                className="w-[15px] sm:w-5 md:w-[25px]"
              />
              Play
            </button>
            <button className="border-0 outline-0 px-2.5 py-0.5 sm:px-5 sm:py-2 inline-flex items-center  gap-2.5 sm:gap-5 text-[10px] sm:text-[15px] bg-[#6d6d6eb3] font-semibold rounded-[4px] cursor-pointer hover:bg-[#6d6d6e66]">
              <img
                src={info_icon}
                alt="info"
                className="w-[15px] sm:w-5 md:w-[25px]"
              />
              More Info
            </button>
          </div>
          <TitleCards className="hidden lg:block" />
        </div>
      </div>
      <div className="pl-[4%] md:pl-[6%]">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Picks for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
