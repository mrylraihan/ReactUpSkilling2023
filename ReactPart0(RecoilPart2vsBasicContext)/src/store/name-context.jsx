import React from "react";

const NameContext = React.createContext({
    name: {
        firstName: '',
        lastName: '',
        fullName: ''
    },
    setName: () => { }
})
export default NameContext