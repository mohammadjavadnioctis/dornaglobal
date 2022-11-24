import React, {FC, memo} from 'react'
import { isDev } from '~/utils/helpers'
import PriceInput from './PropertyDetailsPartials/PriceInput'
import PropertyTitleInput from './PropertyDetailsPartials/PropertyTitleInput'

const PropertyDetailsForm: FC = () => {
  return (
    <div className='outer_wrapper bg-white container rounded-lg py-7'>
      <div className='inner_wrapper grid grid-cols-2'>
          <PropertyTitleInput />
          <PriceInput />


      </div>
    </div>
  )
}

if(isDev){
  PropertyDetailsForm.displayName = 'PropertyDetailsForm'
}


export default PropertyDetailsForm