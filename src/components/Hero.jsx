import heroImage from "../images/agric-joe.png";

const Hero = () => {
  return (
    <section className="mb">
      <div className="container grid grid-cols-[1fr,50rem] gap-10">
        <div>
          <h1 className="text-fSize2 leading-tight mb-8 text-gray-800 tracking-[1.2] font-pdisplay">
            Revolutionizing Agriculture with Innovative Solutions
          </h1>

          <p className="text-fSize4 leading-relaxed mb-12">
            Welcome to Multi Trade Universal Produce Nigeria Limited, where we
            empower farmers with innovative agricultural solutions. Discover how
            our advanced products and services can transform your farming
            practices and enhance sustainability
          </p>
          <div className="flex items-center max-w-[50rem] gap-[5rem]">
            <button className=" border border-[#008425] text-[2rem] p-[1rem_2rem] rounded-lg">
              learn more
            </button>
            <button className="bg-[#008425] text-[2rem] p-[1rem_2rem] rounded-lg text-[white]">
              contact us
            </button>
          </div>
        </div>

        <div className="">
          <img src={heroImage} alt="" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
