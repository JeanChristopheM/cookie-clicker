import React from 'react';

function Helper({cookies, currentHelper, handleBuy, currentPrice}) {
    let available = false;
    if(cookies >= currentPrice) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Helper</h4>
            <p><span>{currentHelper + 1}</span>c/s</p>
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

export default Helper;