import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const ProfileTab: FC = memo(

    () => {
      return (
        <div>Profile Tab</div>
      )
    }
)

if(isDev){
    ProfileTab.displayName = 'ProfileTab'
}

export default ProfileTab