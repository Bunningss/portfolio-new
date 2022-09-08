import './Landing.css';
import Instruction from '../../Components/Instruction/Instruction';
import Letters from '../../Components/Letters/Letters';
import Block from '../../Components/Block/Block';
import { navLinks } from '../../staticData';

const Landing = () => {
  const text = "Hello,\nI'm Mahmud\n"
  return (
    <div className='landing default'>
      <Instruction/>
      <div className="intro">
        <div className="col col-1">
          <Letters text={text}/>
        </div>
        <div className="col col-2">
          {
            navLinks.map((item, indx) => (
              <Block item={item} key={indx}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Landing