import {FC, memo } from 'react'
import { isDev } from '~/utils/helpers'
import ProfileHero from './partials/ProfileHero'

const Profile: FC = ()=>{
    return (
        <ProfileHero />
    )
}


if(isDev){
    Profile.displayName = "profile"
}

export default Profile