import './Work.css';
import Letters from '../../Components/Letters/Letters';
import { publicRequest } from '../../requestMethods';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const Work = () => {
    const [ project, setProject ] = useState({});
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    useEffect(() => {
      const getProject = async () => {
        try {
          const p = await publicRequest.get(`/projects/${id}`);
          setProject(p.data);
        } catch (err) {
          console.log(err.message)
        }
      };
      getProject();
    }, [id]);

    useEffect(() => {
      window.scrollTo(0,0);
    }, []);
  return (
    <div className='work default'>
        <div className="work-wrapper section-default">
            <Letters text={project.projectName}/>
            <p className="work-details animate section-margin">{project.details}</p>
            <img className='image-large section-margin' src={project.image} loading='lazy' alt="" />
            <span className="text-area work-detailed section-margin">
                Lorem ipsum, dolor sit amet consectetur \nadipisicing elit. A possimus facere libero, dicta veritatis quas unde odio accusantium. Atque sit enim mollitia blanditiis molestias magnam at eveniet aliquam id ducimus unde, voluptatum, ut dicta! Eveniet corrupti, sed tempore asperiores iure officiis expedita ab, nisi assumenda explicabo porro eius sit, in optio? Vel nisi, eaque praesentium exercitationem, quibusdam iusto expedita tenetur nam vero deserunt perferendis eos ipsam! Quos repellendus id voluptas mollitia atque esse dolores laboriosam sapiente ut suscipit aut quod est, excepturi sequi, consequatur repudiandae fuga minima? Natus, eum? Omnis pariatur voluptate veritatis, similique at hic nulla sapiente eius inventore?
            </span>
        </div>
    </div>
  )
}

export default Work