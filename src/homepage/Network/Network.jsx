import { images } from '../../images';
import './Network.scss';

  return
  <>
    <div className="ourNetworkCon">
      <div className='title'>
        <h2>OUR NETWORK</h2>
        <h4>jorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </h4>
        <div className='paragraph'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores placeat laborum voluptatem unde ab harum, <br />
             illo repudiandae aliquam error quis deserunt, soluta beatae asperiores corrupti amet voluptate,<br />
            nobis labore saepe pariatur! Omnis illum nemo hic soluta velit impedit eius, nihil et. <br />
            Odio id saepe accusantium culpa velit exercitationem beatae dolor,
          </p>
        </div>
      </div>

      <div className="joinCon">
        <div className='joinCon2'>
          <h2>HOW TO JOIN US</h2>
          <p  className='pContent'>Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <p className='pContent'>Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
          <p className='pContent'>Borem ipsum, dolor sit amet consectetur <br />
            adipisicing elit.
          </p>
        </div>

        
        <img  src={images.happy} alt="" />
        

        
      </div>
    </div>
    </>
  )
}

export default Network