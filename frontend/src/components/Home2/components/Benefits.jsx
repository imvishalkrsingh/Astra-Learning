import { Stopwatch, Rank, Revenue, Savecost } from '../assets'

const BenefitList = [
  {
    key : 0,
    icon : Stopwatch,
    desc : "Do more with less time ",
  },
  {
    key : 1,
    icon : Rank,
    desc : "Be ahead of competitors",
  },
  {
    key : 2,
    icon : Revenue,
    desc : "Unlock new revenue streams",
  }, 
  {
    key : 3,
    icon : Savecost,
    desc : "Saving time and costs for teachers",
  },
];

const BenefitCard = ({icon, desc}) => (
  <div className='benefit_card'>
    <img src={icon} alt='' className='benefit_card_icon'/>
    <p className='benefit_card_desc'>{desc}</p>
  </div>
)

const Benefits = () => {
  return (
    <section className='benefits_section' id='benefits'>
      <div className='right_align'>
        <h1 className='rs_heading'>Benefits</h1>
      </div>
      <div className='ba'>
        <div className='benefit_container'>
          {BenefitList.map((benefit) => (
            <BenefitCard icon={benefit.icon} desc={benefit.desc} key={benefit.key}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
