import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const AddPropertyPage = memo(
    () => {
      return (
        <div >
            <h1 className=''>Add Your Property To Dorna Global</h1>
        </div>
      )
    }
)

if(isDev){
    AddPropertyPage.displayName = 'AddPropertyPage'
}

export default AddPropertyPage