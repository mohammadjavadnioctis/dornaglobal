import React,{FC, memo} from 'react'
import NoResults from '~/components/NoResult/NoResult'
import { isDev } from '~/utils/helpers'

const MessagesTab = memo(

    () => {
      return (
        <div className='w-full h-full p-4'>
          <h2 className='text-accent-600'>My Messages</h2>
          <h3 className='text-sm opacity-60'> all conversations </h3>
          <div className='mt-7'>
            <NoResults />
          </div>
          </div>
      )
    }
)

if(isDev){
    MessagesTab.displayName = 'MessagesTab'
}

export default MessagesTab