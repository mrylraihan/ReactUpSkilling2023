import React, { useEffect } from 'react';
import axios from 'axios'
// import './App.css';

// https://stackoverflow.com/questions/38432611/converting-arraybuffer-to-string-maximum-call-stack-size-exceeded
function ShowImages({data, setData}) {
    // const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/images/')
            .then(res => res.data)
            .then(resArray => {
                const data = resArray.map(ele => {
                    const uint8Array = new Uint8Array(ele.image.data.data);
                    const base64String = btoa(uint8Array.reduce((acc, i) => acc += String.fromCharCode.apply(null, [i]), ''));
                    return { ...ele, imageCV: base64String }
                })
                // console.log(data, 'then')
                return data
            })
            .then(setData)
            .catch(console.error)
    }, [])

    // console.log(data)
    return (
        <div className="app">
            <h1>Show images</h1>
            {data.length > 0 && data.map(ele => {

                // const uint8Array = new Uint8Array(ele.image.data.data);
                // const base64String = btoa(uint8Array.reduce((acc, i) => acc += String.fromCharCode.apply(null, [i]), ''));

                return <div><p>{ele.title}</p>
                    <img src={`data:image/png;base64,${ele.imageCV}`} alt="" width='300' />
                </div>
            })}
        </div>
    );
}

export default ShowImages;
