import {atom} from 'recoil'

const NameData = atom({
    key:'NameData',
    default:{
        firstName:'',
        lastName:'',
        fullName:'',
    }
})

export default NameData