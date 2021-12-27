import React from 'react';
import PropTypes from 'prop-types';
// import React, {Fragment} from "react";

// Functional Components
const FirstApp = ({hello, subtitle}) =>{
    
    // if(!hello){
    //     throw new Error('El saludo es necesario.');
    // }

    // const sayHi = "Hello Everybody from a Variable";
    // const sayHi = 1234;
    // const sayHi = true; // CANNOT PRINT A BOOLEAN
    // const sayHi = [1, 2, 3, 4, 5];
    // const sayHi = 324.1;

    // const sayHi = {
    //     name: 'Alberto',
    //     age: 20,
    // }

    return (
        <>
            <h1> {hello} </h1>
            {/*<pre>{ JSON.stringify(sayHi, null, 3) }</pre>*/}
            <p>{subtitle}</p>
        </>
    );
}

FirstApp.propTypes = {
    hello: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    subtitle: "I'm a subtitle",
}

export default FirstApp;