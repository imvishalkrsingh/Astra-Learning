import { Hero_poster, Introduction_video } from "../assets";

const Hero = () => {
  return (
    <section className="Hero_section">
      <img src={Hero_poster} alt="-HeroPoster-" className="hero_poster" />
      <div className="right_align">
        <h1 className="rs_heading">Learning Platforms</h1>
      </div>
      <div className="hero_container">
        <img 
          src={Introduction_video}
          alt="Intro"
          className="intro_video"
        />
        <div className="hc_subcon">
          <div>
            <p className="hc_para">
              <span className="theme">Astra </span> leverages the demand of increasing Smart classroom to
              provide high-quality education services.
            </p>
            <p className="hc_para">
              With the help of technologies, we provide services for virtual
              meeting, workshops & coachings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
