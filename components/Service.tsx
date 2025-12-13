const data = [
  {
    title: "Our ACP Cladding Process — From Concept to Completion",
    description:
      "We deliver premium ACP cladding solutions with a structured, step-by-step workflow that ensures durability, precision, and stunning visual impact.",

    feature1: {
      title: "Site Inspection & Requirement Analysis",
      description:
        "We begin with a detailed site visit to understand your structure, measurements, branding needs, and design expectations before starting the project.",
      image: "/images/before-after/m-bb.png",
      video: "",
    },

    feature2: {
      title: "Modern ACP Design & Planning",
      description:
        "Our design team creates modern, aesthetic ACP cladding designs that enhance your building’s appearance while maintaining structural integrity.",
      image: "/images/acp/m-d.jpeg",
      video: "",
    },

    feature3: {
      title: "Fabrication & Professional Installation",
      description:
        "Using high-quality ACP sheets, we carry out precision cutting, bending, and professional installation to ensure long-lasting performance.",
      image: "/images/acp/const-v.jpeg",
      video: "",
    },

    feature4: {
      title: "Final Finish & Project Handover",
      description:
        "After installation, we perform quality checks and finishing touches to deliver a flawless final look that elevates your brand and property.",
      image: "/images/before-after/m-a.jpeg",
      video: "",
    },
  },
];


const Media = ({ image, video, alt }: {image: string, video: string, alt: string}) => {
  if (video) {
    return (
      <video
        src={video}
        autoPlay
        muted
        loop
        controls={false}
        playsInline
        className="mt-8 h-full w-full object-cover rounded-lg"
      />
    );
  }

  return (
    <img
      src={image}
      alt={alt}
      className="mt-8 h-full w-full object-cover rounded-lg"
    />
  );
};


const Service = () => {
  const {
    title,
    description,
    feature1,
    feature2,
    feature3,
    feature4,
  } = data[0];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-24 flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold lg:max-w-3xl lg:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground text-center text-lg font-medium md:max-w-4xl lg:text-xl">
            {description}
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="border-muted2 relative flex w-full flex-col border md:w-1/2 lg:w-full">

            {/* Row 1 */}
            <div className="relative flex flex-col lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b p-10 lg:w-3/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">{feature1.title}</h2>
                <p className="text-muted-foreground">{feature1.description}</p>
                <Media {...feature1} alt={feature1.title} />
              </div>

              <div className="flex flex-col justify-between p-10 lg:w-2/5">
                <h2 className="text-xl font-semibold">{feature2.title}</h2>
                <p className="text-muted-foreground">{feature2.description}</p>
                <Media {...feature2} alt={feature2.title} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="border-muted2 relative flex flex-col border-t lg:flex-row">
              <div className="border-muted2 flex flex-col justify-between border-b p-10 lg:w-2/5 lg:border-b-0 lg:border-r">
                <h2 className="text-xl font-semibold">{feature3.title}</h2>
                <p className="text-muted-foreground">{feature3.description}</p>
                <Media {...feature3} alt={feature3.title} />
              </div>

              <div className="flex flex-col justify-between p-10 lg:w-3/5">
                <h2 className="text-xl font-semibold">{feature4.title}</h2>
                <p className="text-muted-foreground">{feature4.description}</p>
                <Media {...feature4} alt={feature4.title} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Service };
