import React from 'react';
// import Carousel from 'react-elastic-carousel';
// import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

export default function About(props) {
    const { data } = props;
    return (
        <div className="about-page">
            <div className="about-intro">
                <img src="/images/about-bg.png" alt="About" />
                <div className="mycontainer">
                    <div className="contact-block slideMeFromLeft">
                        <h1 className={data.lang === 'ar' ? 'reverse-heading' : ''}>Anytime & Anywhere</h1>
                        <p className={data.lang === 'ar' ? 'reverse-parag' : ''}>{ data.about }</p>
                    </div>
                </div>
            </div>
            {/* <div className="team-container">
                <div className="team-carousel mycontainer">
                    <h2>{ data.ourTeamTitle }</h2>
                    <Carousel showArrows={window.innerWidth < 600 ? false : true} itemsToShow={window.innerWidth < 600 ? 1 : 3} enableAutoPlay={true} autoPlaySpeed={3000} >
                        <div className="carousel-item">
                            <img data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="20" src="/images/team/nizar.png" alt="Team" />
                            <h3>{data.nizar}</h3>
                            <span>{data.nizarFunction}</span>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/team/maamoun.png" alt="Team" />
                            <h3>{data.maamoun}</h3>
                            <span>{data.maamounFunction}</span>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/team/faycel.png" alt="Team" />
                            <h3>{data.faycel}</h3>
                            <span>{data.faycelFunction}</span>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/team/kawther.png" alt="Team" />
                            <h3>{data.kawther}</h3>
                            <span>{data.kawtherFunction}</span>
                        </div>
                        <div className="carousel-item">
                            <img src="/images/team/houssem.png" alt="Team" />
                            <h3>{data.houssem}</h3>
                            <span>{data.houssemFunction}</span>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="reviews-container">
                <div className="mycontainer">
                    <h2>{ data.reviewsTitle }</h2>
                    <Carousel itemsToShow={window.innerWidth < 600 ? 1 : 2} showArrows={window.innerWidth < 600 ? false : true}
                    enableAutoPlay={false} autoPlaySpeed={5000} >
                        <a href="https://goo.gl/maps/TWbqEb7siNgP7Nd66" 
                        target="_blanc" rel="noreferrer noopener" className="reviews-item">
                            <FormatQuoteIcon />
                            <div className="personne" >
                                <img src="/images/reviews/default-profile.png" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="20" alt="Review" />
                                <strong>Marc Delpino</strong>
                            </div>
                            <p>Bonjour,<br /><br />
                                Je suis vraiment surpris par la qualité de service et prise en charge de cette société. Professionnalisme remarquable, Une équipe solidaire et bien formé.<br />
                                Je tiens à vous féliciter pour le travail que vous êtes entrain d'effectuer. Bon courage et bonne continuation.</p>
                        </a>
                        <a href="https://goo.gl/maps/TWbqEb7siNgP7Nd66" 
                            target="_blanc" rel="noreferrer noopener" className="reviews-item">
                            <FormatQuoteIcon />
                            <div className="personne" >
                                <img src="/images/reviews/review2.png" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="20" alt="Review" />
                                <strong>Bel Haj Hassen Wiem</strong>
                            </div>
                            <p>Bonjour !<br /><br />
                                Ravie d'avoir collaborer avec vous je recommande vivement.</p>
                        </a>
                        <a href="https://goo.gl/maps/TWbqEb7siNgP7Nd66" 
                            target="_blanc" rel="noreferrer noopener" className="reviews-item">
                            <FormatQuoteIcon />
                            <div className="personne" >
                                <img src="/images/reviews/default-profile.png" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="20" alt="Review" />
                                <strong>renov ENR</strong>
                            </div>
                            <p><br /><br />
                                Une expérience de collaboration très intéressante . Nous y sommes ravis.</p>
                        </a>
                    </Carousel>
                </div>
            </div> */}
        </div>
    )
}
