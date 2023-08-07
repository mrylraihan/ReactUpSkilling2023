import React, { useState } from 'react'

function useHttp( ) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const sendRequest = async (requestConfig, applyData) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
               requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method :"GET" ,
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body? JSON.stringify(requestConfig.body): null
               }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            // // the firebase database returns an object of nested objects
            // // we need to yous the weird ids to access them this is why we for 
            // //using a for in which is best for iterating through objects 
            // console.log(data['-NK4ASy7_ASKJ6Fo6PWl'].text)
            applyData(data)
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };
    return {isLoading, error, sendRequest}
}

export default useHttp