import ListData from "./ListData";

import { selector } from "recoil";

const listState = selector({
    key:"listState",
    get:({get})=>{
       const data = get(ListData)
       return data
    }
})

export default listState