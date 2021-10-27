import React from 'react';

function Multiplier({cookies, currentMultiplier, handleBuy, currentPrice}) {
    let available = false;
    if(cookies >= currentPrice) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Multiplier</h4>
            <p>x<span>{currentMultiplier + 1}</span></p>
            <p>Price: {currentPrice}cookies</p>
            {available &&
            <button type="button" className={"allowed"} onClick={handleBuy}>BUY</button>
            }
            {!available &&
            <button type="button" className={"forbidden"}>BUY</button>
            }
        </div>
    );
}

export default Multiplier;