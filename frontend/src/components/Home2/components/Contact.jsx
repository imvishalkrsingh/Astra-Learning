import { LinkedIn } from "../assets";

const Contact = () => {
  return (
    <section className='Contact_section' id="contact">
      <h1 className='ls_heading'>Let's have a talk!</h1>

      <p className='Contact_desc'>
        If you need any Services for Personal or Business needs, Please Contact us! 
        <br  className='lb'/>
        Teamastra will help you to bring your most visionary ideas to life.
      </p>
      <div className="Contact_partition">
        <div className="Astra_about">
          <div className="Astra_intro">
            <h2 className="Ai_text">Hey Astras !</h2>
            <p className="Ai_desc">Follow us on social media to be the 1st to know what something new from Team Astra</p>
            <img 
              src= {LinkedIn} 
              alt="LinkedIn"
              className="LinkedIn_picture" 
            />
          </div>
          <div className="Astra_address">
            <h3 className="Aa_text">Company address:</h3>
            <p className="Aa_desc">
              Astra learning platform,
              <br className="lb"/>
              Sehore,Madhya Pradesh
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
