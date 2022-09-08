import { useEffect, useRef, useState } from 'react';
import './Letter.css';

const Letter = ({item}) => {
  const [ time, setTime ] = useState(false);
  const letterref = useRef();
  const animationStart = () => {
    letterref.current?.classList.add('jump')
    setTime(!time)
  }
  useEffect(() => {
    setTimeout(() => {
      letterref.current?.classList.remove('jump')
    }, 3001)
  },[time])
  return (
    <span ref={letterref} onMouseEnter={animationStart} className='letter header'>{item}</span>
  )
}

export default Letter