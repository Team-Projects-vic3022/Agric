import solarBanner from "../images/Solar-Water-Pumps-Blog.jpg";
import solarVideo from "../video/multi-video-1.mp4";

const SolarBanner = () => {
  return (
    <section className="relative h-[100vh] mb">
      <div className="bg-[black] w-full h-full z-0">
        <img
          src={solarBanner}
          alt="#"
          className="w-full h-full object-cover object-right z-0 opacity-[0.5]"
        />
      </div>
      <div className="absolute  z-10 w-[30rem] ">
        <video
          autoPlay
          loop
          muted
          src={solarVideo}
          width="300"
          height="300"
          className="absolute top-[-60rem] left-[10rem] z-10"
        ></video>
      </div>
    </section>
  );
};

export default SolarBanner;
