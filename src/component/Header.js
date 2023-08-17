import React from 'react';
import { Authenticator } from '@aws-amplify/ui-react';

const Header = () => {
  return (
    <header id="home" className="header">
      <nav className="nav" role="navigation">
        <div className="container nav-elements">
          <div className="branding">
            <a href="#home"><img src="images/hpluslogo.svg" alt="Logo - H Plus Sports" /></a>
          </div>
          <ul className="navbar">
            <li><a href="#home">home</a></li>
            <li><a href="#history">history</a></li>
            <li><a href="#products">products</a></li>
            <li><a href="#guarantee">guarantee</a></li>
            <li><a href="#people">people</a></li>
            <li>
                <Authenticator>
                  {({ signOut, user }) => (
                    <>
                      {user.username}
                      <button onClick={signOut}>Sign out</button>
                    </>
                  )}
        </Authenticator>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container tagline">
        <h1 className="headline">Our Mission - Be Healthy</h1>
        <p>We support and encourage <em>active and healthy and fun</em> lifestyles, by offering <em>ethically sourced</em> and <em>eco-friendly</em> nutritional products for the <em>performance-driven</em> athlete.</p>
      </div>
    </header>
  );
}

export default Header;