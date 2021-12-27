import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Functional Component
const CounterApp = ({value = 10}) =>{

    const [counter, setCounter] = useState(value);
    
    console.log(counter);

    // handleAdd
    const handleAdd = () =>{
        // setCounter(counter + 1);
        setCounter( (c) => c + 1);
    }

    const handleSubstract = () => {
        setCounter( counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1> CounterApp </h1>
            <p>{ counter }</p>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubstract }>-1</button>
            <button onClick={ handleAdd }>+1</button>
            {/* {<button onClick={ (e) => handleAdd(e) }>+1</button>} */}
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

export default CounterApp;