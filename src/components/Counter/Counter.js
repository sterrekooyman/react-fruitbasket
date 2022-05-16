import React from 'react';
import './Counter.css';

function Counter({name, title, increment, count, decrement}) {

    return (
        <>
            <h2>{title}</h2>
            <button
                type="button"
                onClick={decrement}
                name={name}
                className="button"
                disabled={count === 0}>
                -
            </button>

            {count}

            <button
                className="button"
                onClick={increment}
                name={name}
                type="button">
                +
            </button>
        </>

    );
}

export default Counter;