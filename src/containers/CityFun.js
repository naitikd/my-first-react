import React, { useState } from 'react';

function CityFun(props) {
        const [name,setcity] = useState('Surat')

        const changecity = () => {
            setcity ('vadodara')
        }
    return (
        <div>
           <h1>{name}</h1>
           <button onClick={changecity}>Change city</button> 
        </div>
    );
}

export default CityFun;