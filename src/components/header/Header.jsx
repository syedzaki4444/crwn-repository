import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo} from '../../assests/crown.svg';

import './header.scss';

const Header = () => {

    return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link class="navbar-item" to="/">
                        <Logo />
                    </Link>
                </div>


                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <Link class="button is-primary" to="/shop">
                                <strong>SHOP</strong>
                            </Link>
                            <Link class="button is-primary"  to="/shop">
                                <strong>CONTACT</strong>
                            </Link>
                        </div>
                    </div>
                </div>

            </nav>    
    )

}

export default Header;