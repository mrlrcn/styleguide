import Container from "../../components/AboutMe/Container"
import ListView from "../../components/ListView/ListView"
import Buttons from "../../components/buttons/Buttons"
import Topbar from "../../components/Topbar/Topbar"
import Hero from "../../components/Hero/Hero"
import AboutMe from "../../components/AboutMe/AboutMe"
import HighlightedText from "../../components/AboutMe/HighlightedText"
import Contact from "../../components/Contact/Contact"
import Card from "../../components/Card/Card"
import Marquee from "../../components/Marquee/Marquee"

import AsciiCat from "../../components/AsciiIcons/AsciiCat"
import AsciiMouse from "../../components/AsciiIcons/AsciiMouse"
import AsciiTea from "../../components/AsciiIcons/AsciiTea"
import { Link } from "react-router-dom"



export default function Home() {

    return (
        <>

            <section className=" section section__hero">
                <Hero />
            </section>

            <Marquee />
            
            <section className="section section__aboutme section-padding" id="aboutme">
                <AboutMe />
            </section> 

            <section className="section section__featuredprojects section-padding" id="featuredprojects">
                <h6>Some of my work</h6>
                <ListView
                    name='Trve Faith Clothing'
                /> 

                <ListView
                    name='Portfolio project'
                />

                <ListView
                    name='Killzeus'
                />
            </section>

            <section id="contact" className="section section__contact">

                <div style={{ position: 'relative'}}>
                    <Card color="blue"  title="https://twitter.com/mrlrcn">
                        <p className="contact-card__text">Follow me on social media</p>

                        <ul className="contact-card__list">
                            <li className="contact-card__list__item">
                                <Link className="contact-card__link" to="https://twitter.com/" target="_blank">Twitter</Link>
                            </li>
                        </ul>
                        
                        <span className="contact-card__icon">
                            <AsciiCat />
                        </span>

                    </Card>

                    <Card color="green"  y="15" title="https://github.com/mrlrcn">

                        <p className="contact-card__text">See more of what I do in</p>

                        <ul className="contact-card__list">
                            <li className="contact-card__list__item">
                                <Link className="contact-card__link" to="https://twitter.com/" target="_blank">Github</Link>
                            </li>

                            <li className="contact-card__list__item">
                                <Link className="contact-card__link" to="https://twitter.com/" target="_blank">Codepen</Link>
                            </li>
                        </ul>

                        <span className="contact-card__icon">
                            <AsciiMouse />
                        </span>     

                    </Card>

                    <Card color="red" x="30" y="50" title="https://mrlrcn.com/#contact">

                        {/* <a className="contact-card__link" href="mailto:m.alarconarbona@gmail.com" target="_blank" rel="noopener noreferrer">m.alarconarbona@gmail.com</a> */}

                        <p className="contact-card__text">Contact me through</p>

                        <ul className="contact-card__list">
                            <li className="contact-card__list__item">
                                <Link className="contact-card__link" to="https://twitter.com/" target="_blank">Linkedin</Link>
                            </li>
                            <li className="contact-card__list__item">
                                <Link className="contact-card__link" to="https://twitter.com/" target="_blank">Email</Link>
                            </li>
                        </ul>

                        <span className="contact-card__icon">
                            <AsciiTea />
                        </span>
                        
                    </Card>                   
                </div>

            </section>

        </>
    )
}