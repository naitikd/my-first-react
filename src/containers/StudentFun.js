import React, { useState } from 'react';

function StudentFun(props) {
        const  [name,setname] = useState ('Amit')
        const  [id] = useState (10) 


       const changeName = () => {
            setname('Ajay');
        }



    return (
        <div>
           <h1>{name}</h1>
           <h2>{id}</h2>
           <button onClick={changeName}>Change Name</button> 
        </div>
    );
}

export default StudentFun;