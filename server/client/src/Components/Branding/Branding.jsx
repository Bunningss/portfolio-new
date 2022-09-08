import './Branding.css';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';

const Branding = () => {
  const location = useLocation().pathname.split('/')[2];
  const brandRef = useRef();
  useEffect(() => {
    if (brandRef.current) {
      location ? brandRef.current.style.color = '#000' : brandRef.current.style.color = '#fff';
    }
  }, [location]);
  return (
    <Link to='/'>
        <div ref={brandRef} className='branding animate'>tayef.</div>
    </Link>
  )
}

export default Branding