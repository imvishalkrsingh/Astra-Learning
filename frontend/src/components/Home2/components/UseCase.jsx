import { arrow, icon_check, clipart2 } from "../assets";

const buisness_cases = [
  "Improve student-facing interactions with sales and support",
  "Host virtual events, workshops or live classes",
  "Provide the next level of interaction using trending technologies",
];

const personal_cases = [
  "Present yourself at various centres at the same time",
  "Enable yourself to provide your education services at ease.",
  "Get a new life for the best memories with your beloved students",
];

const CaseCard = ({ desc, dir }) => (
  <div 
    className={`${dir==="right" ? "bgleft " : "bgright "} case_box`}
  >
    <img src={icon_check} alt="-" className="checkmark" />
    <p className="case_desc">{desc}</p>
  </div>
);

const UcSection = ({ title, cases, dir }) => (
  <div className="ucsection">
    <div className="ucsubsection">
      <img src={arrow} alt="" className="arrow" />
      <h1 className="ucsection_title">{title}</h1>
    </div>
    <div className="case_card_container">
      {cases.map((elem, idx) => (
        <CaseCard desc={elem} dir={dir} key={idx}/>
      ))}
    </div>
  </div>
);

const 
UseCase = () => {
  return (
    <section className="usecase_section" id="usecase">
      <h1 className="ls_heading">Use Cases</h1>
      <p className="usecase_desc">
        Astra provides a wide range of platforms
        for delivering quality education services.
      </p>

      <div className="uc_container">
        <UcSection title="BUISNESS" cases={buisness_cases} dir="left"/>
        <UcSection title="PERSONAL" cases={personal_cases} dir="right"/>
      </div>

      <img alt="" src={clipart2} className="clipart2" />
    </section>
  );
};

export default UseCase;
