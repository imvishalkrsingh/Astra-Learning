// import { Astratech, AI, Handshake } from "../assets";

const Rnd = () => {
  return (
    <section className="rnd_section" id="rnd">
      <div className="right_align">
        <h1 className="rs_heading">Research and Development</h1>
      </div>
      <div className="rnd_container">
        <div className="rnd_case">
          {/* <img src={Astratech} className="rnd_banner" /> */}
          <p className="rnd_desc">
            <span className="theme">ASTRA</span> team is always hustling the
            technology field and constantly improving existing technology as
            well as finding new approaches on how to use the concept of
            synthetic data.
          </p>
        </div>
        <div className="rnd_case">
          {/* <img src={AI} className="order2 rnd_banner" /> */}
          <p className="order1 rnd_desc">
           {/* <span className="theme">@ Kartik lakhera</span> */}
          </p>
        </div>
        <div className="rnd_case">
          {/* <img src={Handshake} className="rnd_banner" /> */}
          <p className="rnd_desc">
            Our R&D team consists of industry <span className="theme">top minds</span> who can step into your
            growth and be a natural augmentation of your existing product team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rnd;
