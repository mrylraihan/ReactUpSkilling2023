import React, { useState } from "react";

const NameContext = React.createContext({
    name: {
        firstName: '',
        lastName: '',
        fullName: ''
    },
    setName: () => { }
})
export default NameContext;


export function NameProvider({children}) {
    const [name, setName] = useState({
        firstName: '',
        lastName: '',
        fullName: ''
})
    return (
    <NameContext.Provider value={{name, setName}}>
        {children}
    </NameContext.Provider>
  )
}
