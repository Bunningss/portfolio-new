import { useEffect, useState } from 'react';
import Block from '../../Components/Block/Block';
import { publicRequest } from '../../requestMethods';
import './Works.css';

const Works = () => {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const p = await publicRequest.get('/projects');
        setProjects(p.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getProjects();
  }, []);
  return (
    <div className='works default'>
        <div className="works-wrapper section-default section-margin">
            {
                projects?.map((item, indx) => (
                    <Block item={item} key={indx}/>
                ))
            }
        </div>
    </div>
  )
}

export default Works