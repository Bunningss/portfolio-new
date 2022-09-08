import './About.css'
import Letters from '../../Components/Letters/Letters';
import placeholder from '../../assets/placeholder.jpg';

const About = () => {
  const text = 'Design & develop\ndigital products.'
  return (
    <div className='default about'>
      <div className="about-wrapper section-default">
        <Letters text={text}/>
        {/* <img className='image-large section-margin' src={placeholder} loading='lazy' alt="" /> */}
        <div style={{backgroundImage: `url(${placeholder})`}} className="image-large section-margin"></div>
        <div className="text-area section-margin">
          <h2 className='header-small'>About</h2>
          <h4 className="header-smaller section-gap bio">
            Highly motivated web designer and full-stack developer with 3 years of experience working in the web development industry. I specialize in developing scalable, custom responsive websites also maintaining existing websites.
          </h4>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
          <h5 className="text-regular section-gap">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem vero aut aliquid exercitationem ea tempore quia dignissimos corporis explicabo laudantium.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default About