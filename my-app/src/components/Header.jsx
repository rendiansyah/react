import React from 'react'
import Button from './Button'

const Header = () => {
    return(
        <header>
            <div className="logo">
                <h1>OLZ</h1>
            </div>
            <div className="button">
                <Button text="Hello"/>
                <Button text="World"/>
            </div>
        </header>
    );
}

export default Header;