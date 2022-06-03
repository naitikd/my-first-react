// Function based component
//rsf

import React, { useState } from 'react';

function CountryFun(props) {
    const [countryName, setCountryName] = useState('India'); // hook

    const changeCountry = () => {
        setCountryName('US');
    }

    return (
        <div>
            <p>{countryName}</p>
            <button onClick={() => changeCountry()}>Change Country</button>
        </div>
    );
}

export default CountryFun;