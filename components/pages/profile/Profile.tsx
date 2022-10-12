import {FC, memo } from 'react'
import { isDev } from '~/utils/helpers'

const Profile: FC = ()=>{
    return (
        <></>
    )
}


if(isDev){
    Profile.displayName = "profile"
}

export default Profile