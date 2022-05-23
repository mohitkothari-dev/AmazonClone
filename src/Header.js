/* Name of the file is in uppercase because it is a Componenet */
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{cart, user}, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
            <img src="../e.png" alt="logo" className="header__logo"/>
            </Link>
            
            <div className="header__address">
                <RoomIcon className="roomicon"></RoomIcon>
                <div className="header__address__option">
                    <span className="header__address__optionLine1">
                    Hello
                    </span>
                    <span className="header__address__optionLine2">
                    Select your address
                    </span>
                </div>
            </div>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">

            <Link to={!user && "/login"}>
                <div onClick={handleAuth} className="header__option">
                    <span className="header__optionLine1">
                        Hello, {user? user?.email.split("@")[0] : "Guest"}
                    </span>
                    <span className="header__optionLine2">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>

                <div className="header__option">
                    <span className="header__optionLine1">
                        Returns
                    </span>
                    <span className="header__optionLine2">
                        & Orders
                    </span>
                </div>

                <Link to="/checkout">
                <div className="header__cart">
                    <AddShoppingCartIcon></AddShoppingCartIcon>
                    <span className="header__optionLine2 header__cartCount">{cart?.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
