import "./skill.scss"
import { dataSkills } from "../../data.js";

export default function Skills() {
  return (
    <div className='skills' id='skill'>
      <div className='title'>
        <h2>Skills</h2>
      </div>
      <div className='skillWrapper'>
        <div className='skillcard'>
          <ul className="leftside">
            {dataSkills.map((s, index) => {
              if (index % 2 === 0) {
                return <li key={index}>{s.icon} {s.name}</li>
              }
              return null;
            })}
          </ul>
          <ul className="rigthside">
            {dataSkills.map((s, index) => {
              if (index % 2 === 1) {
                return <li key={index}>{s.icon} {s.name}</li>
              }
              return null;
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}
