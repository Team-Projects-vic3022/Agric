import image from "../images/multi-trade-logo.png";
const Navigations = () => {
  return (
    <section className="mb-[5rem]">
      <nav className="container flex justify-between items-center">
        <div className="h-[10rem] w-auto">
          <img src={image} alt="" className="w-full h-full" />
        </div>

        <ul className="flex items-center justify-between w-[20rem]">
          <li>Home</li>
          <li>About</li>
          <li>Our Services</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigations;
