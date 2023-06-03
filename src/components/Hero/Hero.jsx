import './Hero.scss';
import '../../scss/_buttons.scss';
import '../../scss/_variables.scss';

export default function Hero() {
    return (
        <>
        
            <section className="section-hero">
                <div className="section-hero__content-wrapper">
                    <div className="section-hero__text-wrapper">
                        <h1 className="section-hero__title">Mar Alarcón<span className="blinkin-cursor">_</span></h1>

                        <h2 className="section-hero__subtitle" >frontend developer && graphic designer</h2>
                    </div>
                    <a href="" className="section-hero__contact underline-btn ">Get in touch!</a>
                </div>
            </section>
            

        </>
    )
}