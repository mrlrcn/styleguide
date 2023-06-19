import './Hero.scss';
import '../../scss/_buttons.scss';
import '../../scss/_variables.scss';
import Buttons from '../buttons/Buttons';

export default function Hero() {
    return (
        <>
        
            <section className="section-hero">
                <div className="section-hero__content-wrapper">
                    <div className="section-hero__text-wrapper">
                        <h1 className="section-hero__title">Mar Alarcón<span className="blinkin-cursor">_</span></h1>

                        <h2 className="section-hero__subtitle" >frontend developer && ui/ux designer</h2>
                    </div>
                    {/* <a href="#contact" className="section-hero__contact underline-btn ">Get in touch!</a> */}
                    <Buttons  asLink="true"  classStyle="underline" text="Get in touch!"  target="_self" url="#contact"></Buttons>
                </div>
            </section>
            

        </>
    )
}