import { services } from "../data";

const Boxes = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(44rem,_1fr))] gap-4 bg-[#008425]">
      {services.map((service, idx) => {
        const { heading, paragraph1, image } = service;
        return image ? (
          <>
            <img
              src={image}
              alt=""
              className="w-full h-[40rem] object-cover rounded-3xl"
            />
          </>
        ) : (
          <div
            key={idx}
            className="flex items-center justify-center flex-col text-[white] text-center"
          >
            <h1 className="text-[2.5rem]">{heading}</h1>
            <p className="text-[1.6rem]">{paragraph1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
