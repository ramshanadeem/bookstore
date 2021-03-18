import { React, useState, useContext } from 'react'
import { UserContext } from './Ucontext';

function Mapping() {

    const userContext = useContext(UserContext)
    const user = userContext[0]


    return (
        <div className="App">


            { user.map((item, index) => {
                return <li key={index}>{`${item.name} ${item.email}`}</li>
            })
            }
        </div>
    );
}

export default Mapping;
