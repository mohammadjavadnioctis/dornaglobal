import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'

const AddPropertyPage = memo(

    () => {
      return (
        <div>AddPropertyPage</div>
      )
    }
)

if(isDev){
    AddPropertyPage.displayName = 'AddPropertyPage'
}

export default AddPropertyPage