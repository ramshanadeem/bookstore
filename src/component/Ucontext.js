import { React, createContext, useState } from 'react'
export const UserContext = createContext();
function UContext(props) {
    const [User, setUser] = useState([
        { name: 'name1', email: "email1" },
        { name: 'name2', email: "email2" },
        { name: 'name3', email: "email3" }
    ])
    return (

        <>
            <UserContext.Provider value={[User, setUser]}>
                {props.children}

            </UserContext.Provider>
        </>
    );
}

export default UContext;
