import {
  Left,
  Right,
  arrow,
  Hand,
  Mencomputer,
  Globe,
  Earth,
} from "../assets";

const Services = [
  {
    key: 0,
    first: "image",
    icon: Hand,
    title: "Designing Services",
    desc: [
      "We have expertise in creating Modern Graphics, Thumbnails, Ui and much more using advanced AI technologies that capture every detail of your project. We work closely with our clients to ensure that the content we produce meet their specific needs and requirements.",
    ],
  },
  {
    key: 1,
    first: "text",
    icon: Mencomputer,
    title: "Software Development",
    desc: [
      "At Astra, we deliver Software that empower businesses to thrive in the digital era. ",
      "We understand that every organization has unique needs and challenges, that is why we offer tailored software solutions that align with your specific goals and requirements.",
    ],
  },
  {
    key: 2,
    first: "image",
    icon: Globe,
    title: "Leasing Services",
    desc: [
      "The Leasing Services section, where we offer you the ultimate convenience and flexibility in acquiring the assets you need.",
      "Whether you're a business owner seeking equipment, a professional looking for a place, or an individual  interested in renting a property, our comprehensive leasing services are designed to cater to your specific needs.",
    ],
  },
  {
    key: 3,
    first: "text",
    icon: Earth,
    title: "Growth Marketing",
    desc: [
      "At Astra, we understand the significance  of effective marketing strategies in today's competitive landscape. Whether you're a small business  aiming to establish your brand or a large corporation looking aiming to establish your brand. Our services are designed to propel your business forward & maximize your online presence",
      "With our Marketing Services, you can confidently conduct business with clients from around the world and generate leads in new markets.",
    ],
  },
];

const ServiceCard = ({ first, icon, title, desc }) => (
  <div className="servicecard">
    <img alt="" src={icon} className={`${first === "image" ? "order1" : "order2"} servicecard_banner`} />
    <div
      className={`${
        first === "text" ? "order1" : "order2 text_right"
      } sc_subcontainer`}
    >
      <h1 className="sc_title">{title}</h1>
      {desc.map((listitm, idx) => (
        <p className="sc_desc" key={idx}>
          {listitm}
        </p>
      ))}
    </div>
  </div>
);

const About = () => {
  return (
    <section className="about_section" id="about">
      <h1 className="ls_heading">Why Astra ?</h1>
      <p className="about_heading_desc">
        ASTRA can be implemented for various teachers. A few examples are shown
        below, while the possibilities are endless and only constrained by your
        imagination.
      </p>
      <div className="about_container">
        <img src={Left} alt="Previous" className="carousel_button" />
        <div className="video_container">
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/htznIeWKgg8"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="carousel_element"
            allowFullScreen
          ></iframe>
          <div className="carousel_circles">
            <div className="active carousel_circle"></div>
            <div className="carousel_circle"></div>
            <div className="carousel_circle"></div>
            <div className="carousel_circle"></div>
          </div>
        </div>
        <img src={Right} alt="Next" className="carousel_button" />
        <img alt="" src={arrow} className="designarrow" /> {/*Just Design*/}
      </div>

      <div className="right_align">
        <h1 className="rs_heading">Our Services</h1>
      </div>
      <div className="right_align">
        <p className="our_services_desc">
          We are a leading company specialized in providing galaxy of
          services in education sector like Software Development, Graphic
          Design, Marketing and Content creation.
        </p>
      </div>

      <div className="services_container">
        {Services.map((service) => (
          <ServiceCard
            first={service.first}
            // icon={service.icon}
            title={service.title}
            desc={service.desc}
            key={service.key}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
