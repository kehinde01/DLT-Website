import './About.scss';
import { images } from '../../images';

const listText = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.',
]

const About = () => {
  return (
    <section className='about container'>
      <div className="imgContainer">
        <img src={images.code} alt="code on vscode image" />
      </div>
      <div className="aboutTextCon">
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          tempore iste, dignissimos esse molestiae nemo.
        </h2>
        {listText.map((text, i) => (
          <p className='pText' key={i}>{text}</p>
        ))}

        <p className='pText absText'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores necessitatibus, pariatur nisi at harum iste est repellat, doloremque illo accusantium laborum officiis quas tempore consectetur dicta facere magnam expedita. Quas illo harum quia maiores autem.
        </p>
      </div>
    </section>

    // <section className="sectionAbout container">
    //   <div className="aboutCon">

    //     <img src={images.code} alt="" />
    //     <div className="aboutText">
    //       <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
    //         tempore iste, dignissimos esse molestiae nemo.
    //       </h2>
    //       <p className='pText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nam facilis nesciunt harum alias voluptatum magnam quam odio amet consequatur autem, sint corrupti veritatis nihil.</p>
    //       <p className='pText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente inventore itaque sequi magni quaerat quos
    //         exercitationem dolore ea at! Accusantium amet ipsam ipsa at tenetur?</p>
    //     </div>
    //   </div>
    //   <div className='aboutPlay'>
    //     <p className='pText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
    //       Quas veniam eos doloribus odio illo! Esse, molestias. Sapiente ea,
    //       alias consectetur, minus dolor, eos earum culpa nobis illo eligendi
    //       optio! Sint fugit dolorum nulla iure pariatur eaque fuga incidunt
    //       voluptatum reprehenderit.
    //     </p>
    //   </div>


    // </section>

  )
}

export default About