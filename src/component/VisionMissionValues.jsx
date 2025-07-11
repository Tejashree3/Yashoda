import React from "react";

const VisionMissionValues = () => {
  const sections = [
    {
      title: "OUR MISSION",
      description:
        "Lorem ipsum dolor sit amet consectetur odio non tellus natoque accumsan. Sed hac enim lorem tempus tortor justo eget scelerisque sed morbi. Senectus urna Vestibulum tincidunt turpis sem magna Nam hendrerit vitae nibh. Auctor Sed urna dignissim malesuada eleifend ultrices justo Curabitur Ma.",
      image: "/target.png",
    },
    {
      title: "OUR VISION",
      description:
        "Lorem ipsum dolor sit amet consectetur odio non tellus natoque accumsan. Sed hac enim lorem tempus tortor justo eget scelerisque sed morbi. Senectus urna Vestibulum tincidunt turpis sem magna Nam hendrerit vitae nibh. Auctor Sed urna dignissim malesuada eleifend ultrices justo Curabitur Maecenas.",
      image: "/vision.png",
    },
    {
      title: "OUR VALUES",
      description:
        "Lorem ipsum dolor sit amet consectetur odio non tellus natoque accumsan. Sed hac enim lorem tempus tortor justo eget scelerisque sed morbi. Senectus urna Vestibulum tincidunt turpis sem magna Nam hendrerit vitae nibh. Auctor Sed urna dignissim malesuada eleifend ultrices justo Curabitur Maecenas.",
      image: "/values.png",
    },
  ];

  const bgColors = ["bg-[#7a0f08]", "bg-[#fd6b0a]", "bg-[#349ca3]"];

  return (
   <div className="flex flex-col py-16 px-4 md:px-20 ">
  {sections.map((section, index) => (
    <div
      key={index}
      className="grid grid-cols-1 md:grid-cols-2 w-full  items-center"
    >
      {index % 2 === 0 ? (
        <>
          <div
            className={`text-white  px-10 md:px-16 py-20 flex flex-col justify-center shadow-2xl rounded-xl ${bgColors[index]}`}
          >
            <h2 className="text-2xl md:text-6xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="text-sm md:text-lg">{section.description}</p>
          </div>

          <div className="flex items-center justify-center p-6">
            <img
              src={section.image}
              alt={section.title}
              className="h-32 md:h-44 object-contain"
            />
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center p-6">
            <img
              src={section.image}
              alt={section.title}
              className="h-32 md:h-44 object-contain"
            />
          </div>

          <div
            className={`text-white  px-10 md:px-16 py-20 flex flex-col justify-center shadow-2xl rounded-xl ${bgColors[index]}`}
          >
            <h2 className="text-2xl md:text-6xl font-bold mb-4">
              {section.title}
            </h2>
            <p className="text-sm md:text-lg">{section.description}</p>
          </div>
        </>
      )}
    </div>
  ))}
</div>

  );
};

export default VisionMissionValues;
