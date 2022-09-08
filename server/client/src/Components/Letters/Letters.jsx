import './Letters.css';
import Letter from './Letter/Letter';

const Letters = ({ text }) => {
  return (
    <h1 className='letters animate section-margin'>
      {
        text?.split('').map((item, index) => (
          <Letter item={item} key={index}/>
        ))
      }
    </h1>
  )
}

export default Letters