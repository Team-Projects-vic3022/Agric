import { missions } from "../data";

const Mission = () => {
  return (
    <section className="mb">
      {missions.map((mission, idx) => {
        const { heading, paragraph1, paragraph2, image } = mission;
        idx += 1;
        return (
          <div
            key={idx}
            className="container grid grid-cols-2 gap-[5rem] px-[10rem] mb-[10rem]"
          >
            <div
              className={`${idx % 2 === 0 ? "col-[2] row-[1]" : ""} h-[40rem]`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className={`${idx % 2 === 0 ? "col-[1] row-[1]" : ""}`}>
              <h2 className="text-fSize3 mb-[4rem]">{heading}</h2>
              <p className="text-[1.6rem] mb-[2rem]">{paragraph1}</p>

              <p className="text-[1.6rem]">{paragraph2}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Mission;
