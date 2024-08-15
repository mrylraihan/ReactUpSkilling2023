import React from "react"


export const TestContext = React.createContext({
    firstName: "John",
    lastName:"Doe",
    fullName :"John Doe"
})


const TestContextProvider = (props) =>{
    
    return (
			<TestContext.Provider
				value={{
					firstName: '',
					lastName: '',
					fullName: '',
				}}>{props.children}</TestContext.Provider>
		)
    
}
export default TestContextProvider