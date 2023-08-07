import NameData from "./NameData";

import { selector } from "recoil";

const nameState = selector({
    key:"nameState",
    get:({get})=>{
        const data = get(NameData)
       return data
    }
})

export default nameState