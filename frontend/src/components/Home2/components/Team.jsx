import { ProfilePic, LinkedIn } from "../assets"

const TeamMembers = [
  {
    key : 1,
    name : "Vishal Kumar Singh",
    post : "MERN STACK DEV",
    disc : "Never let the fear of striking out keep you from playing the game.",
  }
];

const Card = ({name, post, desc}) => {
  return (
    <div className="Card">
      <img 
        src={ProfilePic} 
        alt="Profile" 
        className="Profile_picture"
      />
      <h3 className="Card_Name"> {name} </h3>
      <h3 className="Card_Post"> {post} </h3>
      <p className="Card_Desc"> {desc} </p>
      <img 
        src={LinkedIn} 
        alt="LinkedIn" 
        className="LinkedIn_picture"
      />
    </div>
  )
}

const Team = () => {
  return (
    <section className='Team_section' id='team'>
      <div className='right_align'>
        <h1 className='rs_heading'>Team</h1>
      </div>

      <div className="ta">
        <div className='Card_container'>
          {TeamMembers.map((member) => (
            <Card 
              name={member.name} 
              post={member.post} 
              desc={member.disc}
              key={member.key}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
