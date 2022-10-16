import React,{FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const MessagesTab = memo(

    () => {
      return (
        <div>MessagesTab</div>
      )
    }
)

if(isDev){
    MessagesTab.displayName = 'MessagesTab'
}

export default MessagesTab