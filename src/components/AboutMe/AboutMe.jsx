import Marquee from '../Marquee/Marquee'
import Container from './Container'
import HighlightedText from './HighlightedText'

export default function AboutMe() {
    return (
        <>
        <section className="section-AboutMe">
    
            <Marquee />

            <div className="section-AboutMe__content">

                <div className="section-AboutMe__content-item">
                    <h3 className="section-AboutMe__content-item__title">
                        <HighlightedText title="Education" color="red" />
                    </h3>
                    <p className="section-AboutMe__content-item__text">
                        I started my educational journey with a degree in <b>Fine Arts, Visual Arts and Design</b>.</p>
                        <p className="section-AboutMe__content-item__text">
                        As a multidisciplinary arist I discovered a profound fascination for the intersection of art and technology, which made me want to enhance my expertise by studying a postgraduate in <b>UX/UI</b>, <b>Digital Marketing</b> and <b>Web Development</b>.
                    </p>
                </div>

                <div className="section-AboutMe__content-item">
                    <h3 className="section-AboutMe__content-item__title">
                        <HighlightedText title="Languages" color="green" />
                    </h3>
                    <p className="section-AboutMe__content-item__text">
                        I create appealing, performant websites that meet product needs and captivate clients. Simple, clean, useful, and accessible design is my focus. 
                    </p>
                    <br />
                    <p className="section-AboutMe__content-item__text">

                    To achieve this, I work with a range of technologies such as <b>HTML</b>, <b>SASS/SCSS</b>, <b>JavaScript</b>, <b>React</b> and <b>php</b>.
                    </p>
                </div>

                <div className="section-AboutMe__content-item">
                    <h3 className="section-AboutMe__content-item__title">
                        <HighlightedText title="Softwares" color="blue" />
                    </h3>
                    <p className="section-AboutMe__content-item__text">
                        I have extensive experience using <b>Adobe Suite</b> programs to handle graphic design as well as video, audio and photo editing tasks.
                    </p>
                    <br />
                    <p className="section-AboutMe__content-item__text">
                        Additionally, I work diverse softwares and tools, including <b>Visual Studio Code</b>, <b>WordPress</b>, <b>Github</b> and <b>Figma</b>. 
                    </p>
                </div>

                <div className="section-AboutMe__content-item">
                    <h3 className="section-AboutMe__content-item__title">
                        <HighlightedText title="Things I like" color="yellow" />
                    </h3>
                    <p className="section-AboutMe__content-item__text">
                        Passionate about various creative pursuits, I find joy in drawing, videogames, music, and <span className="italic">-obviously!-</span> cats!
                        </p>
                        <br />
                        <p className="section-AboutMe__content-item__text">
                        I also really love photography, with some of my work featured in some exhibitions and even the Photoalicante International Photography Festival!
                    </p>
                </div>
            </div>

        </section>
        
        </>
    )
}