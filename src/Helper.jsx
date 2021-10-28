import React from 'react';

function Helper({state, handleBuy}) {
    let available = false;
    if(state.count >= state.cookiePerSecondPrice) {
        available = true;
    } else {
        available = false;
    }
    return (
        <div className={'main__shop__multiplier'}>
            <h4>Helper</h4>
            <p><span>{state.cookiePerSecond + 1}</span>c/s</p>
            <p>Price: {state.cookiePerSecondPrice}cookies</p>
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