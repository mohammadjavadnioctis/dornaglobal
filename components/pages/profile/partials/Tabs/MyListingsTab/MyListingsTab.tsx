import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const MyListingsTab:FC = memo(

    () => {
      return (
        <div>MyListingsTab</div>
      )
    }
)

if(isDev){
    MyListingsTab.displayName = 'MyListingsTab'
}

export default MyListingsTab