import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    const { data } = props;
    return (
        <footer>
            <div className="mycontainer flex between">
                <Link to='/'><img src='/images/logo.png' alt='logo' className="logo-footer" /></Link>
                <div className="footer-middle">
                    <p>{data.copyright}</p>
                    <Link to='/joinus' ><button>Join Us</button></Link>
                </div>
                
                <div className="socials flex between">
                    <a href="https://www.facebook.com/anywhere4" target="_blanc" rel="noreferrer noopener">
                        <img src="/images/socials/facebook.png" alt="Social" />
                    </a>
                    <a href="https://www.linkedin.com/company/anytime-anywhere/" target="_blanc" rel="noreferrer noopener">
                        <img src="/images/socials/linkedin.png" alt="Social" />
                    </a>
                    <a href="https://twitter.com/Anytime20212021/" target="_blanc" rel="noreferrer noopener">
                        <img src="/images/socials/twitter.png" alt="Social" />
                    </a>
                    <a href="https://www.instagram.com/anytime4anywhere/" target="_blanc" rel="noreferrer noopener">
                        <img src="/images/socials/instagram.png" alt="Social" />
                    </a>
                </div>
            </div>
        </footer>
    )
}
