import React from 'react';

function Bonus({cookies, handleBuy, currentPrice, currentState}) {
    let available = false;
    if(cookies >= currentPrice) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Bonus</h4>
            <p>200%cookies/click for two second</p>
            <p>Price: {currentPrice}cookies</p>
            {available && !currentState &&
            <button type="button" className={"allowed"} onClick={handleBuy}>BUY</button>
            }
            {(!available || currentState) &&
            <button type="button" className={"forbidden"}>BUY</button>
            }
        </div>
    );
}

export default Bonus;