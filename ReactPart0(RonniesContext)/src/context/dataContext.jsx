import { createContext, useContext, useState } from "react";
import {data} from '../data/data'
//if issues come check this 

//context file
const DataContext = createContext({
    data:data
})

//const provider usually be in our app but we are doing it here 
export const DataProvider = ({children}) =>{
    const [dataState, setDataState] = useState(data)
    
    return (
        //passing our new state into the dataState 
        <DataContext.Provider value={{ dataState: dataState, setDataState }}>
            {children}
        </DataContext.Provider>
    )
}


export function useData(){
    return useContext(DataContext)
}

// export {DataProvider};