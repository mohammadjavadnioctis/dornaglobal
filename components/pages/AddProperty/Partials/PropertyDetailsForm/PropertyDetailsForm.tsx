import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'
import PriceInput from './PropertyDetailsPartials/PriceInput'

const PropertyDetailsForm: FC = () => {
  return (
    <div className='outer_wrapper bg-white container rounded-lg py-7'>
      <div className='inner_wrapper grid grid-cols-2'>
          
        <div className=''>

          <PriceInput />
        </div>

      </div>
    </div>
  )
}

if(isDev){
  PropertyDetailsForm.displayName = 'PropertyDetailsForm'
}


export default PropertyDetailsForm