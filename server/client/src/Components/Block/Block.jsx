import './Block.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Block = ({ item }) => {
  const navigate = useNavigate();
  const [showBlock, setShowBlock] = useState(false);
  const swapItem = () => {
    setShowBlock(true)
  }
  const resetSwap = () => {
    setShowBlock(false)
  }
  const redirect = () => {
    navigate(`/${item.href}`)
  }
  return (
    <div className='block animate' onMouseEnter={swapItem} onClick={swapItem} onMouseLeave={resetSwap}>
      { item.displayText &&
        !showBlock ? <span className="block-item header-medium">{item?.displayText}</span> :
          <span onClick={redirect} className="block-item header-medium block-item-animate">{item?.linkText}</span>
      }
      
      { item.projectName &&
        <Link to={`/works/${item._id}`}>
          <div className="project-wrapper">
            <h2 className="project-title header">{item?.projectName}</h2>
            <h6 className="project-details text-small">{item?.details}</h6>
          </div>
        </Link>
      }
    </div>
  )
}

export default Block